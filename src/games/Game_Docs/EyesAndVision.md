# SenseAbled Visual Impairment Therapy Games - Development Prompt

## Platform Overview
You are developing therapeutic games and exercises for **SenseAbled**, a gamified therapy platform for individuals with sensory and physical impairments. Focus on creating accessible, evidence-based, and engaging therapeutic interventions for visual impairments.

## Core Development Principles

### 1. Accessibility-First Design
- Implement WCAG 2.1 AAA compliance standards
- Provide multiple input modalities (touch, keyboard, eye-tracking, voice)
- Ensure scalable UI elements with customizable contrast and text size
- Include audio descriptions and haptic feedback where applicable

### 2. Evidence-Based Therapeutic Approach
- Ground all exercises in established vision therapy research
- Implement progressive difficulty algorithms based on user performance
- Track and analyze therapeutic metrics for professional review
- Provide clear therapeutic objectives for each activity

### 3. Personalization and Adaptation
- Create user profiles with specific impairment parameters
- Implement adaptive difficulty based on real-time performance
- Allow customization of visual, audio, and haptic settings
- Support both self-guided and clinician-supervised modes

---

## Condition-Specific Development Requirements

### 1. COLOR BLINDNESS (Color Vision Deficiency)

#### Technical Implementation Strategy
**Primary Challenge**: Users cannot distinguish certain color combinations due to cone cell deficiencies (primarily red-green, less commonly blue-yellow or complete color blindness).

#### Game 1: Adaptive Color Vision Challenge
**Detailed Development Specifications:**

```typescript
interface ColorVisionConfig {
  deficiencyType: 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia';
  severityLevel: 1-10;
  compensationStrategies: string[];
}
```

**Core Mechanics:**
- Generate Ishihara-style dot patterns using SVG with precise color values
- Implement CVD simulation algorithms to test visibility for different deficiency types
- Create alternative identification methods: brightness patterns, texture overlays, shape recognition
- Use machine learning to optimize color palettes for individual users

**Progressive Difficulty System:**
1. **Level 1-3**: High contrast patterns with significant color differences
2. **Level 4-6**: Medium contrast with subtle hue variations
3. **Level 7-10**: Low contrast requiring maximum discrimination ability

**Technical Requirements:**
- WebGL-based color space manipulation
- Real-time CVD simulation using Brettel, Viénot, and Mollon algorithms
- Performance tracking: response time, accuracy rate, improvement metrics
- Integration with colorimeter calibration for accurate display

#### Game 2: Environmental Color Navigation
**Advanced Implementation:**
- Real-world scenario simulation (traffic lights, food identification, clothing coordination)
- AR integration for smartphone-based real-world training
- Machine learning classification of "problem colors" for individual users
- Social features for sharing successful identification strategies

### 2. LAZY EYE (Amblyopia)

#### Technical Implementation Strategy
**Primary Challenge**: Neural suppression of weaker eye requires forced usage and binocular integration training.

#### Game 1: Monocular Adventure Quest
**Detailed Development Specifications:**

```typescript
interface AmblyopiaConfig {
  affectedEye: 'left' | 'right';
  suppressionLevel: 1-5;
  visualAcuity: number; // LogMAR scale
  preferredEyeDominance: number;
}
```

**Core Mechanics:**
- Eye-tracking integration to ensure proper eye usage
- Dynamic occlusion of dominant eye using LCD shutter glasses or software dimming
- Gamified visual acuity testing with adaptive letter/symbol sizes
- Story progression locked behind visual performance milestones

**Therapeutic Progression:**
1. **Week 1-2**: Basic shape recognition and tracking (20/200 equivalent)
2. **Week 3-4**: Fine detail discrimination (20/100 equivalent)  
3. **Week 5-8**: Complex pattern recognition (20/60 or better)
4. **Week 9-12**: Binocular fusion exercises

**Technical Requirements:**
- Precise eye-tracking calibration (accuracy <1° visual angle)
- Real-time gaze position monitoring with 60Hz+ sampling
- Automated visual acuity assessment using psychophysical methods
- Integration with clinical assessment tools (E-ETDRS, Pelli-Robson)

#### Game 2: Contrast Sensitivity Rehabilitation
**Advanced Implementation:**
- Gabor patch presentation with varying spatial frequencies
- Adaptive staircase procedures for threshold determination
- Integration with contrast sensitivity function (CSF) modeling
- Environmental adaptation training (low light, glare conditions)

### 3. STRABISMUS (Eye Alignment Disorders)

#### Technical Implementation Strategy
**Primary Challenge**: Misaligned eyes require convergence/divergence training and stereoscopic vision development.

#### Game 1: Stereoscopic Depth Training Suite
**Detailed Development Specifications:**

```typescript
interface StrabismusConfig {
  alignmentType: 'esotropia' | 'exotropia' | 'hypertropia' | 'hypotropia';
  angleDeviation: number; // prism diopters
  binocularStatus: 'suppression' | 'diplopia' | 'alternating';
  stereoacuity: number; // arc seconds
}
```

**Core Mechanics:**
- True stereoscopic display using polarized, anaglyph, or VR technology
- Real-time eye alignment monitoring using infrared eye tracking
- Progressive disparity adjustment based on fusion ability
- Biofeedback integration for convergence/divergence exercises

**Therapeutic Modules:**
1. **Fusion Training**: Gradual image merger exercises
2. **Stereoacuity Development**: Random dot stereogram progression
3. **Convergence Therapy**: Dynamic target approaching/receding
4. **Saccadic Training**: Rapid, accurate eye movement practice

**Technical Requirements:**
- Sub-pixel accurate stereoscopic rendering
- Binocular eye tracking with vergence angle calculation
- Integration with synoptophore and stereoscope principles
- Clinical assessment integration (TNO test, Randot stereotest)

### 4. EYE TRACKING DISORDERS

#### Technical Implementation Strategy
**Primary Challenge**: Impaired saccadic and smooth pursuit movements affecting reading, navigation, and visual processing.

#### Game 1: Saccadic Precision Rehabilitation
**Detailed Development Specifications:**

```typescript
interface EyeTrackingConfig {
  saccadicAccuracy: number; // percentage
  smoothPursuitGain: number; // 0-1
  fixationStability: number; // arc minutes
  readingEfficiency: number; // words per minute
}
```

**Core Mechanics:**
- High-precision eye tracking (>120Hz) with predictive algorithms
- Customizable target patterns (pro-saccade, anti-saccade, memory-guided)
- Real-time saccadic metrics: latency, accuracy, peak velocity
- Reading-specific training with eye movement optimization

**Progressive Training Modules:**
1. **Basic Saccades**: Simple left-right, up-down movements
2. **Complex Patterns**: Diagonal, circular, and figure-eight tracking
3. **Predictive Saccades**: Anticipatory movement training
4. **Reading Integration**: Text-based eye movement optimization

### 5. LOW VISION REHABILITATION

#### Technical Implementation Strategy
**Primary Challenge**: Maximizing functional use of remaining vision through magnification, contrast enhancement, and scanning strategies.

#### Game 1: Adaptive Visual Navigation System
**Detailed Development Specifications:**

```typescript
interface LowVisionConfig {
  visualFieldDefect: string; // central, peripheral, quadrant
  visualAcuity: number; // LogMAR
  contrastSensitivity: number; // log units
  preferredMagnification: number; // 2x to 20x
}
```

**Core Mechanics:**
- Dynamic magnification with smooth zoom transitions
- High-contrast mode with customizable color schemes
- Audio-visual integration for multi-sensory feedback
- Landmark-based navigation training

**Rehabilitation Modules:**
1. **Scanning Strategy Development**: Systematic visual search patterns
2. **Magnification Efficiency**: Optimal use of assistive technology
3. **Environmental Adaptation**: Real-world scenario training
4. **Reading Rehabilitation**: Text navigation and comprehension

### 6. REFRACTIVE ERROR MANAGEMENT

#### Technical Implementation Strategy
**Primary Challenge**: Accommodation fatigue and digital eye strain prevention through focusing exercises.

#### Game 1: Dynamic Accommodation Trainer
**Detailed Development Specifications:**

```typescript
interface RefractiveConfig {
  accommodationAmplitude: number; // diopters
  accommodationFacility: number; // cycles per minute
  nearPointOfConvergence: number; // centimeters
  digitalEyeStrainLevel: 1-10;
}
```

**Core Mechanics:**
- Simulated depth-of-field effects requiring accommodation
- 20-20-20 rule gamification with compliance tracking
- Near-far focusing exercises with performance metrics
- Blue light filtering and screen time management

---

## Implementation Guidelines

### Technical Stack Requirements
- **Frontend**: React/Vue.js with WebGL/Three.js for 3D graphics
- **Eye Tracking**: WebGazer.js or dedicated hardware SDK integration  
- **Analytics**: Real-time performance tracking with statistical analysis
- **Accessibility**: Screen reader compatibility, keyboard navigation
- **Cross-platform**: Progressive Web App with native mobile features

### Data Privacy and Clinical Integration
- HIPAA-compliant data handling and storage
- Integration with Electronic Health Records (EHR)
- Clinical progress reporting with standardized metrics
- Telehealth compatibility for remote supervision

### Performance Optimization
- 60FPS minimum for smooth visual experiences
- <100ms latency for real-time eye tracking feedback
- Offline capability for uninterrupted therapy sessions
- Adaptive quality settings based on device capabilities

### User Experience Considerations
- Onboarding tutorials with accessibility features
- Progress visualization with motivational elements
- Customizable UI themes for different visual preferences
- Social features for peer support and competition

---

## Development Validation Criteria

### Clinical Effectiveness Metrics
- Pre/post therapy visual assessment improvements
- User engagement and compliance rates
- Therapist satisfaction and adoption metrics
- Integration success with existing clinical workflows

### Technical Performance Standards
- 99.9% uptime for critical therapeutic functions
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness across iOS and Android platforms
- Accessibility compliance validation through automated testing

This comprehensive development framework ensures that each therapeutic game is scientifically grounded, technically robust, and genuinely beneficial for users with visual impairments while maintaining the engaging, gamified experience that makes therapy enjoyable and effective.