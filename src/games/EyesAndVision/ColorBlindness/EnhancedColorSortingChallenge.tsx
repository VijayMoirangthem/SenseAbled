import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ColorBlock {
  id: string;
  color: string;
  hue: number;
  saturation: number;
  lightness: number;
  originalIndex: number;
}

interface GameStats {
  totalRounds: number;
  correctRounds: number;
  averageTime: number;
  bestTime: number;
}

// Professional color generation with better distribution
const generateRandomColor = (difficulty: number): string => {
  if (difficulty <= 3) {
    // Easy: More distinct colors
    const hue = Math.floor(Math.random() * 12) * 30; // Every 30 degrees for distinct hues
    const sat = 70 + Math.random() * 30; // High saturation
    const light = 40 + Math.random() * 20; // Medium lightness
    return hslToHex(hue, sat, light);
  } else if (difficulty <= 7) {
    // Medium: Moderate variation
    const hue = Math.random() * 360;
    const sat = 50 + Math.random() * 40;
    const light = 30 + Math.random() * 40;
    return hslToHex(hue, sat, light);
  } else {
    // Hard: Subtle differences
    const baseHue = Math.random() * 360;
    const hueVariation = 5 + Math.random() * 15; // Small hue variations
    const hue = (baseHue + (Math.random() - 0.5) * hueVariation) % 360;
    const sat = 40 + Math.random() * 30;
    const light = 35 + Math.random() * 30;
    return hslToHex(hue, sat, light);
  }
};

const hslToHex = (h: number, s: number, l: number): string => {
  h = ((h % 360) + 360) % 360; // Normalize hue
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
};

const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { 
    h: Math.round(h * 360), 
    s: Math.round(s * 100), 
    l: Math.round(l * 100) 
  };
};

const EnhancedColorSortingChallenge: React.FC = () => {
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<number>(5);
  const [colorCount, setColorCount] = useState<number>(8);
  const [sortMetric, setSortMetric] = useState<'hue' | 'saturation' | 'lightness'>('hue');
  const [colorBlocks, setColorBlocks] = useState<ColorBlock[]>([]);
  const [correctOrder, setCorrectOrder] = useState<ColorBlock[]>([]);
  const [feedback, setFeedback] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);
  const [startTime, setStartTime] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [gameStats, setGameStats] = useState<GameStats>({
    totalRounds: 0,
    correctRounds: 0,
    averageTime: 0,
    bestTime: Infinity
  });
  const [showSolution, setShowSolution] = useState<boolean>(false);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameActive && startTime > 0 && !feedback.includes('Perfect')) {
      interval = setInterval(() => {
        setCurrentTime(Date.now());
      }, 100);
    }
    return () => clearInterval(interval);
  }, [gameActive, startTime, feedback]);

  const generateColorBlocks = useCallback(() => {
    const newBlocks: ColorBlock[] = [];
    const usedColors = new Set<string>();
    
    for (let i = 0; i < colorCount; i++) {
      let color: string;
      let attempts = 0;
      
      // Ensure no duplicate colors
      do {
        color = generateRandomColor(difficulty);
        attempts++;
      } while (usedColors.has(color) && attempts < 50);
      
      usedColors.add(color);
      const rgb = hexToRgb(color);
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      
      newBlocks.push({
        id: `color-${i}-${Date.now()}-${Math.random()}`,
        color,
        hue: hsl.h,
        saturation: hsl.s,
        lightness: hsl.l,
        originalIndex: i,
      });
    }
    
    // Calculate correct order
    const sorted = [...newBlocks].sort((a, b) => {
      if (sortMetric === 'hue') {
        // Handle hue wraparound (0 and 360 are the same)
        let diff = a.hue - b.hue;
        if (Math.abs(diff) > 180) {
          diff = diff > 0 ? diff - 360 : diff + 360;
        }
        return diff;
      }
      if (sortMetric === 'saturation') return a.saturation - b.saturation;
      if (sortMetric === 'lightness') return a.lightness - b.lightness;
      return 0;
    });
    
    // Shuffle the display order
    const shuffled = [...newBlocks].sort(() => Math.random() - 0.5);
    
    setColorBlocks(shuffled);
    setCorrectOrder(sorted);
    setFeedback('');
    setShowSolution(false);
    setStartTime(Date.now());
    setCurrentTime(Date.now());
  }, [colorCount, difficulty, sortMetric]);

  useEffect(() => {
    if (gameActive) {
      generateColorBlocks();
    }
  }, [gameActive, generateColorBlocks]);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setRound(1);
    setGameStats({
      totalRounds: 0,
      correctRounds: 0,
      averageTime: 0,
      bestTime: Infinity
    });
  };

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('blockId', id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    const draggedBlockId = e.dataTransfer.getData('blockId');
    
    if (draggedBlockId === targetId) return;
    
    const draggedIndex = colorBlocks.findIndex(block => block.id === draggedBlockId);
    const targetIndex = colorBlocks.findIndex(block => block.id === targetId);
    
    if (draggedIndex === -1 || targetIndex === -1) return;
    
    const newColorBlocks = [...colorBlocks];
    const [draggedBlock] = newColorBlocks.splice(draggedIndex, 1);
    newColorBlocks.splice(targetIndex, 0, draggedBlock);
    
    setColorBlocks(newColorBlocks);
  };

  const calculateAccuracy = (): number => {
    let correctPositions = 0;
    colorBlocks.forEach((block, index) => {
      if (correctOrder[index] && block.id === correctOrder[index].id) {
        correctPositions++;
      }
    });
    return Math.round((correctPositions / colorBlocks.length) * 100);
  };

  const checkSortOrder = () => {
    const accuracy = calculateAccuracy();
    const timeSpent = Math.round((currentTime - startTime) / 1000);
    const isCorrect = accuracy === 100;
    
    if (isCorrect) {
      const pointsEarned = Math.round(difficulty * colorCount * 10 * (Math.max(1, 60 - timeSpent) / 60));
      setScore(prev => prev + pointsEarned);
      setFeedback(`Perfect! +${pointsEarned} points (${timeSpent}s)`);
      
      // Update stats
      setGameStats(prev => ({
        totalRounds: prev.totalRounds + 1,
        correctRounds: prev.correctRounds + 1,
        averageTime: ((prev.averageTime * prev.totalRounds) + timeSpent) / (prev.totalRounds + 1),
        bestTime: Math.min(prev.bestTime, timeSpent)
      }));
    } else {
      setFeedback(`${accuracy}% correct. Try again!`);
      setGameStats(prev => ({
        ...prev,
        totalRounds: prev.totalRounds + 1
      }));
    }
  };

  const showCorrectOrder = () => {
    setShowSolution(true);
    setColorBlocks([...correctOrder]);
  };

  const nextRound = () => {
    setRound(prev => prev + 1);
    generateColorBlocks();
  };

  const resetGame = () => {
    setGameActive(false);
    setScore(0);
    setRound(1);
    setFeedback('');
    setShowSolution(false);
  };

  const getElapsedTime = (): string => {
    if (startTime === 0) return '0s';
    const elapsed = Math.round((currentTime - startTime) / 1000);
    return `${elapsed}s`;
  };

  const colorBlockStyle = useMemo(() => {
    const baseWidth = Math.max(60, Math.min(120, 800 / colorCount));
    return {
      width: `${baseWidth}px`,
      height: '80px',
      minWidth: '40px'
    };
  }, [colorCount]);

  const getDifficultyText = (level: number): string => {
    if (level <= 3) return 'Easy';
    if (level <= 7) return 'Medium';
    return 'Hard';
  };

  const getMetricDescription = (metric: string): string => {
    switch (metric) {
      case 'hue': return 'Color wheel position (red → orange → yellow → green → blue → purple)';
      case 'saturation': return 'Color intensity (gray → vivid)';
      case 'lightness': return 'Brightness (dark → light)';
      default: return '';
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Professional Color Sorting Challenge
      </h1>

      {!gameActive ? (
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Game Configuration</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Difficulty: {difficulty}/10 ({getDifficultyText(difficulty)})
                </label>
                <Slider
                  value={[difficulty]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={(value) => setDifficulty(value[0])}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Higher difficulty creates more subtle color differences
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Number of Colors: {colorCount}
                </label>
                <Slider
                  value={[colorCount]}
                  min={4}
                  max={16}
                  step={1}
                  onValueChange={(value) => setColorCount(value[0])}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-2">
                  More colors increase complexity
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Sort By:
                </label>
                <Select
                  value={sortMetric}
                  onValueChange={(value: 'hue' | 'saturation' | 'lightness') => setSortMetric(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select sort metric" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hue">Hue (Color Type)</SelectItem>
                    <SelectItem value="saturation">Saturation (Color Intensity)</SelectItem>
                    <SelectItem value="lightness">Lightness (Brightness)</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500 mt-2">
                  {getMetricDescription(sortMetric)}
                </p>
              </div>

              {gameStats.totalRounds > 0 && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Previous Session Stats:</h3>
                  <div className="text-sm space-y-1">
                    <div>Accuracy: {Math.round((gameStats.correctRounds / gameStats.totalRounds) * 100)}%</div>
                    <div>Average Time: {Math.round(gameStats.averageTime)}s</div>
                    <div>Best Time: {gameStats.bestTime === Infinity ? 'N/A' : `${gameStats.bestTime}s`}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={startGame} className="px-12 py-4 text-lg">
              Start Challenge
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
            <Card className="p-4">
              <div className="text-lg font-bold text-blue-600">Round {round}</div>
            </Card>
            <Card className="p-4">
              <div className="text-lg font-bold text-green-600">Score: {score}</div>
            </Card>
            <Card className="p-4">
              <div className="text-lg font-bold text-purple-600">Time: {getElapsedTime()}</div>
            </Card>
            <Card className="p-4">
              <div className="text-lg font-bold text-orange-600">Accuracy: {calculateAccuracy()}%</div>
            </Card>
          </div>

          <Card className="p-8 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Sort by {sortMetric.toUpperCase()} from lowest to highest
              </h2>
              <p className="text-gray-600">{getMetricDescription(sortMetric)}</p>
              <p className="text-sm text-gray-500 mt-2">
                Drag and drop the color blocks to arrange them in the correct order
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 p-4 border-2 border-dashed border-gray-300 rounded-lg min-h-[120px] bg-gray-50">
              {colorBlocks.map((block, index) => (
                <div
                  key={block.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, block.id)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, block.id)}
                  className="rounded-lg cursor-grab active:cursor-grabbing shadow-md hover:shadow-lg transition-shadow border-2 border-white relative group"
                  style={{
                    backgroundColor: block.color,
                    ...colorBlockStyle
                  }}
                  title={`${sortMetric}: ${block[sortMetric]}`}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 px-2 py-1 rounded">
                      {sortMetric === 'hue' ? `${block.hue}°` : `${block[sortMetric]}%`}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {feedback && (
              <div className={`text-center text-lg font-semibold mt-6 p-4 rounded-lg ${
                feedback.includes('Perfect') 
                  ? 'text-green-700 bg-green-100' 
                  : feedback.includes('%')
                  ? 'text-orange-700 bg-orange-100'
                  : 'text-red-700 bg-red-100'
              }`}>
                {feedback}
              </div>
            )}

            <div className="text-center mt-6 space-x-4 flex flex-wrap justify-center gap-4">
              <Button onClick={checkSortOrder} size="lg" className="px-8 py-3">
                Check Order
              </Button>
              
              {!feedback.includes('Perfect') && !showSolution && (
                <Button 
                  onClick={showCorrectOrder} 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-3"
                >
                  Show Solution
                </Button>
              )}
              
              {feedback.includes('Perfect') && (
                <Button onClick={nextRound} size="lg" className="px-8 py-3 bg-blue-500 hover:bg-blue-600">
                  Next Round →
                </Button>
              )}
              
              <Button onClick={resetGame} variant="outline" size="lg" className="px-8 py-3">
                End Game
              </Button>
            </div>

            {showSolution && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-center text-blue-800 font-semibold mb-2">
                  Correct Order (showing solution):
                </p>
                <div className="text-center text-sm text-blue-600">
                  Colors are now arranged correctly by {sortMetric}
                </div>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default EnhancedColorSortingChallenge;