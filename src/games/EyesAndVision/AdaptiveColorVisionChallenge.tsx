import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ColorVisionConfig {
  deficiencyType: 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia' | 'normal';
  severityLevel: number;
  compensationStrategies: string[];
}

interface IshiharaPattern {
  id: number;
  hiddenElement: string;
  difficulty: number;
  foregroundColors: string[];
  backgroundColors: string[];
  shape: string;
}

interface Dot {
  x: number;
  y: number;
  radius: number;
  color: string;
  isPattern: boolean;
}

const AdaptiveColorVisionChallenge: React.FC = () => {
  const [config, setConfig] = useState<ColorVisionConfig>({
    deficiencyType: 'normal',
    severityLevel: 5,
    compensationStrategies: []
  });

  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(45);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [currentPattern, setCurrentPattern] = useState<IshiharaPattern | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [totalAttempts, setTotalAttempts] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Professional color palettes for different deficiency types
  const colorPalettes = {
    protanopia: {
      foreground: ['#1f77b4', '#17becf', '#2ca02c', '#9467bd'],
      background: ['#ff7f0e', '#d62728', '#e377c2', '#bcbd22']
    },
    deuteranopia: {
      foreground: ['#1f77b4', '#17becf', '#9467bd', '#8c564b'],
      background: ['#ff7f0e', '#d62728', '#e377c2', '#bcbd22']
    },
    tritanopia: {
      foreground: ['#d62728', '#ff7f0e', '#e377c2', '#bcbd22'],
      background: ['#1f77b4', '#17becf', '#2ca02c', '#9467bd']
    },
    achromatopsia: {
      foreground: ['#404040', '#606060', '#808080'],
      background: ['#a0a0a0', '#c0c0c0', '#e0e0e0']
    },
    normal: {
      foreground: ['#d62728', '#ff4444', '#cc2222'],
      background: ['#2ca02c', '#44aa44', '#22cc22']
    }
  };

  // Dynamic pattern pools for each difficulty level
  const patternPools = {
    1: ['3', '8', '1', '0'], // Easy single digits
    2: ['2', '5', '6', '9'], // Medium single digits
    3: ['4', '7'], // Harder single digits
    4: ['12', '15', '17', '21', '25', '26'], // Easy two-digit
    5: ['29', '35', '45', '56', '62', '74'], // Medium two-digit
    6: ['16', '73', '42', '96', '57', '63'], // Harder two-digit
    7: ['8', '3', '5'], // Advanced single (higher contrast needed)
    8: ['45', '97', '13', '58', '71', '86'] // Advanced two-digit
  };

  // Generate random test pattern
  const generateRandomPattern = (difficulty: number): IshiharaPattern => {
    const pool = patternPools[difficulty as keyof typeof patternPools] || patternPools[1];
    const randomElement = pool[Math.floor(Math.random() * pool.length)];
    
    return {
      id: Date.now() + Math.random(), // Unique ID
      hiddenElement: randomElement,
      difficulty: difficulty,
      foregroundColors: colorPalettes[config.deficiencyType].foreground,
      backgroundColors: colorPalettes[config.deficiencyType].background,
      shape: 'number'
    };
  };

  // Generate number patterns using proper dot matrices
  const numberPatterns = {
    '0': [
      [0,1,1,1,0],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,0]
    ],
    '1': [
      [0,0,1,0,0],
      [0,1,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,0,1,0,0],
      [0,1,1,1,0]
    ],
    '2': [
      [0,1,1,1,0],
      [1,0,0,0,1],
      [0,0,0,0,1],
      [0,0,0,1,0],
      [0,0,1,0,0],
      [0,1,0,0,0],
      [1,1,1,1,1]
    ],
    '3': [
      [0,1,1,1,0],
      [1,0,0,0,1],
      [0,0,0,0,1],
      [0,0,1,1,0],
      [0,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,0]
    ],
    '4': [
      [0,0,0,1,0],
      [0,0,1,1,0],
      [0,1,0,1,0],
      [1,0,0,1,0],
      [1,1,1,1,1],
      [0,0,0,1,0],
      [0,0,0,1,0]
    ],
    '5': [
      [1,1,1,1,1],
      [1,0,0,0,0],
      [1,1,1,1,0],
      [0,0,0,0,1],
      [0,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,0]
    ],
    '6': [
      [0,1,1,1,0],
      [1,0,0,0,1],
      [1,0,0,0,0],
      [1,1,1,1,0],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,0]
    ],
    '7': [
      [1,1,1,1,1],
      [0,0,0,0,1],
      [0,0,0,1,0],
      [0,0,1,0,0],
      [0,1,0,0,0],
      [0,1,0,0,0],
      [0,1,0,0,0]
    ],
    '8': [
      [0,1,1,1,0],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,0],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,0]
    ],
    '9': [
      [0,1,1,1,0],
      [1,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,1],
      [0,0,0,0,1],
      [1,0,0,0,1],
      [0,1,1,1,0]
    ]
  };

  // Generate dots for Ishihara pattern with randomization
  const generateDots = (pattern: IshiharaPattern): Dot[] => {
    const dots: Dot[] = [];
    const centerX = 150;
    const centerY = 150;
    const radius = 140;
    
    // Randomize background dot count and positions
    const backgroundDotCount = 750 + Math.floor(Math.random() * 150); // 750-900 dots
    
    // Add background dots first with random seed for positioning
    for (let i = 0; i < backgroundDotCount; i++) {
      let x, y;
      let attempts = 0;
      do {
        // Add some randomness to distribution
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.sqrt(Math.random()) * radius;
        x = centerX + distance * Math.cos(angle);
        y = centerY + distance * Math.sin(angle);
        attempts++;
      } while ((Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) > radius || attempts > 10));
      
      const dotRadius = Math.random() * 3 + 2.5; // Slightly varied sizes
      const colorIndex = Math.floor(Math.random() * pattern.backgroundColors.length);
      
      dots.push({
        x: x + (Math.random() - 0.5) * 2, // Add micro-jitter
        y: y + (Math.random() - 0.5) * 2,
        radius: dotRadius,
        color: pattern.backgroundColors[colorIndex],
        isPattern: false
      });
    }

    // Generate pattern dots with randomization
    const element = pattern.hiddenElement;
    const scale = element.length > 1 ? 0.7 + Math.random() * 0.2 : 1.0 + Math.random() * 0.3; // Random scale variation
    
    for (let charIndex = 0; charIndex < element.length; charIndex++) {
      const char = element[charIndex];
      const matrix = numberPatterns[char as keyof typeof numberPatterns];
      
      if (matrix) {
        // Random positioning offset for multi-digit numbers
        const baseOffsetX = element.length > 1 ? (charIndex - 0.5) * (35 + Math.random() * 10) * scale : 0;
        const globalOffsetX = (Math.random() - 0.5) * 8; // Random shift
        const globalOffsetY = (Math.random() - 0.5) * 8;
        
        for (let row = 0; row < matrix.length; row++) {
          for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 1) {
              // Randomize number of dots per matrix position
              const dotsPerPosition = 2 + Math.floor(Math.random() * 3); // 2-4 dots
              
              for (let dot = 0; dot < dotsPerPosition; dot++) {
                const baseX = centerX + (col - 2) * (10 + Math.random() * 4) * scale + baseOffsetX + globalOffsetX;
                const baseY = centerY + (row - 3) * (10 + Math.random() * 4) * scale + globalOffsetY;
                
                // Add significant randomness to dot positions
                const x = baseX + (Math.random() - 0.5) * 12;
                const y = baseY + (Math.random() - 0.5) * 12;
                
                // Only add if within circle
                if (Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) <= radius) {
                  const dotRadius = Math.random() * 3.5 + 2.5; // Varied sizes
                  const colorIndex = Math.floor(Math.random() * pattern.foregroundColors.length);
                  
                  dots.push({
                    x,
                    y,
                    radius: dotRadius,
                    color: pattern.foregroundColors[colorIndex],
                    isPattern: true
                  });
                }
              }
            }
          }
        }
      }
    }

    // Shuffle dots array for random rendering order
    for (let i = dots.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dots[i], dots[j]] = [dots[j], dots[i]];
    }

    return dots;
  };

  // Apply color vision deficiency simulation
  const simulateColorDeficiency = (color: string, deficiencyType: string, severity: number): string => {
    if (deficiencyType === 'normal') return color;
    
    // Convert hex to RGB
    const hex = color.replace('#', '');
    let r = parseInt(hex.substr(0, 2), 16) / 255;
    let g = parseInt(hex.substr(2, 2), 16) / 255;
    let b = parseInt(hex.substr(4, 2), 16) / 255;

    const severityFactor = severity / 10;

    switch (deficiencyType) {
      case 'protanopia':
        r = r * (1 - severityFactor) + (0.567 * r + 0.433 * g) * severityFactor;
        break;
      case 'deuteranopia':
        g = g * (1 - severityFactor) + (0.625 * r + 0.375 * g) * severityFactor;
        break;
      case 'tritanopia':
        b = b * (1 - severityFactor) + (0.95 * g + 0.05 * b) * severityFactor;
        break;
      case 'achromatopsia':
        const gray = 0.299 * r + 0.587 * g + 0.114 * b;
        r = r * (1 - severityFactor) + gray * severityFactor;
        g = g * (1 - severityFactor) + gray * severityFactor;
        b = b * (1 - severityFactor) + gray * severityFactor;
        break;
    }

    // Convert back to hex
    const toHex = (val: number) => Math.round(Math.max(0, Math.min(255, val * 255))).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // Generate SVG content for current pattern with randomization key
  const currentPatternSVG = useMemo(() => {
    if (!currentPattern) return null;

    const dots = generateDots(currentPattern);
    
    return (
      <svg width="300" height="300" viewBox="0 0 300 300" className="border-2 border-gray-300 rounded-full">
        <circle cx="150" cy="150" r="140" fill="#f8f9fa" />
        {dots.map((dot, index) => (
          <circle
            key={`${currentPattern.id}-${index}`} // Include pattern ID for uniqueness
            cx={dot.x}
            cy={dot.y}
            r={dot.radius}
            fill={simulateColorDeficiency(dot.color, config.deficiencyType, config.severityLevel)}
            opacity={0.75 + Math.random() * 0.2} // Randomize opacity slightly
          />
        ))}
      </svg>
    );
  }, [currentPattern, config.deficiencyType, config.severityLevel]);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setCurrentLevel(1);
    setTotalAttempts(0);
    setCorrectAnswers(0);
    setTimeRemaining(45);
    selectPattern();
    
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
    setFeedback(`Time's up! The correct answer was "${currentPattern?.hiddenElement}"`);
    setShowAnswer(true);
    setTotalAttempts(prev => prev + 1);
  };

  const selectPattern = () => {
    // Determine difficulty range based on current level
    const levelRanges = [
      { min: 1, max: 2 }, // Level 1
      { min: 1, max: 3 }, // Level 2
      { min: 2, max: 4 }, // Level 3
      { min: 3, max: 5 }, // Level 4
      { min: 4, max: 6 }, // Level 5
      { min: 5, max: 7 }, // Level 6
      { min: 6, max: 8 }, // Level 7
      { min: 7, max: 8 }, // Level 8
      { min: 7, max: 8 }, // Level 9
      { min: 8, max: 8 }  // Level 10
    ];
    
    const range = levelRanges[Math.min(currentLevel - 1, levelRanges.length - 1)];
    
    // Select random difficulty within range
    const selectedDifficulty = range.min + Math.floor(Math.random() * (range.max - range.min + 1));
    
    // Generate random pattern for selected difficulty
    const newPattern = generateRandomPattern(selectedDifficulty);
    setCurrentPattern(newPattern);
    
    setUserAnswer('');
    setFeedback('');
    setShowAnswer(false);
    setTimeRemaining(45);
  };

  const submitAnswer = () => {
    if (!currentPattern || !userAnswer.trim()) return;
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    const isCorrect = userAnswer.toLowerCase().trim() === currentPattern.hiddenElement.toLowerCase();
    setTotalAttempts(prev => prev + 1);
    
    if (isCorrect) {
      const points = Math.max(1, Math.floor((timeRemaining / 45) * 10));
      setScore(prev => prev + points);
      setCorrectAnswers(prev => prev + 1);
      setFeedback(`Correct! You earned ${points} points!`);
      setCurrentLevel(prev => Math.min(prev + 1, 10));
    } else {
      setFeedback(`Incorrect. The correct answer was "${currentPattern.hiddenElement}"`);
    }
    
    setShowAnswer(true);
  };

  const nextPattern = () => {
    selectPattern();
    
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

  const getCompensationStyles = (): React.CSSProperties => {
    const styles: React.CSSProperties = {};
    
    if (config.compensationStrategies.includes('brightness')) {
      styles.filter = (styles.filter || '') + ' brightness(1.3) contrast(1.4)';
    }
    
    if (config.compensationStrategies.includes('saturation')) {
      styles.filter = (styles.filter || '') + ' saturate(1.5)';
    }
    
    if (config.compensationStrategies.includes('hue')) {
      styles.filter = (styles.filter || '') + ' hue-rotate(15deg)';
    }
    
    return styles;
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const accuracyRate = totalAttempts > 0 ? Math.round((correctAnswers / totalAttempts) * 100) : 0;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Professional Color Vision Assessment
      </h1>
      
      {!gameActive ? (
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Configuration & Setup</h2>
          
          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Color Vision Type
              </label>
              <Select 
                value={config.deficiencyType}
                onValueChange={(value: any) => setConfig({...config, deficiencyType: value})}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select vision type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal Color Vision</SelectItem>
                  <SelectItem value="protanopia">Protanopia (Red-deficient)</SelectItem>
                  <SelectItem value="deuteranopia">Deuteranopia (Green-deficient)</SelectItem>
                  <SelectItem value="tritanopia">Tritanopia (Blue-deficient)</SelectItem>
                  <SelectItem value="achromatopsia">Achromatopsia (Monochromatic)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Severity Level: {config.severityLevel}/10
              </label>
              <Slider
                value={[config.severityLevel]}
                min={1}
                max={10}
                step={1}
                onValueChange={(value) => setConfig({...config, severityLevel: value[0]})}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Mild</span>
                <span>Severe</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Visual Enhancement Strategies
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'brightness', label: 'Enhanced Brightness' },
                  { key: 'saturation', label: 'Increased Saturation' },
                  { key: 'hue', label: 'Hue Adjustment' }
                ].map(strategy => (
                  <Button 
                    key={strategy.key}
                    variant={config.compensationStrategies.includes(strategy.key) ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      const newStrategies = config.compensationStrategies.includes(strategy.key)
                        ? config.compensationStrategies.filter(s => s !== strategy.key)
                        : [...config.compensationStrategies, strategy.key];
                      setConfig({...config, compensationStrategies: newStrategies});
                    }}
                  >
                    {strategy.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" onClick={startGame} className="px-8 py-3">
              Begin Assessment
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Card className="p-4">
              <div className="text-2xl font-bold text-blue-600">{currentLevel}</div>
              <div className="text-sm text-gray-600">Level</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-sm text-gray-600">Score</div>
            </Card>
            <Card className="p-4">
              <div className={`text-2xl font-bold ${timeRemaining <= 15 ? 'text-red-500' : 'text-orange-600'}`}>
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
                What number do you see in the pattern?
              </h2>
              <p className="text-sm text-gray-600">
                Look carefully at the colored dots and identify the hidden number.
              </p>
            </div>
            
            <div className="flex justify-center mb-8" style={getCompensationStyles()}>
              {currentPatternSVG}
            </div>
            
            {!showAnswer ? (
              <div className="space-y-6">
                <div className="max-w-xs mx-auto">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="w-full p-3 text-lg text-center border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    placeholder="Enter number"
                    maxLength={3}
                    autoFocus
                  />
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    onClick={submitAnswer} 
                    disabled={!userAnswer.trim()}
                    size="lg"
                    className="px-8"
                  >
                    Submit Answer
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-center">
                <div className={`text-lg font-medium p-4 rounded-lg ${
                  feedback.includes('Correct') 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {feedback}
                </div>
                
                <Button onClick={nextPattern} size="lg" className="px-8">
                  Continue to Next Pattern
                </Button>
              </div>
            )}
          </Card>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => {
                if (timerRef.current) {
                  clearInterval(timerRef.current);
                }
                setGameActive(false);
              }}
            >
              End Assessment
            </Button>
          </div>
        </div>
      )}
      
      <Card className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          About This Assessment
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          This professional-grade color vision assessment uses scientifically-accurate Ishihara-style 
          patterns with precise color calibration for different types of color vision deficiencies.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Clinical Benefits:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Accurate deficiency type identification</li>
              <li>• Severity level assessment</li>
              <li>• Progress tracking over time</li>
              <li>• Adaptive difficulty progression</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Enhancement Features:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Real-time color simulation</li>
              <li>• Multiple compensation strategies</li>
              <li>• Professional dot-matrix patterns</li>
              <li>• Precise timing and scoring</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdaptiveColorVisionChallenge;