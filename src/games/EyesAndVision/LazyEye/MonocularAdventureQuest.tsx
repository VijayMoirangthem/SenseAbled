import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Eye, EyeOff } from 'lucide-react';

interface Target {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  visible: boolean;
}

const MonocularAdventureQuest: React.FC = () => {
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<number>(5); // 1-10, affects target size and speed
  const [score, setScore] = useState<number>(0);
  const [targets, setTargets] = useState<Target[]>([]);
  const [gameTime, setGameTime] = useState<number>(60); // seconds
  const [timeLeft, setTimeLeft] = useState<number>(gameTime);
  const [feedback, setFeedback] = useState<string>('');
  const [eyeCovered, setEyeCovered] = useState<'left' | 'right' | null>(null);

  const gameAreaRef = useRef<HTMLDivElement>(null);
  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const targetGenerationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const generateTarget = useCallback(() => {
    if (!gameAreaRef.current) return;

    const gameArea = gameAreaRef.current;
    const gameAreaWidth = gameArea.clientWidth;
    const gameAreaHeight = gameArea.clientHeight;

    const minSize = 30 - difficulty * 2; // Smaller targets for higher difficulty
    const maxSize = 50 - difficulty * 1; // Smaller targets for higher difficulty
    const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

    const x = Math.random() * (gameAreaWidth - size);
    const y = Math.random() * (gameAreaHeight - size);

    setTargets(prevTargets => [
      ...prevTargets,
      {
        id: Date.now(),
        x,
        y,
        size,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
        visible: true,
      },
    ]);
  }, [difficulty]);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(gameTime);
    setTargets([]);
    setFeedback('');

    // Start game timer
    gameIntervalRef.current = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(gameIntervalRef.current!);
          clearInterval(targetGenerationIntervalRef.current!); 
          setGameActive(false);
          setFeedback(`Game Over! Your final score is ${score}.`);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Start target generation
    const generationInterval = Math.max(500, 2000 - difficulty * 150); // Faster generation for higher difficulty
    targetGenerationIntervalRef.current = setInterval(generateTarget, generationInterval);
  };

  const handleTargetClick = (id: number) => {
    setTargets(prevTargets =>
      prevTargets.filter(target => {
        if (target.id === id) {
          setScore(prevScore => prevScore + Math.floor(target.size / 5)); // Score based on target size
          return false; // Remove clicked target
        }
        return true;
      })
    );
  };

  const toggleEyeCover = (eye: 'left' | 'right') => {
    setEyeCovered(prev => (prev === eye ? null : eye));
  };

  useEffect(() => {
    // Cleanup intervals on component unmount or game end
    return () => {
      if (gameIntervalRef.current) clearInterval(gameIntervalRef.current);
      if (targetGenerationIntervalRef.current) clearInterval(targetGenerationIntervalRef.current);
    };
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Monocular Adventure Quest
      </h1>

      {!gameActive ? (
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Game Setup</h2>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Difficulty: {difficulty}/10
              </label>
              <Slider
                value={[difficulty]}
                min={1}
                max={10}
                step={1}
                onValueChange={(value) => setDifficulty(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Easy (Larger targets, slower)</span>
                <span>Hard (Smaller targets, faster)</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Game Duration: {gameTime} seconds
              </label>
              <Slider
                value={[gameTime]}
                min={30}
                max={120}
                step={15}
                onValueChange={(value) => setGameTime(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>30s</span>
                <span>120s</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Cover an Eye (Optional, for Amblyopia Training):
              </label>
              <div className="flex space-x-4 mt-2">
                <Button
                  variant={eyeCovered === 'left' ? 'default' : 'outline'}
                  onClick={() => toggleEyeCover('left')}
                >
                  {eyeCovered === 'left' ? <EyeOff className="mr-2" /> : <Eye className="mr-2" />}
                  Cover Left Eye
                </Button>
                <Button
                  variant={eyeCovered === 'right' ? 'default' : 'outline'}
                  onClick={() => toggleEyeCover('right')}
                >
                  {eyeCovered === 'right' ? <EyeOff className="mr-2" /> : <Eye className="mr-2" />}
                  Cover Right Eye
                </Button>
              </div>
              {eyeCovered && (
                <p className="text-sm text-gray-600 mt-2">
                  Playing with {eyeCovered === 'left' ? 'right' : 'left'} eye only. Focus on using your weaker eye.
                </p>
              )}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={startGame} className="px-8 py-3">
              Start Adventure
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <Card className="p-4">
              <div className="text-2xl font-bold text-blue-600">Time: {timeLeft}s</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-bold text-green-600">Score: {score}</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-bold text-purple-600">
                Eye Covered: {eyeCovered ? (eyeCovered === 'left' ? 'Left' : 'Right') : 'None'}
              </div>
            </Card>
          </div>

          <Card className="p-8 shadow-lg relative overflow-hidden" ref={gameAreaRef} style={{ height: '500px' }}>
            <h2 className="text-xl font-semibold mb-4 text-center">Click the targets as they appear!</h2>
            {targets.map(target => (
              <div
                key={target.id}
                className="absolute rounded-full cursor-pointer flex items-center justify-center text-white font-bold"
                style={{
                  left: target.x,
                  top: target.y,
                  width: target.size,
                  height: target.size,
                  backgroundColor: target.color,
                  opacity: target.visible ? 1 : 0,
                  transition: 'opacity 0.1s ease-out',
                }}
                onClick={() => handleTargetClick(target.id)}
              >
                {/* Optional: Add a number or symbol inside target */}
              </div>
            ))}
            {feedback && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold">
                {feedback}
              </div>
            )}
          </Card>

          {feedback && !gameActive && (
            <div className="text-center mt-6">
              <Button size="lg" onClick={startGame} className="px-8 py-3">
                Play Again
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MonocularAdventureQuest;