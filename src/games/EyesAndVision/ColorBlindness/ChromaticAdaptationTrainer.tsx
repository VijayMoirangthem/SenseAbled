import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ChromaticAdaptationConfig {
  lightingCondition: 'daylight' | 'incandescent' | 'fluorescent' | 'led_cool' | 'led_warm';
  colorPalette: 'standard' | 'vibrant' | 'muted' | 'professional';
  difficulty: number;
  timeLimit: number;
}

interface ColorTarget {
  id: string;
  originalColor: { r: number; g: number; b: number };
  adaptedColor: { r: number; g: number; b: number };
  originalHex: string;
  adaptedHex: string;
  tolerance: number;
}

interface GameStats {
  round: number;
  score: number;
  totalAttempts: number;
  correctMatches: number;
  averageAccuracy: number;
  bestAccuracy: number;
  timeBonus: number;
}

// Professional color science constants
const ILLUMINANTS = {
  daylight: { temp: 6500, x: 0.3127, y: 0.3290 }, // D65
  incandescent: { temp: 2856, x: 0.4476, y: 0.4074 }, // A
  fluorescent: { temp: 4150, x: 0.3808, y: 0.3768 }, // F11
  led_cool: { temp: 5000, x: 0.3457, y: 0.3585 }, // Cool white LED
  led_warm: { temp: 3000, x: 0.4338, y: 0.4030 }  // Warm white LED
};

const COLOR_PALETTES = {
  standard: [
    { r: 255, g: 0, b: 0 },     // Red
    { r: 0, g: 255, b: 0 },     // Green  
    { r: 0, g: 0, b: 255 },     // Blue
    { r: 255, g: 255, b: 0 },   // Yellow
    { r: 255, g: 0, b: 255 },   // Magenta
    { r: 0, g: 255, b: 255 },   // Cyan
    { r: 255, g: 128, b: 0 },   // Orange
    { r: 128, g: 0, b: 128 }    // Purple
  ],
  vibrant: [
    { r: 255, g: 69, b: 0 },    // Red-Orange
    { r: 50, g: 205, b: 50 },   // Lime Green
    { r: 30, g: 144, b: 255 },  // Dodger Blue
    { r: 255, g: 215, b: 0 },   // Gold
    { r: 255, g: 20, b: 147 },  // Deep Pink
    { r: 0, g: 206, b: 209 },   // Dark Turquoise
    { r: 138, g: 43, b: 226 },  // Blue Violet
    { r: 255, g: 140, b: 0 }    // Dark Orange
  ],
  muted: [
    { r: 139, g: 69, b: 19 },   // Saddle Brown
    { r: 85, g: 107, b: 47 },   // Dark Olive Green
    { r: 72, g: 61, b: 139 },   // Dark Slate Blue
    { r: 184, g: 134, b: 11 },  // Dark Goldenrod
    { r: 205, g: 92, b: 92 },   // Indian Red
    { r: 95, g: 158, b: 160 },  // Cadet Blue
    { r: 128, g: 128, b: 0 },   // Olive
    { r: 199, g: 21, b: 133 }   // Medium Violet Red
  ],
  professional: [
    { r: 220, g: 20, b: 60 },   // Crimson
    { r: 34, g: 139, b: 34 },   // Forest Green
    { r: 25, g: 25, b: 112 },   // Midnight Blue
    { r: 218, g: 165, b: 32 },  // Goldenrod
    { r: 75, g: 0, b: 130 },    // Indigo
    { r: 220, g: 220, b: 220 }, // Gainsboro
    { r: 105, g: 105, b: 105 }, // Dim Gray
    { r: 165, g: 42, b: 42 }    // Brown
  ]
};

const ChromaticAdaptationTrainer: React.FC = () => {
  const [config, setConfig] = useState<ChromaticAdaptationConfig>({
    lightingCondition: 'daylight',
    colorPalette: 'standard',
    difficulty: 5,
    timeLimit: 45
  });

  const [gameStats, setGameStats] = useState<GameStats>({
    round: 1,
    score: 0,
    totalAttempts: 0,
    correctMatches: 0,
    averageAccuracy: 0,
    bestAccuracy: 0,
    timeBonus: 0
  });

  const [timeRemaining, setTimeRemaining] = useState<number>(45);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [currentTarget, setCurrentTarget] = useState<ColorTarget | null>(null);
  const [userColor, setUserColor] = useState<string>('#808080');
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' | 'info' }>({ message: '', type: 'info' });
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [roundHistory, setRoundHistory] = useState<number[]>([]);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const gameStartTime = useRef<number>(0);

  // Professional color conversion utilities
  const rgbToXyz = useCallback((r: number, g: number, b: number) => {
    // Normalize RGB values
    r = r / 255;
    g = g / 255;
    b = b / 255;

    // Apply gamma correction
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    // Observer = 2°, Illuminant = D65
    const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
    const y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
    const z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;

    return { x, y, z };
  }, []);

  const xyzToRgb = useCallback((x: number, y: number, z: number) => {
    // Observer = 2°, Illuminant = D65
    let r = x * 3.2404542 + y * -1.5371385 + z * -0.4985314;
    let g = x * -0.9692660 + y * 1.8760108 + z * 0.0415560;
    let b = x * 0.0556434 + y * -0.2040259 + z * 1.0572252;

    // Apply gamma correction
    r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r;
    g = g > 0.0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : 12.92 * g;
    b = b > 0.0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : 12.92 * b;

    // Clamp values
    r = Math.max(0, Math.min(1, r)) * 255;
    g = Math.max(0, Math.min(1, g)) * 255;
    b = Math.max(0, Math.min(1, b)) * 255;

    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
  }, []);

  // Professional chromatic adaptation using Bradford transform
  const applyLightingAdaptation = useCallback((color: { r: number; g: number; b: number }, lighting: string): { r: number; g: number; b: number } => {
    try {
      if (lighting === 'daylight') return color; // Reference illuminant

      const sourceIlluminant = ILLUMINANTS.daylight;
      const targetIlluminant = ILLUMINANTS[lighting as keyof typeof ILLUMINANTS];

      if (!targetIlluminant) return color;

      // Convert to XYZ
      const xyz = rgbToXyz(color.r, color.g, color.b);

      // Bradford chromatic adaptation matrix
      const Ma = [
        [0.8951, 0.2664, -0.1614],
        [-0.7502, 1.7135, 0.0367],
        [0.0389, -0.0685, 1.0296]
      ];

      const MaInv = [
        [0.9869929, -0.1470543, 0.1599627],
        [0.4323053, 0.5183603, 0.0492912],
        [-0.0085287, 0.0400428, 0.9684867]
      ];

      // Apply adaptation
      const sourceRgb = [
        Ma[0][0] * sourceIlluminant.x + Ma[0][1] * sourceIlluminant.y + Ma[0][2] * (1 - sourceIlluminant.x - sourceIlluminant.y),
        Ma[1][0] * sourceIlluminant.x + Ma[1][1] * sourceIlluminant.y + Ma[1][2] * (1 - sourceIlluminant.x - sourceIlluminant.y),
        Ma[2][0] * sourceIlluminant.x + Ma[2][1] * sourceIlluminant.y + Ma[2][2] * (1 - sourceIlluminant.x - sourceIlluminant.y)
      ];

      const targetRgb = [
        Ma[0][0] * targetIlluminant.x + Ma[0][1] * targetIlluminant.y + Ma[0][2] * (1 - targetIlluminant.x - targetIlluminant.y),
        Ma[1][0] * targetIlluminant.x + Ma[1][1] * targetIlluminant.y + Ma[1][2] * (1 - targetIlluminant.x - targetIlluminant.y),
        Ma[2][0] * targetIlluminant.x + Ma[2][1] * targetIlluminant.y + Ma[2][2] * (1 - targetIlluminant.x - targetIlluminant.y)
      ];

      // Temperature-based color shift for more realistic adaptation
      const tempRatio = targetIlluminant.temp / sourceIlluminant.temp;
      const warmthFactor = Math.pow(tempRatio, 0.15);
      
      const adaptedColor = {
        r: Math.round(Math.max(0, Math.min(255, color.r * warmthFactor * (targetRgb[0] / sourceRgb[0])))),
        g: Math.round(Math.max(0, Math.min(255, color.g * (targetRgb[1] / sourceRgb[1])))),
        b: Math.round(Math.max(0, Math.min(255, color.b / warmthFactor * (targetRgb[2] / sourceRgb[2]))))
      };

      return adaptedColor;
    } catch (error) {
      console.error('Color adaptation error:', error);
      return color; // Fallback to original color
    }
  }, [rgbToXyz]);

  const colorToHex = useCallback((color: { r: number; g: number; b: number }): string => {
    const toHex = (n: number) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, '0');
    return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
  }, []);

  const hexToColor = useCallback((hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 128, g: 128, b: 128 };
  }, []);

  // Professional color difference calculation using Delta E CIE76
  const calculateColorDifference = useCallback((color1: { r: number; g: number; b: number }, color2: { r: number; g: number; b: number }): number => {
    try {
      const xyz1 = rgbToXyz(color1.r, color1.g, color1.b);
      const xyz2 = rgbToXyz(color2.r, color2.g, color2.b);

      // Convert to LAB
      const labConverter = (xyz: { x: number; y: number; z: number }) => {
        let { x, y, z } = xyz;
        // Reference white D65
        x = x / 0.95047;
        y = y / 1.00000;
        z = z / 1.08883;

        x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x + 16/116);
        y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y + 16/116);
        z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z + 16/116);

        return {
          l: (116 * y) - 16,
          a: 500 * (x - y),
          b: 200 * (y - z)
        };
      };

      const lab1 = labConverter(xyz1);
      const lab2 = labConverter(xyz2);

      const deltaE = Math.sqrt(
        Math.pow(lab1.l - lab2.l, 2) +
        Math.pow(lab1.a - lab2.a, 2) +
        Math.pow(lab1.b - lab2.b, 2)
      );

      return deltaE;
    } catch (error) {
      console.error('Color difference calculation error:', error);
      // Fallback to simple RGB distance
      return Math.sqrt(
        Math.pow(color1.r - color2.r, 2) +
        Math.pow(color1.g - color2.g, 2) +
        Math.pow(color1.b - color2.b, 2)
      );
    }
  }, [rgbToXyz]);

  const generateColorTarget = useCallback((): ColorTarget => {
    try {
      const palette = COLOR_PALETTES[config.colorPalette];
      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      
      // Add slight random variation to make it more challenging
      const variation = Math.max(0, 15 - config.difficulty);
      const originalColor = {
        r: Math.max(0, Math.min(255, randomColor.r + (Math.random() - 0.5) * variation)),
        g: Math.max(0, Math.min(255, randomColor.g + (Math.random() - 0.5) * variation)),
        b: Math.max(0, Math.min(255, randomColor.b + (Math.random() - 0.5) * variation))
      };

      const adaptedColor = applyLightingAdaptation(originalColor, config.lightingCondition);
      
      // Professional tolerance calculation based on Delta E
      const baseTolerance = 10; // Professional standard
      const difficultyTolerance = Math.max(2, baseTolerance - (config.difficulty - 1) * 0.8);

      return {
        id: `target_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        originalColor,
        adaptedColor,
        originalHex: colorToHex(originalColor),
        adaptedHex: colorToHex(adaptedColor),
        tolerance: difficultyTolerance
      };
    } catch (error) {
      console.error('Error generating color target:', error);
      // Fallback target
      return {
        id: 'fallback_target',
        originalColor: { r: 128, g: 128, b: 128 },
        adaptedColor: { r: 140, g: 120, b: 110 },
        originalHex: '#808080',
        adaptedHex: '#8c786e',
        tolerance: 10
      };
    }
  }, [config, applyLightingAdaptation, colorToHex]);

  const startGame = useCallback(() => {
    try {
      setGameActive(true);
      setGameStats({
        round: 1,
        score: 0,
        totalAttempts: 0,
        correctMatches: 0,
        averageAccuracy: 0,
        bestAccuracy: 0,
        timeBonus: 0
      });
      setTimeRemaining(config.timeLimit);
      setRoundHistory([]);
      setFeedback({ message: '', type: 'info' });
      gameStartTime.current = Date.now();
      
      const newTarget = generateColorTarget();
      setCurrentTarget(newTarget);
      setUserColor('#808080');

      // Start timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('Error starting game:', error);
      setFeedback({ message: 'Error starting game. Please try again.', type: 'error' });
    }
  }, [config, generateColorTarget]);

  const handleTimeout = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setFeedback({ 
      message: `Time's up! The target color was ${currentTarget?.originalHex || 'unknown'}.`, 
      type: 'error' 
    });
    setGameStats(prev => ({ ...prev, totalAttempts: prev.totalAttempts + 1 }));
  }, [currentTarget]);

  const checkMatch = useCallback(() => {
    if (!currentTarget || isProcessing) return;

    setIsProcessing(true);
    
    try {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      const userColorRgb = hexToColor(userColor);
      const colorDifference = calculateColorDifference(currentTarget.originalColor, userColorRgb);
      
      const newTotalAttempts = gameStats.totalAttempts + 1;
      const timeBonus = Math.max(0, Math.floor((timeRemaining / config.timeLimit) * 20));
      
      if (colorDifference <= currentTarget.tolerance) {
        const basePoints = Math.max(10, Math.floor((currentTarget.tolerance - colorDifference) * 2));
        const difficultyMultiplier = 1 + (config.difficulty - 1) * 0.1;
        const totalPoints = Math.floor((basePoints + timeBonus) * difficultyMultiplier);
        
        const newCorrectMatches = gameStats.correctMatches + 1;
        const accuracy = Math.round((1 - colorDifference / currentTarget.tolerance) * 100);
        
        setGameStats(prev => ({
          ...prev,
          score: prev.score + totalPoints,
          correctMatches: newCorrectMatches,
          totalAttempts: newTotalAttempts,
          averageAccuracy: Math.round((prev.averageAccuracy * prev.correctMatches + accuracy) / newCorrectMatches),
          bestAccuracy: Math.max(prev.bestAccuracy, accuracy),
          timeBonus: timeBonus
        }));
        
        setRoundHistory(prev => [...prev, accuracy]);
        
        setFeedback({ 
          message: `Excellent match! Accuracy: ${accuracy}%. Points: ${totalPoints} (${basePoints} base + ${timeBonus} time bonus)`, 
          type: 'success' 
        });
      } else {
        const accuracy = Math.max(0, Math.round((1 - colorDifference / (currentTarget.tolerance * 2)) * 100));
        
        setGameStats(prev => ({
          ...prev,
          totalAttempts: newTotalAttempts,
          averageAccuracy: prev.correctMatches > 0 ? Math.round((prev.averageAccuracy * prev.correctMatches) / prev.correctMatches) : 0
        }));
        
        setRoundHistory(prev => [...prev, 0]);
        
        setFeedback({ 
          message: `Close, but not quite! Color difference: ${colorDifference.toFixed(1)} (tolerance: ${currentTarget.tolerance.toFixed(1)}). Target was ${currentTarget.originalHex}`, 
          type: 'error' 
        });
      }
    } catch (error) {
      console.error('Error checking match:', error);
      setFeedback({ message: 'Error processing your answer. Please try again.', type: 'error' });
    } finally {
      setIsProcessing(false);
    }
  }, [currentTarget, userColor, gameStats, timeRemaining, config, isProcessing, hexToColor, calculateColorDifference]);

  const nextRound = useCallback(() => {
    try {
      const newTarget = generateColorTarget();
      setCurrentTarget(newTarget);
      setUserColor('#808080');
      setFeedback({ message: '', type: 'info' });
      setTimeRemaining(config.timeLimit);
      setGameStats(prev => ({ ...prev, round: prev.round + 1 }));

      // Restart timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('Error starting next round:', error);
      setFeedback({ message: 'Error starting next round. Please try again.', type: 'error' });
    }
  }, [generateColorTarget, config.timeLimit, handleTimeout]);

  const endGame = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setGameActive(false);
    setCurrentTarget(null);
    setFeedback({ message: '', type: 'info' });
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const accuracyRate = gameStats.totalAttempts > 0 ? Math.round((gameStats.correctMatches / gameStats.totalAttempts) * 100) : 0;

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Professional Chromatic Adaptation Trainer
      </h1>

      {!gameActive ? (
        <Card className="p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">Training Configuration</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Lighting Environment
                </label>
                <Select
                  value={config.lightingCondition}
                  onValueChange={(value: any) => setConfig({ ...config, lightingCondition: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select lighting condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daylight">Daylight (D65 - 6500K)</SelectItem>
                    <SelectItem value="incandescent">Incandescent (2856K)</SelectItem>
                    <SelectItem value="fluorescent">Fluorescent (4150K)</SelectItem>
                    <SelectItem value="led_cool">LED Cool White (5000K)</SelectItem>
                    <SelectItem value="led_warm">LED Warm White (3000K)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
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
                    <SelectItem value="standard">Standard Colors</SelectItem>
                    <SelectItem value="vibrant">Vibrant Spectrum</SelectItem>
                    <SelectItem value="muted">Muted Tones</SelectItem>
                    <SelectItem value="professional">Professional Colors</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Difficulty Level: {config.difficulty}/10
                </label>
                <Slider
                  value={[config.difficulty]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={(value) => setConfig({ ...config, difficulty: value[0] })}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Time Limit: {config.timeLimit}s
                </label>
                <Slider
                  value={[config.timeLimit]}
                  min={15}
                  max={120}
                  step={15}
                  onValueChange={(value) => setConfig({ ...config, timeLimit: value[0] })}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Quick</span>
                  <span>Relaxed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={startGame} className="px-12 py-4 text-lg">
              Begin Training Session
            </Button>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">How It Works:</h3>
            <p className="text-blue-700 text-sm">
              This trainer uses professional color science principles including chromatic adaptation transforms 
              and Delta E color difference calculations. Match colors as they would appear under different 
              lighting conditions using your color perception skills.
            </p>
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Stats Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{gameStats.round}</div>
              <div className="text-sm text-gray-600">Round</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{gameStats.score}</div>
              <div className="text-sm text-gray-600">Score</div>
            </Card>
            <Card className="p-4 text-center">
              <div className={`text-2xl font-bold ${timeRemaining <= 10 ? 'text-red-500' : timeRemaining <= 20 ? 'text-orange-500' : 'text-blue-600'}`}>
                {timeRemaining}s
              </div>
              <div className="text-sm text-gray-600">Time Left</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{accuracyRate}%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600">{gameStats.bestAccuracy}%</div>
              <div className="text-sm text-gray-600">Best Match</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-teal-600">{gameStats.correctMatches}/{gameStats.totalAttempts}</div>
              <div className="text-sm text-gray-600">Matches</div>
            </Card>
          </div>

          {/* Main Game Interface */}
          <Card className="p-8 shadow-xl">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold mb-3">
                Color Matching Challenge
              </h2>
              <p className="text-gray-600 mb-2">
                Match the original color as it appears under <strong>{config.lightingCondition.replace('_', ' ')}</strong> lighting
              </p>
              <p className="text-sm text-gray-500">
                Lighting Environment: {ILLUMINANTS[config.lightingCondition].temp}K • 
                Tolerance: ±{currentTarget?.tolerance.toFixed(1)} ΔE
              </p>
            </div>

            {currentTarget && (
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
                {/* Target Color Display */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div
                      className="w-40 h-40 rounded-2xl border-4 border-gray-300 shadow-lg"
                      style={{ backgroundColor: currentTarget.adaptedHex }}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300" 
                           style={{ backgroundColor: currentTarget.originalHex }} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-700">Target Color</p>
                  <p className="text-xs text-gray-500">Under {config.lightingCondition.replace('_', ' ')}</p>
                </div>

                {/* Arrow */}
                <div className="text-4xl font-bold text-gray-400 rotate-90 lg:rotate-0">→</div>

                {/* User Color Picker */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <input
                      type="color"
                      value={userColor}
                      onChange={(e) => setUserColor(e.target.value)}
                      className="w-40 h-40 rounded-2xl border-4 border-blue-500 cursor-pointer shadow-lg"
                      disabled={isProcessing}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md">
                      <div className="w-6 h-6 rounded-full border-2 border-blue-300" 
                           style={{ backgroundColor: userColor }} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-700">Your Match</p>
                  <p className="text-xs text-gray-500">{userColor.toUpperCase()}</p>
                </div>
              </div>
            )}

            {/* Color Analysis */}
            {currentTarget && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <div className="font-medium text-gray-700">Original</div>
                    <div className="text-gray-600">{currentTarget.originalHex}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Adapted</div>
                    <div className="text-gray-600">{currentTarget.adaptedHex}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Your Choice</div>
                    <div className="text-gray-600">{userColor.toUpperCase()}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700">Difference</div>
                    <div className="text-gray-600">
                      {currentTarget ? calculateColorDifference(currentTarget.originalColor, hexToColor(userColor)).toFixed(1) : '0.0'} ΔE
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              {!feedback.message ? (
                <Button 
                  onClick={checkMatch} 
                  size="lg" 
                  className="px-12 py-4 text-lg"
                  disabled={isProcessing || timeRemaining === 0}
                >
                  {isProcessing ? 'Processing...' : 'Submit Match'}
                </Button>
              ) : (
                <div className="space-y-4">
                  <Button onClick={nextRound} size="lg" className="px-12 py-4 text-lg mr-4">
                    Next Round
                  </Button>
                  <Button onClick={endGame} variant="outline" size="lg" className="px-8 py-4">
                    End Session
                  </Button>
                </div>
              )}
            </div>

            {/* Feedback Display */}
            {feedback.message && (
              <div className={`mt-6 p-4 rounded-lg text-center ${
                feedback.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
                feedback.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
                'bg-blue-50 text-blue-800 border border-blue-200'
              }`}>
                <div className="font-semibold text-lg">{feedback.message}</div>
              </div>
            )}

            {/* Progress Indicator */}
            {roundHistory.length > 0 && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-700 mb-3">Session Progress</h4>
                <div className="flex flex-wrap gap-2">
                  {roundHistory.map((accuracy, index) => (
                    <div
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        accuracy === 0 ? 'bg-red-200 text-red-800' :
                        accuracy < 50 ? 'bg-yellow-200 text-yellow-800' :
                        accuracy < 80 ? 'bg-blue-200 text-blue-800' :
                        'bg-green-200 text-green-800'
                      }`}
                    >
                      R{index + 1}: {accuracy === 0 ? 'Miss' : `${accuracy}%`}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {/* Performance Analytics */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Analytics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{gameStats.averageAccuracy}%</div>
                <div className="text-sm text-blue-700">Average Accuracy</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{gameStats.timeBonus}</div>
                <div className="text-sm text-green-700">Time Bonus (Last Round)</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round((Date.now() - gameStartTime.current) / 1000)}s
                </div>
                <div className="text-sm text-purple-700">Session Duration</div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ChromaticAdaptationTrainer;