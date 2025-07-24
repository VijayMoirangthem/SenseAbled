import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Eye, Trophy, Clock, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MazeCell {
  walls: {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
  };
  visited: boolean;
  isPath: boolean;
}

interface GameStats {
  level: number;
  score: number;
  completionTime: number;
  errors: number;
  contrastRatio: number;
}

// Configuration constants
const MAZE_CONFIG = {
  SIZE: 12,
  CELL_SIZE: 32,
  TIME_LIMIT: 45,
  INITIAL_CONTRAST_RATIO: 21, // WCAG AAA standard
  MIN_CONTRAST_RATIO: 1.5,    // Just barely visible
  CONTRAST_DECREMENT: 1.8,     // Gradual decrease
} as const;

// Color science utilities
const getLuminance = (r: number, g: number, b: number): number => {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

const getContrastRatio = (l1: number, l2: number): number => {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
};

const generateColorWithContrast = (targetContrast: number, isBackground: boolean = true): string => {
  // Reference luminance (white background)
  const referenceLuminance = 1;
  
  if (isBackground) {
    // For background, keep it light
    return '#ffffff';
  }
  
  // Calculate target luminance for walls/text
  const targetLuminance = Math.max(0, (referenceLuminance + 0.05) / targetContrast - 0.05);
  
  // Convert luminance back to RGB (approximate)
  const gamma = 2.4;
  const value = targetLuminance <= 0.0031308 
    ? targetLuminance * 12.92 
    : 1.055 * Math.pow(targetLuminance, 1 / gamma) - 0.055;
  
  const rgbValue = Math.max(0, Math.min(255, Math.round(value * 255)));
  
  return `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`;
};

const ContrastSensitivityMaze: React.FC = () => {
  const [maze, setMaze] = useState<MazeCell[][]>([]);
  const [playerPos, setPlayerPos] = useState<{ row: number; col: number }>({ row: 0, col: 0 });
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'completed' | 'failed' | 'paused'>('idle');
  const [stats, setStats] = useState<GameStats>({
    level: 1,
    score: 0,
    completionTime: 0,
    errors: 0,
    contrastRatio: MAZE_CONFIG.INITIAL_CONTRAST_RATIO
  });
  const [timeLeft, setTimeLeft] = useState(MAZE_CONFIG.TIME_LIMIT);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  const [gameHistory, setGameHistory] = useState<GameStats[]>([]);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const gameStartRef = useRef<number>(0);
  const mazeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPos, setDragStartPos] = useState<{ x: number; y: number } | null>(null);
  const [dragStartPlayerPos, setDragStartPlayerPos] = useState<{ row: number; col: number }>({ row: 0, col: 0 });

  // Enhanced maze generation with guaranteed solution
  const generateMaze = useCallback((size: number): MazeCell[][] => {
    const initializeMaze = (): MazeCell[][] => {
      return Array(size).fill(null).map(() =>
        Array(size).fill(null).map(() => ({
          walls: { top: true, right: true, bottom: true, left: true },
          visited: false,
          isPath: false
        }))
      );
    };

    const maze = initializeMaze();
    const stack: { row: number; col: number }[] = [];
    
    // Start from random position to increase variety
    let currentRow = 0;
    let currentCol = 0;
    
    maze[currentRow][currentCol].visited = true;
    stack.push({ row: currentRow, col: currentCol });

    const getUnvisitedNeighbors = (row: number, col: number) => {
      const neighbors = [];
      
      if (row > 0 && !maze[row - 1][col].visited) {
        neighbors.push({ row: row - 1, col, direction: 'top' });
      }
      if (col < size - 1 && !maze[row][col + 1].visited) {
        neighbors.push({ row, col: col + 1, direction: 'right' });
      }
      if (row < size - 1 && !maze[row + 1][col].visited) {
        neighbors.push({ row: row + 1, col, direction: 'bottom' });
      }
      if (col > 0 && !maze[row][col - 1].visited) {
        neighbors.push({ row, col: col - 1, direction: 'left' });
      }
      
      return neighbors;
    };

    const removeWall = (current: { row: number; col: number }, next: { row: number; col: number; direction: string }) => {
      switch (next.direction) {
        case 'top':
          maze[current.row][current.col].walls.top = false;
          maze[next.row][next.col].walls.bottom = false;
          break;
        case 'right':
          maze[current.row][current.col].walls.right = false;
          maze[next.row][next.col].walls.left = false;
          break;
        case 'bottom':
          maze[current.row][current.col].walls.bottom = false;
          maze[next.row][next.col].walls.top = false;
          break;
        case 'left':
          maze[current.row][current.col].walls.left = false;
          maze[next.row][next.col].walls.right = false;
          break;
      }
    };

    // Generate maze using depth-first search
    while (stack.length > 0) {
      const neighbors = getUnvisitedNeighbors(currentRow, currentCol);
      
      if (neighbors.length > 0) {
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];
        removeWall({ row: currentRow, col: currentCol }, next);
        
        currentRow = next.row;
        currentCol = next.col;
        maze[currentRow][currentCol].visited = true;
        stack.push({ row: currentRow, col: currentCol });
      } else {
        const prev = stack.pop();
        if (prev) {
          currentRow = prev.row;
          currentCol = prev.col;
        }
      }
    }

    // Verify path exists from start to end
    const verifyPath = (): boolean => {
      const pathMaze = maze.map(row => row.map(cell => ({ ...cell, visited: false })));
      const pathStack = [{ row: 0, col: 0 }];
      pathMaze[0][0].visited = true;

      while (pathStack.length > 0) {
        const current = pathStack.pop()!;
        
        if (current.row === size - 1 && current.col === size - 1) {
          return true;
        }

        const cell = pathMaze[current.row][current.col];
        
        // Check all four directions
        const moves = [
          { dr: -1, dc: 0, wall: 'top' },
          { dr: 0, dc: 1, wall: 'right' },
          { dr: 1, dc: 0, wall: 'bottom' },
          { dr: 0, dc: -1, wall: 'left' }
        ];

        moves.forEach(({ dr, dc, wall }) => {
          const newRow = current.row + dr;
          const newCol = current.col + dc;
          
          if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
            if (!cell.walls[wall as keyof typeof cell.walls] && !pathMaze[newRow][newCol].visited) {
              pathMaze[newRow][newCol].visited = true;
              pathStack.push({ row: newRow, col: newCol });
            }
          }
        });
      }
      
      return false;
    };

    // Regenerate if no path exists (shouldn't happen with proper algorithm)
    if (!verifyPath()) {
      console.warn('Generated maze has no solution, regenerating...');
      return generateMaze(size);
    }

    // Reset visited flags
    maze.forEach(row => row.forEach(cell => { cell.visited = false; }));

    return maze;
  }, []);

  const startGame = useCallback(() => {
    try {
      const newMaze = generateMaze(MAZE_CONFIG.SIZE);
      setMaze(newMaze);
      setPlayerPos({ row: 0, col: 0 });
      setGameState('playing');
      setTimeLeft(MAZE_CONFIG.TIME_LIMIT);
      setFeedback(null);
      gameStartRef.current = Date.now();
      
      // Focus the maze for keyboard input and request fullscreen
      setTimeout(() => {
        if (mazeRef.current) {
          mazeRef.current.focus();
          if (mazeRef.current.requestFullscreen) {
            mazeRef.current.requestFullscreen().catch(err => {
              console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
          }
        }
      }, 100);
    } catch (error) {
      console.error('Failed to start game:', error);
      setFeedback({ type: 'error', message: 'Failed to generate maze. Please try again.' });
    }
  }, [generateMaze]);

  const resetGame = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    // Exit fullscreen if active
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => {
        console.error(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
      });
    }

    setGameState('idle');
    setMaze([]);
    setPlayerPos({ row: 0, col: 0 });
    setStats({
      level: 1,
      score: 0,
      completionTime: 0,
      errors: 0,
      contrastRatio: MAZE_CONFIG.INITIAL_CONTRAST_RATIO
    });
    setTimeLeft(MAZE_CONFIG.TIME_LIMIT);
    setFeedback(null);
    setGameHistory([]);
  }, [])

  const handleLevelComplete = useCallback(() => {
    const completionTime = (Date.now() - gameStartRef.current) / 1000;
    const newStats: GameStats = {
      ...stats,
      completionTime,
      score: stats.score + Math.max(1, Math.floor((timeLeft / MAZE_CONFIG.TIME_LIMIT) * 100))
    };
    
    setGameHistory(prev => [...prev, newStats]);
    setFeedback({ type: 'success', message: `Level ${stats.level} completed in ${completionTime.toFixed(1)}s!` });
    setGameState('completed');
    
    setTimeout(() => {
      const nextContrastRatio = Math.max(
        MAZE_CONFIG.MIN_CONTRAST_RATIO, 
        stats.contrastRatio - MAZE_CONFIG.CONTRAST_DECREMENT
      );
      
      if (nextContrastRatio <= MAZE_CONFIG.MIN_CONTRAST_RATIO) {
        setFeedback({ type: 'success', message: 'Congratulations! You completed all levels!' });
        return;
      }
      
      setStats(prev => ({
        ...newStats,
        level: prev.level + 1,
        contrastRatio: nextContrastRatio,
        errors: 0
      }));
      
      startGame();
    }, 2000);
  }, [stats, timeLeft, startGame]);

  const handleMove = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    if (gameState !== 'playing' || !maze.length) return;

    const { row, col } = playerPos;
    const currentCell = maze[row][col];
    let newRow = row;
    let newCol = col;
    let canMove = false;

    switch (direction) {
      case 'up':
        if (!currentCell.walls.top && row > 0) {
          newRow = row - 1;
          canMove = true;
        }
        break;
      case 'down':
        if (!currentCell.walls.bottom && row < MAZE_CONFIG.SIZE - 1) {
          newRow = row + 1;
          canMove = true;
        }
        break;
      case 'left':
        if (!currentCell.walls.left && col > 0) {
          newCol = col - 1;
          canMove = true;
        }
        break;
      case 'right':
        if (!currentCell.walls.right && col < MAZE_CONFIG.SIZE - 1) {
          newCol = col + 1;
          canMove = true;
        }
        break;
    }

    if (canMove) {
      setPlayerPos({ row: newRow, col: newCol });
      
      // Check if reached the end
      if (newRow === MAZE_CONFIG.SIZE - 1 && newCol === MAZE_CONFIG.SIZE - 1) {
        handleLevelComplete();
      }
    } else {
      // Count as error
      setStats(prev => ({ ...prev, errors: prev.errors + 1 }));
    }
  }, [gameState, maze, playerPos, handleLevelComplete]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (gameState !== 'playing') return;
    
    e.preventDefault();
    
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        handleMove('up');
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        handleMove('down');
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        handleMove('left');
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        handleMove('right');
        break;
      case 'Escape':
        setGameState('paused');
        break;
    }
  }, [gameState, handleMove]);

  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (gameState !== 'playing') return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    setIsDragging(true);
    setDragStartPos({ x: clientX, y: clientY });
    setDragStartPlayerPos(playerPos);
  }, [gameState, playerPos]);

  const handleDragMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || gameState !== 'playing' || !dragStartPos) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const dx = clientX - dragStartPos.x;
    const dy = clientY - dragStartPos.y;

    const threshold = MAZE_CONFIG.CELL_SIZE / 2; // Move if dragged half a cell size

    let newRow = dragStartPlayerPos.row;
    let newCol = dragStartPlayerPos.col;

    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal movement
      if (dx > threshold) {
        newCol = dragStartPlayerPos.col + 1;
      } else if (dx < -threshold) {
        newCol = dragStartPlayerPos.col - 1;
      }
    } else {
      // Vertical movement
      if (dy > threshold) {
        newRow = dragStartPlayerPos.row + 1;
      } else if (dy < -threshold) {
        newRow = dragStartPlayerPos.row - 1;
      }
    }

    // Determine direction based on new position relative to dragStartPlayerPos
    let moved = false;
    if (newRow < dragStartPlayerPos.row) {
      handleMove('up');
      moved = true;
    } else if (newRow > dragStartPlayerPos.row) {
      handleMove('down');
      moved = true;
    } else if (newCol < dragStartPlayerPos.col) {
      handleMove('left');
      moved = true;
    } else if (newCol > dragStartPlayerPos.col) {
      handleMove('right');
      moved = true;
    }

    // If a move occurred, update dragStartPlayerPos to the current playerPos
    // This ensures continuous dragging works relative to the new position
    if (moved) {
      setDragStartPlayerPos(playerPos);
      setDragStartPos({ x: clientX, y: clientY }); // Reset drag start position to current for continuous drag
    }
  }, [isDragging, gameState, dragStartPos, playerPos, dragStartPlayerPos, handleMove]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    setDragStartPos(null);
  }, []);

  // Timer effect
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => Math.max(0, prev - 1) as 45);
      }, 1000);
    } else if (gameState === 'playing' && timeLeft <= 0) {
      setGameState('failed');
      setFeedback({ type: 'error', message: 'Time\'s up! Try again with better focus.' });
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [gameState, timeLeft]);

  // Keyboard and drag event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [handleKeyPress, handleDragEnd]);

  // Generate colors based on current contrast ratio
  const backgroundColor = generateColorWithContrast(stats.contrastRatio, true);
  const wallColor = generateColorWithContrast(stats.contrastRatio, false);

  const renderMaze = () => {
    if (!maze.length) return null;

    return (
      <div
        ref={mazeRef}
        className="relative focus:outline-none focus:ring-2 focus:ring-blue-500 rounded touch-none"
        tabIndex={0}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragMove}
        onTouchMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseLeave={handleDragEnd} // End drag if mouse leaves the maze area
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${MAZE_CONFIG.SIZE}, ${MAZE_CONFIG.CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${MAZE_CONFIG.SIZE}, ${MAZE_CONFIG.CELL_SIZE}px)`,
          backgroundColor,
          gap: '0px',
        }}
      >
        {maze.map((row, rIdx) =>
          row.map((cell, cIdx) => {
            const isPlayer = playerPos.row === rIdx && playerPos.col === cIdx;
            const isStart = rIdx === 0 && cIdx === 0;
            const isEnd = rIdx === MAZE_CONFIG.SIZE - 1 && cIdx === MAZE_CONFIG.SIZE - 1;

            return (
              <div
                key={`${rIdx}-${cIdx}`}
                className="relative"
                style={{
                  width: `${MAZE_CONFIG.CELL_SIZE}px`,
                  height: `${MAZE_CONFIG.CELL_SIZE}px`,
                  borderTopWidth: cell.walls.top ? '2px' : '0px',
                  borderRightWidth: cell.walls.right ? '2px' : '0px',
                  borderBottomWidth: cell.walls.bottom ? '2px' : '0px',
                  borderLeftWidth: cell.walls.left ? '2px' : '0px',
                  borderStyle: 'solid',
                  borderColor: wallColor,
                }}
              >
                {isPlayer && (
                  <div 
                    className="absolute inset-1 rounded-full bg-blue-500 flex items-center justify-center"
                    style={{ backgroundColor: '#3b82f6' }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
                {isStart && !isPlayer && (
                  <div className="absolute inset-1 rounded bg-green-200 flex items-center justify-center">
                    <span className="text-xs font-bold text-green-800">S</span>
                  </div>
                )}
                {isEnd && (
                  <div className="absolute inset-1 rounded bg-red-200 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-red-600" />
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-3xl">
              <Eye className="w-8 h-8 text-blue-600" />
              Professional Contrast Sensitivity Assessment
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Navigate mazes with decreasing contrast to assess your visual sensitivity
            </p>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Game Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {gameState === 'idle' && (
                  <div className="text-center space-y-4">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Instructions</h3>
                      <ul className="text-left space-y-2 text-sm">
                        <li>• Use arrow keys or WASD to navigate</li>
                        <li>• Reach the trophy icon to complete each level</li>
                        <li>• Contrast decreases with each successful level</li>
                        <li>• Complete within the time limit</li>
                        <li>• Press ESC to pause during gameplay</li>
                      </ul>
                    </div>
                    <Button 
                      onClick={startGame}
                      size="lg"
                      className="px-8 py-3 text-lg"
                    >
                      Begin Assessment
                    </Button>
                  </div>
                )}

                {(gameState === 'playing' || gameState === 'completed') && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          Level {stats.level}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Target className="w-4 h-4" />
                          <span>Score: {stats.score}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>Errors: {stats.errors}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className={cn(
                          "font-mono text-lg",
                          timeLeft <= 10 ? "text-red-600 font-bold" : "text-gray-700"
                        )}>
                          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    <Progress 
                      value={(timeLeft / MAZE_CONFIG.TIME_LIMIT) * 100} 
                      className="h-2"
                    />

                    <div className="flex justify-center">
                      {renderMaze()}
                    </div>
                  </div>
                )}

                {gameState === 'failed' && (
                  <div className="text-center space-y-4">
                    <div className="bg-red-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-red-800 mb-2">Assessment Complete</h3>
                      <p className="text-red-600">Final Score: {stats.score}</p>
                      <p className="text-sm text-red-500 mt-2">Reached Level {stats.level}</p>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <Button onClick={startGame} variant="outline">
                        Retry Level
                      </Button>
                      <Button onClick={resetGame}>
                        New Assessment
                      </Button>
                    </div>
                  </div>
                )}

                {feedback && (
                  <div className={cn(
                    "mt-4 p-3 rounded-lg text-center font-medium",
                    feedback.type === 'success' && "bg-green-50 text-green-800",
                    feedback.type === 'error' && "bg-red-50 text-red-800",
                    feedback.type === 'info' && "bg-blue-50 text-blue-800"
                  )}>
                    {feedback.message}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Statistics Panel */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Assessment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Contrast Ratio:</span>
                  <span className="font-mono">{stats.contrastRatio.toFixed(1)}:1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Level:</span>
                  <span className="font-semibold">{stats.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Score:</span>
                  <span className="font-semibold">{stats.score}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Errors:</span>
                  <span className="font-semibold">{stats.errors}</span>
                </div>
              </CardContent>
            </Card>

            {gameHistory.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {gameHistory.map((record, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded">
                        <span>Level {record.level}</span>
                        <div className="text-right">
                          <div className="font-mono">{record.completionTime.toFixed(1)}s</div>
                          <div className="text-xs text-muted-foreground">
                            {record.contrastRatio.toFixed(1)}:1
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contrast Standards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>WCAG AAA:</span>
                  <span className="font-mono">7:1</span>
                </div>
                <div className="flex justify-between">
                  <span>WCAG AA:</span>
                  <span className="font-mono">4.5:1</span>
                </div>
                <div className="flex justify-between">
                  <span>Minimum:</span>
                  <span className="font-mono">3:1</span>
                </div>
                <div className="text-xs text-muted-foreground mt-3">
                  Current: <span className="font-mono">{stats.contrastRatio.toFixed(1)}:1</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContrastSensitivityMaze;