import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ChromaticAdaptationConfig {
  lightingCondition: 'daylight' | 'incandescent' | 'fluorescent' | 'custom';
  colorPalette: 'standard' | 'vibrant' | 'muted';
  difficulty: number;
}

interface ColorTarget {
  id: number;
  targetColor: string;
  adaptedColor: string;
  tolerance: number;
}

const ChromaticAdaptationTrainer: React.FC = () => {
  const [config, setConfig] = useState<ChromaticAdaptationConfig>({
    lightingCondition: 'daylight',
    colorPalette: 'standard',
    difficulty: 5
  });

  const [currentRound, setCurrentRound] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(30);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [currentColorTarget, setCurrentColorTarget] = useState<ColorTarget | null>(null);
  const [userColor, setUserColor] = useState<string>('#808080');
  const [feedback, setFeedback] = useState<string>('');
  const [totalAttempts, setTotalAttempts] = useState<number>(0);
  const [correctMatches, setCorrectMatches] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const lightingTransforms = {
    daylight: { r: 1, g: 1, b: 1 }, // No change
    incandescent: { r: 1.09, g: 1.01, b: 0.85 }, // Warmer
    fluorescent: { r: 0.95, g: 1.05, b: 1.05 }, // Cooler
    custom: { r: 1, g: 1, b: 1 } // Placeholder for custom
  };

  const colorPalettes = {
    standard: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'],
    vibrant: ['#FF4500', '#32CD32', '#1E90FF', '#FFD700', '#00CED1', '#FF69B4'],
    muted: ['#8B0000', '#006400', '#00008B', '#808000', '#008080', '#800080']
  };

  const applyLightingTransform = (hexColor: string, transform: { r: number; g: number; b: number }): string => {
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

    const newR = Math.min(255, Math.round(r * transform.r));
    const newG = Math.min(255, Math.round(g * transform.g));
    const newB = Math.min(255, Math.round(b * transform.b));

    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
  };

  const generateColorTarget = (difficulty: number): ColorTarget => {
    const palette = colorPalettes[config.colorPalette];
    const baseColor = palette[Math.floor(Math.random() * palette.length)];
    const transform = lightingTransforms[config.lightingCondition];
    const adaptedColor = applyLightingTransform(baseColor, transform);

    // Tolerance decreases with difficulty
    const tolerance = Math.max(10, 50 - difficulty * 4);

    return {
      id: Date.now() + Math.random(),
      targetColor: baseColor,
      adaptedColor: adaptedColor,
      tolerance: tolerance
    };
  };

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setCurrentRound(1);
    setTotalAttempts(0);
    setCorrectMatches(0);
    setTimeRemaining(30);
    selectColorTarget();

    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleTimeout = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setFeedback(`Time's up! The target color was not matched.`);
    setTotalAttempts(prev => prev + 1);
  };

  const selectColorTarget = () => {
    const newTarget = generateColorTarget(config.difficulty);
    setCurrentColorTarget(newTarget);
    setUserColor('#808080'); // Reset user's color
    setFeedback('');
    setTimeRemaining(30);
  };

  const checkMatch = () => {
    if (!currentColorTarget) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTotalAttempts(prev => prev + 1);

    const targetR = parseInt(currentColorTarget.targetColor.substring(1, 3), 16);
    const targetG = parseInt(currentColorTarget.targetColor.substring(3, 5), 16);
    const targetB = parseInt(currentColorTarget.targetColor.substring(5, 7), 16);

    const userR = parseInt(userColor.substring(1, 3), 16);
    const userG = parseInt(userColor.substring(3, 5), 16);
    const userB = parseInt(userColor.substring(5, 7), 16);

    const distance = Math.sqrt(
      Math.pow(targetR - userR, 2) +
      Math.pow(targetG - userG, 2) +
      Math.pow(targetB - userB, 2)
    );

    if (distance <= currentColorTarget.tolerance) {
      const points = Math.max(1, Math.floor((timeRemaining / 30) * 10));
      setScore(prev => prev + points);
      setCorrectMatches(prev => prev + 1);
      setFeedback(`Correct match! You earned ${points} points!`);
      setCurrentRound(prev => prev + 1);
    } else {
      setFeedback(`Incorrect. Distance: ${Math.round(distance)}. Target: ${currentColorTarget.targetColor}`);
    }
  };

  const nextRound = () => {
    selectColorTarget();
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const accuracyRate = totalAttempts > 0 ? Math.round((correctMatches / totalAttempts) * 100) : 0;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Chromatic Adaptation Trainer
      </h1>

      {!gameActive ? (
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Configuration & Setup</h2>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Lighting Condition
              </label>
              <Select
                value={config.lightingCondition}
                onValueChange={(value: any) => setConfig({ ...config, lightingCondition: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select lighting condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daylight">Daylight</SelectItem>
                  <SelectItem value="incandescent">Incandescent</SelectItem>
                  <SelectItem value="fluorescent">Fluorescent</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Color Palette
              </label>
              <Select
                value={config.colorPalette}
                onValueChange={(value: any) => setConfig({ ...config, colorPalette: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select color palette" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="vibrant">Vibrant</SelectItem>
                  <SelectItem value="muted">Muted</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Difficulty: {config.difficulty}/10
              </label>
              <Slider
                value={[config.difficulty]}
                min={1}
                max={10}
                step={1}
                onValueChange={(value) => setConfig({ ...config, difficulty: value[0] })}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Easy</span>
                <span>Hard</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={startGame} className="px-8 py-3">
              Start Training
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Card className="p-4">
              <div className="text-2xl font-bold text-blue-600">{currentRound}</div>
              <div className="text-sm text-gray-600">Round</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-gray-600">Score</div>
            </Card>
            <Card className="p-4">
              <div className={`text-2xl font-bold ${timeRemaining <= 10 ? 'text-red-500' : 'text-orange-600'}`}>
                {timeRemaining}s
              </div>
              <div className="text-sm text-gray-600">Time Left</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-bold text-purple-600">{accuracyRate}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </Card>
          </div>

          <Card className="p-8 shadow-lg">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-semibold mb-2">
                Match the color under current lighting conditions:
              </h2>
              <p className="text-sm text-gray-600">
                Adjust the color picker to match the target color presented.
              </p>
            </div>

            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div
                  className="w-32 h-32 rounded-full border-4 border-gray-300"
                  style={{ backgroundColor: currentColorTarget?.adaptedColor || '#ccc' }}
                ></div>
                <p className="mt-2 text-sm text-gray-600">Target Color</p>
              </div>
              <div className="text-4xl font-bold text-gray-700">→</div>
              <div className="flex flex-col items-center">
                <input
                  type="color"
                  value={userColor}
                  onChange={(e) => setUserColor(e.target.value)}
                  className="w-32 h-32 rounded-full border-4 border-blue-500 cursor-pointer"
                />
                <p className="mt-2 text-sm text-gray-600">Your Match</p>
              </div>
            </div>

            <div className="text-center mb-4">
              <Button onClick={checkMatch} size="lg" className="px-8 py-3">
                Check Match
              </Button>
            </div>

            {feedback && (
              <div className={`text-center text-lg font-semibold ${feedback.includes('Correct') ? 'text-green-600' : 'text-red-600'} mt-4`}>
                {feedback}
              </div>
            )}

            {feedback && (
              <div className="text-center mt-6">
                <Button onClick={nextRound} size="lg" className="px-8 py-3">
                  Next Round
                </Button>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default ChromaticAdaptationTrainer;