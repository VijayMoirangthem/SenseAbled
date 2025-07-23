import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';

interface Target { x: number; y: number; type: 'left' | 'right' | 'fused'; id: string; }

const BinocularRivalryResolution: React.FC = () => {
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [targets, setTargets] = useState<Target[]>([]);
  const [feedback, setFeedback] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(50); // 0-100, affects target size/speed
  const [fusionLevel, setFusionLevel] = useState<number>(50); // 0-100, affects how easily targets fuse
  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const targetGenerationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const generateTarget = useCallback(() => {
    const typeOptions: ('left' | 'right' | 'fused')[] = ['left', 'right', 'fused'];
    const randomType = typeOptions[Math.floor(Math.random() * typeOptions.length)];
    const newTarget: Target = {
      x: Math.random() * 80 + 10, // 10% to 90% width
      y: Math.random() * 80 + 10, // 10% to 90% height
      type: randomType,
      id: Math.random().toString(36).substring(2, 9),
    };
    setTargets(prev => [...prev, newTarget]);
  }, []);

  const startGame = useCallback(() => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(60);
    setTargets([]);
    setFeedback('');

    gameIntervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(gameIntervalRef.current!);
          clearInterval(targetGenerationIntervalRef.current!);
          setGameActive(false);
          setFeedback(`Game Over! Your score: ${score}`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    targetGenerationIntervalRef.current = setInterval(() => {
      generateTarget();
    }, Math.max(500, 2000 - difficulty * 15)); // Faster generation at higher difficulty
  }, [score, difficulty, generateTarget]);

  const handleTargetClick = useCallback((clickedTarget: Target) => {
    if (!gameActive) return;

    setTargets(prev => prev.filter(t => t.id !== clickedTarget.id));

    let points = 0;
    if (clickedTarget.type === 'fused') {
      points = 10;
      setFeedback('Great fusion!');
    } else {
      points = -5;
      setFeedback('Missed fusion!');
    }
    setScore(prev => Math.max(0, prev + points));
  }, [gameActive]);

  useEffect(() => {
    return () => {
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
      if (targetGenerationIntervalRef.current) clearInterval(targetGenerationIntervalRef.current);
    };
  }, []);

  const getTargetStyle = (target: Target) => {
    const size = 30 + (100 - difficulty) * 0.5; // Larger at lower difficulty
    const opacity = 0.5 + fusionLevel * 0.005; // More opaque at higher fusion level
    const color = target.type === 'left' ? 'red' : target.type === 'right' ? 'blue' : 'purple';

    return {
      position: 'absolute' as 'absolute',
      left: `${target.x}%`,
      top: `${target.y}%`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: '50%',
      opacity: opacity,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      border: target.type === 'fused' ? '3px solid gold' : 'none',
      transition: 'all 0.1s ease-out',
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-center">Binocular Rivalry Resolution</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          {!gameActive && (
            <div className="text-center space-y-4">
              <p className="text-lg">Click on the fused (purple/gold border) targets as they appear.</p>
              <p className="text-sm text-muted-foreground">Red targets are seen by the left eye, blue by the right. Purple targets indicate successful fusion.</p>
              <Button onClick={startGame} className="w-48">Start Game</Button>
            </div>
          )}

          {gameActive && (
            <div className="w-full space-y-4">
              <div className="flex justify-between w-full text-lg font-semibold">
                <span>Score: {score}</span>
                <span>Time Left: {timeLeft}s</span>
              </div>
              <Progress value={(timeLeft / 60) * 100} className="w-full" />
              {feedback && <p className="text-center text-md font-medium mt-2">{feedback}</p>}

              <div
                className="relative border-2 border-dashed border-gray-300 w-full aspect-video bg-gray-50 rounded-lg overflow-hidden"
                style={{ minHeight: '300px' }}
              >
                {targets.map(target => (
                  <div
                    key={target.id}
                    style={getTargetStyle(target)}
                    onClick={() => handleTargetClick(target)}
                  >
                    {target.type === 'fused' ? 'FUSE' : ''}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="w-full space-y-4 pt-4">
            <Label htmlFor="difficulty-slider">Difficulty: {difficulty}</Label>
            <Slider
              id="difficulty-slider"
              min={0}
              max={100}
              step={1}
              value={[difficulty]}
              onValueChange={(val) => setDifficulty(val[0])}
              disabled={gameActive}
            />
            <p className="text-sm text-muted-foreground">Adjusts target size and generation speed.</p>

            <Label htmlFor="fusion-slider">Fusion Level: {fusionLevel}</Label>
            <Slider
              id="fusion-slider"
              min={0}
              max={100}
              step={1}
              value={[fusionLevel]}
              onValueChange={(val) => setFusionLevel(val[0])}
              disabled={gameActive}
            />
            <p className="text-sm text-muted-foreground">Simulates how easily your eyes fuse images (affects target opacity).</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BinocularRivalryResolution;