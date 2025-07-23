import { useState, useEffect, useRef } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";

interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'condition' | 'game' | 'exercise';
  categoryId: string;
  tags: string[];
}

// Search data index
const searchData: SearchItem[] = [
  // Eyes & Vision - Conditions
  {
    id: 'color-blindness',
    title: 'Color Blindness (Color Vision Deficiency)',
    description: 'Difficulty distinguishing certain colors due to genetic mutations affecting cone cells',
    category: 'Eyes & Vision',
    type: 'condition',
    categoryId: 'eyes-vision',
    tags: ['vision', 'color', 'genetic', 'cone-cells', 'discrimination']
  },
  {
    id: 'lazy-eye',
    title: 'Lazy Eye (Amblyopia)',
    description: 'Reduced vision in one eye during development when brain favors stronger eye',
    category: 'Eyes & Vision',
    type: 'condition',
    categoryId: 'eyes-vision',
    tags: ['vision', 'development', 'children', 'acuity', 'amblyopia']
  },
  {
    id: 'strabismus',
    title: 'Strabismus (Crossed Eyes)',
    description: 'Misaligned eyes affecting depth perception and binocular vision',
    category: 'Eyes & Vision',
    type: 'condition',
    categoryId: 'eyes-vision',
    tags: ['vision', 'alignment', 'depth', 'binocular', 'coordination']
  },
  {
    id: 'eye-tracking-disorders',
    title: 'Eye Tracking Disorders',
    description: 'Difficulty smoothly following objects or making accurate eye movements',
    category: 'Eyes & Vision',
    type: 'condition',
    categoryId: 'eyes-vision',
    tags: ['vision', 'tracking', 'movement', 'saccadic', 'pursuit']
  },
  {
    id: 'low-vision',
    title: 'Low Vision',
    description: 'Visual impairment that cannot be corrected with standard glasses or surgery',
    category: 'Eyes & Vision',
    type: 'condition',
    categoryId: 'eyes-vision',
    tags: ['vision', 'impairment', 'rehabilitation', 'adaptive', 'magnification']
  },
  {
    id: 'refractive-errors',
    title: 'Refractive Errors (Myopia/Hyperopia)',
    description: 'Eye doesn\'t bend light correctly causing blurred vision',
    category: 'Eyes & Vision',
    type: 'condition',
    categoryId: 'eyes-vision',
    tags: ['vision', 'focus', 'nearsighted', 'farsighted', 'accommodation']
  },

  // Eyes & Vision - Games
  { id: 'adaptive-color-vision-challenge', title: 'Adaptive Color Vision Challenge', description: 'Adaptive color discrimination training with hidden patterns', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['color', 'training', 'adaptive', 'ishihara', 'discrimination'] },
  { id: 'chromatic-adaptation-trainer', title: 'Chromatic Adaptation Trainer', description: 'Dynamic color matching game with personalized palettes', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['color', 'matching', 'adaptation', 'personalized', 'lighting'] },
  {
    id: 'enhanced-color-sorting',
    title: 'Enhanced Color Sorting Challenge',
    description: 'Advanced gradient arrangement with multiple color families',
    category: 'Eyes & Vision',
    type: 'game',
    categoryId: 'eyes-vision',
    tags: ['color', 'sorting', 'gradient', 'advanced', 'transitions']
  },
  {
    id: 'monocular-adventure',
    title: 'Monocular Adventure Quest',
    description: 'Story-driven adventure requiring precise visual tasks with weaker eye',
    category: 'Eyes & Vision',
    type: 'game',
    categoryId: 'eyes-vision',
    tags: ['amblyopia', 'adventure', 'monocular', 'eye-tracking', 'story']
  },
  {
    id: 'contrast-sensitivity-maze',
    title: 'Contrast Sensitivity Maze',
    description: 'Navigate through progressively faint maze patterns',
    category: 'Eyes & Vision',
    type: 'game',
    categoryId: 'eyes-vision',
    tags: ['contrast', 'maze', 'sensitivity', 'navigation', 'spatial']
  },
  {
    id: 'binocular-rivalry',
    title: 'Binocular Rivalry Resolution',
    description: 'Present different images to each eye for mental fusion',
    category: 'Eyes & Vision',
    type: 'game',
    categoryId: 'eyes-vision',
    tags: ['binocular', 'fusion', 'rivalry', 'stereoscopic', 'depth']
  },
  {
    id: 'stereoscopic-depth',
    title: 'Stereoscopic Depth Challenges',
    description: '3D object manipulation requiring precise depth perception',
    category: 'Eyes & Vision',
    type: 'game',
    categoryId: 'eyes-vision',
    tags: ['depth', 'stereoscopic', '3d', 'manipulation', 'coordination']
  },
  { id: 'convergence-training', title: 'Convergence Training Simulator', description: 'Objects approach and recede requiring precise eye convergence', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['convergence', 'training', 'biofeedback', 'fusion', 'simulator'] },
  { id: 'diplopia-resolution', title: 'Diplopia Resolution Exercises', description: 'Gradual fusion training for double vision using overlapping images', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['diplopia', 'fusion', 'double-vision', 'overlapping', 'training'] },
  { id: 'saccadic-precision', title: 'Saccadic Precision Trainer', description: 'Rapid target acquisition requiring quick, accurate eye movements', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['saccadic', 'precision', 'eye-tracking', 'rapid', 'accuracy'] },
  { id: 'smooth-pursuit', title: 'Smooth Pursuit Mastery', description: 'Follow smoothly moving targets in complex patterns', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['pursuit', 'tracking', 'smooth', 'patterns', 'following']},
  { id: 'reading-scanning', title: 'Reading Scanning Optimizer', description: 'Specialized reading exercises focusing on optimal eye movement patterns', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['reading', 'scanning', 'optimization', 'saccades', 'efficiency'] },
  { id: 'adaptive-navigation', title: 'Adaptive Visual Navigation', description: 'Virtual environment navigation using remaining vision', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['navigation', 'adaptive', 'low-vision', 'virtual', 'mobility'] },
  { id: 'magnification-mastery', title: 'Magnification Mastery Training', description: 'Practice using digital and optical magnification tools effectively', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['magnification', 'assistive', 'tools', 'efficiency', 'training'] },
  { id: 'dynamic-focus-training', title: 'Dynamic Focus Training', description: 'Rapid focus shifting between near and far virtual objects', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['focus', 'accommodation', 'training', 'near-far', 'dynamic'] },
  { id: '20-20-20-breaks', title: '20-20-20 Gamified Breaks', description: 'Automated reminder system with engaging distance viewing activities', category: 'Eyes & Vision', type: 'game', categoryId: 'eyes-vision', tags: ['breaks', 'eye-strain', 'distance', 'reminders', 'fatigue'] },

  // Eyes & Vision - Exercises
  { id: 'focus-training-exercise', title: 'Focus Training', description: 'Strengthen focusing abilities with dynamic near-far exercises', category: 'Eyes & Vision', type: 'exercise', categoryId: 'eyes-vision', tags: ['focus', 'accommodation', 'strengthening', 'dynamic', 'training'] },
  { id: 'eye-movement-coordination', title: 'Eye Movement Coordination', description: 'Improve smooth pursuit and saccadic eye movements', category: 'Eyes & Vision', type: 'exercise', categoryId: 'eyes-vision', tags: ['movement', 'coordination', 'pursuit', 'saccadic', 'improvement'] },
  { id: 'peripheral-vision-enhancement', title: 'Peripheral Vision Enhancement', description: 'Expand visual field awareness and processing', category: 'Eyes & Vision', type: 'exercise', categoryId: 'eyes-vision', tags: ['peripheral', 'field', 'awareness', 'expansion', 'processing'] },
  
  // Ears & Hearing - Conditions
  { id: 'hearing-loss', title: 'Hearing Loss (Partial/Complete)', description: 'Affects over 466 million people worldwide, ranging from mild to profound', category: 'Ears & Hearing', type: 'condition', categoryId: 'ears-hearing', tags: ['hearing', 'impairment', 'communication', 'audiogram', 'rehabilitation'] },
  { id: 'tinnitus', title: 'Tinnitus', description: 'Perception of sound without external stimulus affecting quality of life', category: 'Ears & Hearing', type: 'condition', categoryId: 'ears-hearing', tags: ['hearing', 'ringing', 'phantom', 'sound', 'habituation', 'masking'] },
  { id: 'auditory-processing-disorders', title: 'Auditory Processing Disorders (APD)', description: 'Brain processing difficulties despite normal hearing sensitivity', category: 'Ears & Hearing', type: 'condition', categoryId: 'ears-hearing', tags: ['auditory', 'processing', 'learning', 'phonemic', 'discrimination'] },
  { id: 'balance-vestibular', title: 'Balance and Vestibular Disorders', description: 'Inner ear balance system disorders causing dizziness and vertigo', category: 'Ears & Hearing', type: 'condition', categoryId: 'ears-hearing', tags: ['balance', 'vestibular', 'vertigo', 'dizziness', 'BPPV', 'fall-risk'] },

  // Ears & Hearing - Games
  { id: 'frequency-auditory-training', title: 'Frequency-Specific Auditory Training', description: 'Customized hearing exercises based on individual audiogram results', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['frequency', 'audiogram', 'hearing', 'training', 'adaptive', 'threshold'] },
  { id: 'speech-noise-enhancement', title: 'Speech-in-Noise Enhancement', description: 'Progressive speech recognition training in challenging acoustic environments', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['speech', 'noise', 'recognition', 'acoustic', 'signal-to-noise'] },
  { id: 'auditory-memory-builder', title: 'Auditory Memory Builder', description: 'Sequential sound memory games with increasing complexity', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['memory', 'auditory', 'sequential', 'working-memory', 'patterns'] },
  { id: 'tinnitus-retraining-game', title: 'Tinnitus Retraining Therapy Game', description: 'Interactive sound therapy with personalized masking sounds', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['tinnitus', 'retraining', 'masking', 'sound-therapy', 'habituation'] },
  { id: 'attention-redirection', title: 'Attention Redirection Training', description: 'Cognitive exercises to shift focus away from tinnitus', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['attention', 'cognitive', 'focus', 'tinnitus', 'mindfulness', 'distraction'] },
  { id: 'frequency-matching-masking', title: 'Frequency Matching and Masking', description: 'Identify tinnitus frequency and find optimal masking sounds', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['frequency', 'matching', 'masking', 'tinnitus', 'pitch', 'personalization'] },
  { id: 'auditory-discrimination', title: 'Auditory Discrimination Challenge', description: 'Fine-tuned sound differentiation exercises for similar phonemes', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['discrimination', 'phonemes', 'speech-sounds', 'minimal-pairs', 'accuracy'] },
  { id: 'temporal-processing', title: 'Temporal Processing Trainer', description: 'Exercises focusing on timing aspects of auditory processing', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['temporal', 'timing', 'rhythm', 'gap-detection', 'sequence'] },
  { id: 'dichotic-listening', title: 'Dichotic Listening Exercises', description: 'Different sounds presented simultaneously to each ear', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['dichotic', 'bilateral', 'attention', 'binaural', 'integration'] },
  { id: 'balance-integration', title: 'Balance Integration Training', description: 'Multi-sensory balance challenges for vestibular rehabilitation', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['balance', 'vestibular', 'multi-sensory', 'proprioceptive', 'fall-prevention'] },
  { id: 'vestibular-adaptation', title: 'Vestibular Adaptation Exercises', description: 'Head movement exercises for vestibular system adaptation', category: 'Ears & Hearing', type: 'game', categoryId: 'ears-hearing', tags: ['vestibular', 'adaptation', 'head-movement', 'motion-sensitivity', 'rehabilitation'] },

  // Ears & Hearing - Exercises  
  { id: 'frequency-training-exercise', title: 'Frequency-Specific Auditory Training', description: 'Customized hearing exercises based on individual audiogram results', category: 'Ears & Hearing', type: 'exercise', categoryId: 'ears-hearing', tags: ['frequency', 'audiogram', 'hearing', 'training', 'customized'] },
  { id: 'speech-noise-exercise', title: 'Speech-in-Noise Enhancement', description: 'Progressive speech recognition training in challenging environments', category: 'Ears & Hearing', type: 'exercise', categoryId: 'ears-hearing', tags: ['speech', 'noise', 'recognition', 'progressive', 'acoustic'] },
  { id: 'auditory-memory-exercise', title: 'Auditory Memory Builder', description: 'Sequential sound memory games with increasing complexity', category: 'Ears & Hearing', type: 'exercise', categoryId: 'ears-hearing', tags: ['memory', 'auditory', 'sequential', 'complexity', 'patterns'] },
  { id: 'discrimination-exercise', title: 'Auditory Discrimination Challenge', description: 'Fine-tuned sound differentiation exercises for similar phonemes', category: 'Ears & Hearing', type: 'exercise', categoryId: 'ears-hearing', tags: ['discrimination', 'phonemes', 'differentiation', 'similar-sounds'] },
  { id: 'temporal-exercise', title: 'Temporal Processing Trainer', description: 'Exercises focusing on timing aspects of auditory processing', category: 'Ears & Hearing', type: 'exercise', categoryId: 'ears-hearing', tags: ['temporal', 'timing', 'processing', 'rhythm', 'sequence'] },
  { id: 'balance-exercise', title: 'Balance Integration Training', description: 'Multi-sensory balance challenges for vestibular rehabilitation', category: 'Ears & Hearing', type: 'exercise', categoryId: 'ears-hearing', tags: ['balance', 'vestibular', 'multi-sensory', 'rehabilitation', 'integration'] },

  // Mind & Cognition - Conditions
  { id: 'adhd', title: 'ADHD and Focus Disorders', description: 'Attention deficit and hyperactivity challenges affecting academic and occupational functioning', category: 'Mind & Cognition', type: 'condition', categoryId: 'mind-cognition', tags: ['attention', 'focus', 'hyperactivity', 'executive-function', 'cognitive'] },
  { id: 'memory-loss', title: 'Memory Loss and Mild Cognitive Impairment', description: 'Memory disorders ranging from mild age-related changes to severe daily functioning impairments', category: 'Mind & Cognition', type: 'condition', categoryId: 'mind-cognition', tags: ['memory', 'cognitive', 'recall', 'alzheimer', 'dementia'] },
  { id: 'learning-differences', title: 'Learning Differences (Dyslexia/Dyscalculia)', description: 'Specific academic skill impairments affecting reading, writing, and mathematical abilities', category: 'Mind & Cognition', type: 'condition', categoryId: 'mind-cognition', tags: ['dyslexia', 'dyscalculia', 'reading', 'math', 'learning'] },
  { id: 'autism-spectrum', title: 'Autism Spectrum Disorders', description: 'Social communication challenges and restricted, repetitive behaviors across multiple domains', category: 'Mind & Cognition', type: 'condition', categoryId: 'mind-cognition', tags: ['autism', 'social', 'communication', 'sensory', 'behavior'] },
  { id: 'executive-function-disorders', title: 'Executive Function Disorders', description: 'Planning, organization, time management, and goal-directed behavior difficulties', category: 'Mind & Cognition', type: 'condition', categoryId: 'mind-cognition', tags: ['planning', 'organization', 'executive', 'frontal-lobe', 'cognitive-control'] },

  // Mind & Cognition - Games
  { id: 'executive-function-suite', title: 'Executive Function Training Suite', description: 'Comprehensive cognitive training targeting working memory, cognitive flexibility, and inhibitory control', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['executive-function', 'working-memory', 'cognitive-flexibility', 'training'] },
  { id: 'attention-biofeedback', title: 'Attention Regulation Biofeedback', description: 'Real-time brain activity monitoring with neurofeedback training', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['attention', 'biofeedback', 'neurofeedback', 'self-regulation'] },
  { id: 'impulse-control-training', title: 'Impulse Control Training', description: 'Go/no-go tasks with increasing complexity and distractors', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['impulse-control', 'inhibition', 'self-control', 'reaction-time'] },
  { id: 'memory-enhancement', title: 'Multi-Modal Memory Enhancement', description: 'Memory training using visual, auditory, and kinesthetic modalities', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['memory', 'multi-modal', 'encoding', 'retrieval'] },
  { id: 'episodic-memory', title: 'Episodic Memory Reconstruction', description: 'Story-based memory exercises focusing on autobiographical memory', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['episodic-memory', 'autobiographical', 'narrative', 'temporal'] },
  { id: 'working-memory-bootcamp', title: 'Working Memory Bootcamp', description: 'Intensive working memory training with dual-task challenges', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['working-memory', 'dual-task', 'n-back', 'cognitive-load'] },
  { id: 'phonemic-awareness', title: 'Phonemic Awareness Builder', description: 'Systematic training in speech sound awareness and manipulation', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['phonemic-awareness', 'reading', 'speech-sounds', 'dyslexia'] },
  { id: 'morphological-training', title: 'Morphological Awareness Training', description: 'Word structure and meaning relationship exercises', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['morphology', 'vocabulary', 'word-structure', 'comprehension'] },
  { id: 'number-sense', title: 'Number Sense Development', description: 'Foundational number concept training with visual-spatial support', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['number-sense', 'math', 'dyscalculia', 'numerical-cognition'] },
  { id: 'math-fluency', title: 'Math Fact Fluency Builder', description: 'Systematic math fact practice with memory strategy training', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['math-facts', 'fluency', 'arithmetic', 'memory-strategies'] },
  { id: 'social-skills-simulator', title: 'Social Skills Training Simulator', description: 'Virtual reality social interaction training with immediate feedback', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['social-skills', 'virtual-reality', 'communication', 'autism'] },
  { id: 'sensory-integration', title: 'Sensory Integration Playground', description: 'Customizable sensory experiences for regulation and integration training', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['sensory-integration', 'self-regulation', 'sensory-processing'] },
  { id: 'theory-of-mind', title: 'Theory of Mind Development', description: 'Perspective-taking exercises and false belief understanding', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['theory-of-mind', 'perspective-taking', 'social-cognition', 'empathy'] },
  { id: 'strategic-planning', title: 'Strategic Planning Challenges', description: 'Complex multi-step problem-solving games requiring forward planning', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['strategic-planning', 'problem-solving', 'tower-tasks', 'forward-planning'] },
  { id: 'cognitive-flexibility', title: 'Cognitive Flexibility Training', description: 'Task-switching exercises with rule changes and adaptation requirements', category: 'Mind & Cognition', type: 'game', categoryId: 'mind-cognition', tags: ['cognitive-flexibility', 'task-switching', 'set-shifting', 'adaptation'] },

  // Mind & Cognition - Exercises  
  { id: 'working-memory-training', title: 'Working Memory Training', description: 'Exercises to improve short-term information retention and manipulation', category: 'Mind & Cognition', type: 'exercise', categoryId: 'mind-cognition', tags: ['working-memory', 'retention', 'manipulation', 'cognitive-training'] },
  { id: 'attention-focus-exercises', title: 'Attention Focus Exercises', description: 'Train sustained and selective attention abilities', category: 'Mind & Cognition', type: 'exercise', categoryId: 'mind-cognition', tags: ['attention', 'focus', 'sustained-attention', 'selective-attention'] },
  { id: 'cognitive-flexibility-exercise', title: 'Cognitive Flexibility Training', description: 'Improve ability to switch between tasks and mental sets', category: 'Mind & Cognition', type: 'exercise', categoryId: 'mind-cognition', tags: ['cognitive-flexibility', 'mental-sets', 'task-switching', 'adaptation'] },
  { id: 'executive-function-training', title: 'Executive Function Training', description: 'Comprehensive planning and organization skill development', category: 'Mind & Cognition', type: 'exercise', categoryId: 'mind-cognition', tags: ['executive-function', 'planning', 'organization', 'goal-setting'] },

  // Speech & Voice
  { id: 'stuttering', title: 'Stuttering', description: 'Speech fluency disorders affecting communication', category: 'Speech & Voice', type: 'condition', categoryId: 'speech-voice', tags: ['speech', 'fluency', 'communication'] },
  { id: 'delayed-speech', title: 'Delayed Speech Development', description: 'Late or slow speech and language development', category: 'Speech & Voice', type: 'condition', categoryId: 'speech-voice', tags: ['speech', 'development', 'language'] },
  { id: 'fluency-training', title: 'Fluency Shaping Trainer', description: 'Speech fluency improvement exercises', category: 'Speech & Voice', type: 'exercise', categoryId: 'speech-voice', tags: ['fluency', 'speech', 'training'] },

  // Motor & Movement
  { id: 'fine-motor-delay', title: 'Fine Motor Delay', description: 'Difficulties with small muscle movements', category: 'Motor & Movement', type: 'condition', categoryId: 'motor-movement', tags: ['motor', 'fine', 'coordination'] },
  { id: 'gross-motor-delay', title: 'Gross Motor Delay', description: 'Large muscle coordination difficulties', category: 'Motor & Movement', type: 'condition', categoryId: 'motor-movement', tags: ['motor', 'gross', 'coordination'] },
  { id: 'parkinsons', title: 'Parkinson\'s Disease', description: 'Progressive movement disorder with tremor', category: 'Motor & Movement', type: 'condition', categoryId: 'motor-movement', tags: ['movement', 'tremor', 'progressive'] },
  { id: 'precision-training', title: 'Dot-to-Dot Precision Master', description: 'Fine motor precision training', category: 'Motor & Movement', type: 'game', categoryId: 'motor-movement', tags: ['precision', 'fine-motor', 'training'] },

  // Touch & Sensory
  { id: 'tactile-sensitivity', title: 'Tactile Sensitivity', description: 'Over-responsiveness to touch sensations', category: 'Touch & Sensory', type: 'condition', categoryId: 'touch-sensory', tags: ['touch', 'sensitivity', 'sensory'] },
  { id: 'numbness', title: 'Reduced Touch Sensation', description: 'Decreased ability to detect touch', category: 'Touch & Sensory', type: 'condition', categoryId: 'touch-sensory', tags: ['touch', 'numbness', 'sensation'] },
  { id: 'texture-explorer', title: 'Gradual Texture Explorer', description: 'Progressive texture desensitization', category: 'Touch & Sensory', type: 'exercise', categoryId: 'touch-sensory', tags: ['texture', 'desensitization', 'gradual'] },

  // Speech & Voice - Conditions
  { id: 'stuttering', title: 'Stuttering and Fluency Disorders', description: 'Speech fluency disorders affecting communication flow and confidence', category: 'Speech & Voice', type: 'condition', categoryId: 'speech-voice', tags: ['speech', 'fluency', 'communication', 'stuttering'] },
  { id: 'delayed-speech', title: 'Delayed Speech and Language Development', description: 'Late or slow speech and language development in children', category: 'Speech & Voice', type: 'condition', categoryId: 'speech-voice', tags: ['speech', 'development', 'language', 'children'] },
  { id: 'articulation-disorders', title: 'Articulation and Phonological Disorders', description: 'Speech sound production and pattern difficulties affecting clarity', category: 'Speech & Voice', type: 'condition', categoryId: 'speech-voice', tags: ['articulation', 'speech', 'phonology', 'clarity'] },
  { id: 'voice-disorders', title: 'Voice Disorders', description: 'Vocal quality, pitch, or volume disorders impacting communication', category: 'Speech & Voice', type: 'condition', categoryId: 'speech-voice', tags: ['voice', 'vocal', 'pitch', 'volume'] },
  { id: 'aphasia', title: 'Aphasia and Acquired Language Disorders', description: 'Language difficulties following brain injury or neurological damage', category: 'Speech & Voice', type: 'condition', categoryId: 'speech-voice', tags: ['aphasia', 'language', 'brain-injury', 'stroke'] },

  // Speech & Voice - Games
  { id: 'fluency-shaping-trainer', title: 'Fluency Shaping Trainer', description: 'Interactive speech fluency training with real-time feedback', category: 'Speech & Voice', type: 'game', categoryId: 'speech-voice', tags: ['fluency', 'training', 'speech', 'feedback'] },
  { id: 'pronunciation-challenge', title: 'Pronunciation Challenge', description: 'Gamified articulation training with speech recognition', category: 'Speech & Voice', type: 'game', categoryId: 'speech-voice', tags: ['pronunciation', 'articulation', 'training', 'recognition'] },
  { id: 'voice-control-master', title: 'Voice Control Master', description: 'Vocal pitch and volume control challenges with visual feedback', category: 'Speech & Voice', type: 'game', categoryId: 'speech-voice', tags: ['voice', 'control', 'pitch', 'volume'] },
  { id: 'word-retrieval-quest', title: 'Word Retrieval Quest', description: 'Naming and word-finding exercises in engaging game formats', category: 'Speech & Voice', type: 'game', categoryId: 'speech-voice', tags: ['word-finding', 'naming', 'vocabulary', 'retrieval'] },

  // Speech & Voice - Exercises  
  { id: 'articulation-practice', title: 'Articulation Practice', description: 'Targeted speech sound production exercises with precision feedback', category: 'Speech & Voice', type: 'exercise', categoryId: 'speech-voice', tags: ['articulation', 'speech-sounds', 'practice', 'precision'] },
  { id: 'fluency-enhancement', title: 'Fluency Enhancement', description: 'Speech flow improvement exercises with rhythm and pacing control', category: 'Speech & Voice', type: 'exercise', categoryId: 'speech-voice', tags: ['fluency', 'rhythm', 'pacing', 'flow'] },
  { id: 'voice-optimization', title: 'Voice Optimization', description: 'Vocal quality, pitch, and volume control training exercises', category: 'Speech & Voice', type: 'exercise', categoryId: 'speech-voice', tags: ['voice', 'vocal-quality', 'training', 'optimization'] },
  { id: 'language-recovery', title: 'Language Recovery', description: 'Comprehensive language rehabilitation for acquired disorders', category: 'Speech & Voice', type: 'exercise', categoryId: 'speech-voice', tags: ['language', 'recovery', 'rehabilitation', 'aphasia'] },

  // Motor & Movement
  { id: 'fine-motor-delay', title: 'Fine Motor Delay', description: 'Difficulties with small muscle movements and precision tasks', category: 'Motor & Movement', type: 'condition', categoryId: 'motor-movement', tags: ['motor', 'fine', 'coordination'] },
  { id: 'gross-motor-delay', title: 'Gross Motor Delay', description: 'Large muscle coordination difficulties affecting mobility', category: 'Motor & Movement', type: 'condition', categoryId: 'motor-movement', tags: ['motor', 'gross', 'coordination'] },
  { id: 'parkinsons', title: 'Parkinson\'s Disease', description: 'Progressive movement disorder with tremor and rigidity', category: 'Motor & Movement', type: 'condition', categoryId: 'motor-movement', tags: ['movement', 'tremor', 'progressive'] },
  { id: 'stroke-rehabilitation', title: 'Stroke Rehabilitation', description: 'Motor recovery after stroke with neuroplasticity training', category: 'Motor & Movement', type: 'condition', categoryId: 'motor-movement', tags: ['stroke', 'rehabilitation', 'neuroplasticity'] },
  { id: 'cerebral-palsy', title: 'Cerebral Palsy (Mild to Moderate)', description: 'Movement disorders from early brain damage', category: 'Motor & Movement', type: 'condition', categoryId: 'motor-movement', tags: ['cerebral', 'palsy', 'movement'] },
  { id: 'precision-training', title: 'Dot-to-Dot Precision Master', description: 'Fine motor precision training with progressive difficulty', category: 'Motor & Movement', type: 'game', categoryId: 'motor-movement', tags: ['precision', 'fine-motor', 'training'] },
  { id: 'motion-sports', title: 'Motion-Tracked Sports Academy', description: 'Full-body virtual sports training with motion capture', category: 'Motor & Movement', type: 'game', categoryId: 'motor-movement', tags: ['sports', 'motion', 'gross-motor'] },
  { id: 'tremor-compensation', title: 'Tremor Compensation Navigator', description: 'Adaptive movement training for tremor disorders', category: 'Motor & Movement', type: 'game', categoryId: 'motor-movement', tags: ['tremor', 'compensation', 'adaptive'] },
  { id: 'digital-finger-gym', title: 'Digital Finger Gym', description: 'Virtual resistance training for finger strength', category: 'Motor & Movement', type: 'exercise', categoryId: 'motor-movement', tags: ['finger', 'strength', 'resistance'] },
  { id: 'balance-training', title: 'Balance Mastery Training', description: 'Progressive balance training with stability feedback', category: 'Motor & Movement', type: 'exercise', categoryId: 'motor-movement', tags: ['balance', 'stability', 'feedback'] },
  { id: 'voice-movement-sync', title: 'Voice-Movement Synchronization', description: 'Combined speech and movement therapy training', category: 'Motor & Movement', type: 'exercise', categoryId: 'motor-movement', tags: ['voice', 'movement', 'synchronization'] },

  // Touch & Sensory - Conditions
  { id: 'tactile-sensitivity', title: 'Tactile Sensitivity (Autism, SPD)', description: 'Over-responsiveness to touch sensations causing discomfort', category: 'Touch & Sensory', type: 'condition', categoryId: 'touch-sensory', tags: ['touch', 'sensitivity', 'autism', 'spd', 'sensory'] },
  { id: 'reduced-touch-sensation', title: 'Numbness or Reduced Touch Sensation', description: 'Decreased ability to detect touch, pressure, or texture', category: 'Touch & Sensory', type: 'condition', categoryId: 'touch-sensory', tags: ['numbness', 'neuropathy', 'sensation', 'nerve'] },
  { id: 'over-responsive-sensory', title: 'Over-responsive Sensory Profiles', description: 'Heightened reactions to sensory input causing avoidance', category: 'Touch & Sensory', type: 'condition', categoryId: 'touch-sensory', tags: ['over-responsive', 'sensory', 'avoidance', 'anxiety'] },

  // Touch & Sensory - Games
  { id: 'gradual-texture-explorer', title: 'Gradual Texture Explorer', description: 'Progressive texture desensitization with haptic feedback', category: 'Touch & Sensory', type: 'game', categoryId: 'touch-sensory', tags: ['texture', 'desensitization', 'progressive', 'haptic'] },
  { id: 'sensory-detective', title: 'Sensory Detective Adventure', description: 'Mystery-solving game with controlled tactile exploration', category: 'Touch & Sensory', type: 'game', categoryId: 'touch-sensory', tags: ['mystery', 'tactile', 'exploration', 'adventure'] },
  { id: 'enhanced-feedback-amplifier', title: 'Enhanced Feedback Amplifier', description: 'Touch detection training with amplified sensory feedback', category: 'Touch & Sensory', type: 'game', categoryId: 'touch-sensory', tags: ['feedback', 'amplified', 'detection', 'vibration'] },
  { id: 'texture-detective-challenge', title: 'Texture Detective Challenge', description: 'Tactile discrimination training with enhanced feedback', category: 'Touch & Sensory', type: 'game', categoryId: 'touch-sensory', tags: ['texture', 'discrimination', 'enhanced', 'feedback'] },
  { id: 'sensory-tolerance-builder', title: 'Sensory Tolerance Builder', description: 'Graduated exposure therapy with user-controlled intensity', category: 'Touch & Sensory', type: 'game', categoryId: 'touch-sensory', tags: ['tolerance', 'exposure', 'graduated', 'controlled'] },
  { id: 'self-regulation-mastery', title: 'Self-Regulation Mastery', description: 'Interactive sensory self-regulation and coping training', category: 'Touch & Sensory', type: 'game', categoryId: 'touch-sensory', tags: ['self-regulation', 'coping', 'breathing', 'awareness'] },
  { id: 'texture-memory-game', title: 'Texture Memory Game', description: 'Remember and match different tactile sensations', category: 'Touch & Sensory', type: 'game', categoryId: 'touch-sensory', tags: ['memory', 'texture', 'tactile', 'matching'] },
  { id: 'sensory-obstacle-course', title: 'Sensory Obstacle Course', description: 'Navigate virtual environments with tactile challenges', category: 'Touch & Sensory', type: 'game', categoryId: 'touch-sensory', tags: ['obstacle', 'navigation', 'virtual', 'challenges'] },
  { id: 'multi-sensory-integration', title: 'Multi-Sensory Integration Quest', description: 'Complex challenges requiring multiple sensory coordination', category: 'Touch & Sensory', type: 'game', categoryId: 'touch-sensory', tags: ['multi-sensory', 'integration', 'coordination', 'complex'] },

  // Touch & Sensory - Exercises  
  { id: 'sensory-diet-planner', title: 'Sensory Diet Planner', description: 'Personalized sensory activity scheduling system', category: 'Touch & Sensory', type: 'exercise', categoryId: 'touch-sensory', tags: ['sensory-diet', 'scheduling', 'personalized', 'activities'] },
  { id: 'tactile-discrimination-training', title: 'Tactile Discrimination Training', description: 'Progressive texture and material identification exercises', category: 'Touch & Sensory', type: 'exercise', categoryId: 'touch-sensory', tags: ['discrimination', 'texture', 'identification', 'progressive'] },
  { id: 'sensory-integration-challenges', title: 'Sensory Integration Challenges', description: 'Multi-sensory processing and regulation activities', category: 'Touch & Sensory', type: 'exercise', categoryId: 'touch-sensory', tags: ['integration', 'processing', 'regulation', 'multi-sensory'] },

  // Breathing & Respiratory
  { id: 'asthma', title: 'Asthma Management', description: 'Chronic respiratory condition with airway inflammation and bronchospasm', category: 'Breathing & Respiratory', type: 'condition', categoryId: 'breathing-respiratory', tags: ['breathing', 'asthma', 'airways', 'chronic'] },
  { id: 'copd', title: 'COPD / Shallow Breathing', description: 'Progressive airflow limitation affecting breathing efficiency', category: 'Breathing & Respiratory', type: 'condition', categoryId: 'breathing-respiratory', tags: ['breathing', 'copd', 'shallow', 'efficiency'] },
  { id: 'anxiety-breathing', title: 'Anxiety-Related Breathing Irregularities', description: 'Breathing disorders caused by anxiety and stress responses', category: 'Breathing & Respiratory', type: 'condition', categoryId: 'breathing-respiratory', tags: ['breathing', 'anxiety', 'stress', 'hyperventilation'] },
  { id: 'breath-adventure', title: 'Breath-Powered Adventure', description: 'Action-adventure game using breathing techniques for character control', category: 'Breathing & Respiratory', type: 'game', categoryId: 'breathing-respiratory', tags: ['breathing', 'adventure', 'control', 'techniques'] },
  { id: 'rhythm-breathing', title: 'Respiratory Rhythm Master', description: 'Music-based breathing game teaching optimal breathing patterns', category: 'Breathing & Respiratory', type: 'game', categoryId: 'breathing-respiratory', tags: ['breathing', 'rhythm', 'music', 'patterns'] },
  { id: 'peak-flow', title: 'Peak Flow Training System', description: 'Interactive peak flow monitoring with gamified tracking', category: 'Breathing & Respiratory', type: 'game', categoryId: 'breathing-respiratory', tags: ['breathing', 'peak-flow', 'monitoring', 'asthma'] },
  { id: 'oxygen-challenge', title: 'Oxygen Efficiency Challenge', description: 'Strategy game optimizing breathing efficiency for task completion', category: 'Breathing & Respiratory', type: 'game', categoryId: 'breathing-respiratory', tags: ['breathing', 'oxygen', 'efficiency', 'strategy'] },
  { id: 'calm-journey', title: 'Calm Breathing Journey', description: 'Meditative game using breathing techniques in calming environments', category: 'Breathing & Respiratory', type: 'game', categoryId: 'breathing-respiratory', tags: ['breathing', 'calm', 'meditation', 'anxiety'] },
  { id: 'diaphragmatic-breathing', title: 'Diaphragmatic Breathing', description: 'Master proper diaphragmatic breathing technique for improved oxygen efficiency', category: 'Breathing & Respiratory', type: 'exercise', categoryId: 'breathing-respiratory', tags: ['breathing', 'diaphragm', 'technique', 'oxygen'] },
  { id: 'pursed-lip', title: 'Pursed Lip Breathing', description: 'Practice controlled exhalation techniques for better airway pressure', category: 'Breathing & Respiratory', type: 'exercise', categoryId: 'breathing-respiratory', tags: ['breathing', 'exhalation', 'control', 'pressure'] },
  { id: 'breathing-patterns', title: 'Breathing Pattern Training', description: 'Advanced breathing rhythm exercises for respiratory muscle coordination', category: 'Breathing & Respiratory', type: 'exercise', categoryId: 'breathing-respiratory', tags: ['breathing', 'patterns', 'rhythm', 'coordination'] },
  { id: '4-7-8-protocol', title: '4-7-8 Breathing Protocol', description: 'Structured breathing exercise for anxiety reduction and sleep improvement', category: 'Breathing & Respiratory', type: 'exercise', categoryId: 'breathing-respiratory', tags: ['breathing', 'anxiety', 'sleep', 'protocol'] },
  { id: 'diaphragmatic-trainer', title: 'Diaphragmatic Breathing Trainer', description: 'Visual biofeedback system for proper diaphragmatic breathing technique', category: 'Breathing & Respiratory', type: 'exercise', categoryId: 'breathing-respiratory', tags: ['breathing', 'diaphragm', 'biofeedback', 'training'] },

  // Posture & Balance
  { id: 'vestibular-disorders', title: 'Vestibular Disorders', description: 'Inner ear balance disorders causing dizziness and vertigo', category: 'Posture & Balance', type: 'condition', categoryId: 'posture-balance', tags: ['balance', 'vertigo', 'dizziness', 'inner ear'] },
  { id: 'postural-deviations', title: 'Postural Deviations (Kyphosis, Scoliosis)', description: 'Abnormal spinal curvatures affecting mobility and breathing', category: 'Posture & Balance', type: 'condition', categoryId: 'posture-balance', tags: ['posture', 'spine', 'scoliosis', 'kyphosis'] },
  { id: 'elderly-balance', title: 'Elderly Balance Issues', description: 'Age-related balance decline increasing fall risk', category: 'Posture & Balance', type: 'condition', categoryId: 'posture-balance', tags: ['elderly', 'falls', 'aging', 'independence'] },
  { id: 'balance-reaction-training', title: 'Balance Reaction Training', description: 'Dynamic balance challenge using motion sensors', category: 'Posture & Balance', type: 'game', categoryId: 'posture-balance', tags: ['balance', 'reaction', 'sensors', 'vestibular'] },
  { id: 'posture-perfect-challenge', title: 'Posture Perfect Challenge', description: 'Real-time posture monitoring with camera feedback', category: 'Posture & Balance', type: 'game', categoryId: 'posture-balance', tags: ['posture', 'monitoring', 'camera', 'feedback'] },
  { id: 'gentle-stability-training', title: 'Gentle Stability Training', description: 'Low-risk balance games for elderly users', category: 'Posture & Balance', type: 'game', categoryId: 'posture-balance', tags: ['stability', 'elderly', 'safe', 'balance'] },
  { id: 'vestibular-rehabilitation', title: 'Vestibular Rehabilitation Protocol', description: 'Systematic habituation and adaptation exercises', category: 'Posture & Balance', type: 'exercise', categoryId: 'posture-balance', tags: ['vestibular', 'rehabilitation', 'habituation', 'adaptation'] },
  { id: 'spinal-alignment-training', title: 'Spinal Alignment Training', description: 'Postural muscle strengthening and spinal mobility', category: 'Posture & Balance', type: 'exercise', categoryId: 'posture-balance', tags: ['spinal', 'alignment', 'posture', 'strengthening'] },
  { id: 'fall-prevention-program', title: 'Fall Prevention Exercise Program', description: 'Evidence-based strength, balance, and flexibility training', category: 'Posture & Balance', type: 'exercise', categoryId: 'posture-balance', tags: ['fall prevention', 'elderly', 'strength', 'flexibility'] },

  // Neurological Disorders
  { id: 'multiple-sclerosis', title: 'Multiple Sclerosis (MS)', description: 'Chronic autoimmune disease affecting myelin sheath', category: 'Neurological Disorders', type: 'condition', categoryId: 'neurological-disorders', tags: ['autoimmune', 'myelin', 'fatigue', 'cognitive'] },
  { id: 'stroke-recovery', title: 'Stroke Recovery', description: 'Rehabilitation following brain blood supply interruption', category: 'Neurological Disorders', type: 'condition', categoryId: 'neurological-disorders', tags: ['stroke', 'recovery', 'rehabilitation', 'neuroplasticity'] },
  { id: 'epilepsy', title: 'Epilepsy', description: 'Neurological disorder with recurrent seizures', category: 'Neurological Disorders', type: 'condition', categoryId: 'neurological-disorders', tags: ['seizures', 'epilepsy', 'neurological', 'brain'] },
  { id: 'brain-injury-tbi', title: 'Brain Injury Recovery (TBI)', description: 'Traumatic brain injury rehabilitation and recovery', category: 'Neurological Disorders', type: 'condition', categoryId: 'neurological-disorders', tags: ['tbi', 'brain-injury', 'trauma', 'rehabilitation'] },

  // Games
  { id: 'brain-stimulation-puzzles', title: 'Gentle Brain-Stimulation Puzzles', description: 'Adaptive cognitive games for MS-related challenges', category: 'Neurological Disorders', type: 'game', categoryId: 'neurological-disorders', tags: ['cognitive', 'adaptive', 'fatigue-aware', 'puzzles'] },
  { id: 'fatigue-aware-memory', title: 'Fatigue-Aware Memory Games', description: 'Short-burst memory exercises for cognitive preservation', category: 'Neurological Disorders', type: 'game', categoryId: 'neurological-disorders', tags: ['memory', 'fatigue', 'short-burst', 'cognitive'] },
  { id: 'reaction-recovery-games', title: 'Reaction Time Recovery Games', description: 'Progressive reaction-based activities for stroke recovery', category: 'Neurological Disorders', type: 'game', categoryId: 'neurological-disorders', tags: ['reaction-time', 'stroke', 'recovery', 'progressive'] },
  { id: 'attention-restoration', title: 'Attention Restoration Games', description: 'Divided attention tasks for cognitive rehabilitation', category: 'Neurological Disorders', type: 'game', categoryId: 'neurological-disorders', tags: ['attention', 'divided-attention', 'cognitive', 'rehabilitation'] },
  { id: 'non-flashing-puzzles', title: 'Non-Flashing Puzzle Games', description: 'Seizure-safe cognitive puzzles with static visuals', category: 'Neurological Disorders', type: 'game', categoryId: 'neurological-disorders', tags: ['seizure-safe', 'static', 'puzzles', 'epilepsy'] },
  { id: 'stress-reduction-brain', title: 'Stress-Reduction Brain Games', description: 'Calming logic puzzles to reduce seizure triggers', category: 'Neurological Disorders', type: 'game', categoryId: 'neurological-disorders', tags: ['stress-reduction', 'calming', 'seizure-prevention', 'logic'] },
  { id: 'motor-cognitive-multitask', title: 'Simplified Motor-Cognitive Multitaskers', description: 'Combined motor and cognitive challenges for TBI recovery', category: 'Neurological Disorders', type: 'game', categoryId: 'neurological-disorders', tags: ['motor-cognitive', 'multitask', 'tbi', 'brain-injury'] },
  { id: 'attention-reconstruction', title: 'Attention Reconstruction Games', description: 'Hierarchical attention training for brain injury recovery', category: 'Neurological Disorders', type: 'game', categoryId: 'neurological-disorders', tags: ['attention', 'hierarchical', 'brain-injury', 'reconstruction'] },

  // Exercises
  { id: 'fatigue-management', title: 'Fatigue Management Training', description: 'Energy conservation and pacing strategies', category: 'Neurological Disorders', type: 'exercise', categoryId: 'neurological-disorders', tags: ['fatigue', 'energy', 'pacing', 'management'] },
  { id: 'cognitive-rehabilitation', title: 'Cognitive Rehabilitation Exercises', description: 'Structured protocols for specific cognitive domains', category: 'Neurological Disorders', type: 'exercise', categoryId: 'neurological-disorders', tags: ['cognitive', 'rehabilitation', 'structured', 'domains'] },
  { id: 'dual-task-training', title: 'Dual-Task Training', description: 'Combined cognitive-motor exercises for real-world demands', category: 'Neurological Disorders', type: 'exercise', categoryId: 'neurological-disorders', tags: ['dual-task', 'cognitive-motor', 'real-world', 'functional'] },
  { id: 'cognitive-flexibility', title: 'Cognitive Flexibility Training', description: 'Executive function and attention switching exercises', category: 'Neurological Disorders', type: 'exercise', categoryId: 'neurological-disorders', tags: ['cognitive-flexibility', 'executive', 'attention-switching', 'mental'] },
  { id: 'executive-function-training', title: 'Executive Function Training', description: 'Planning, problem-solving, and working memory exercises', category: 'Neurological Disorders', type: 'exercise', categoryId: 'neurological-disorders', tags: ['executive-function', 'planning', 'problem-solving', 'working-memory'] },
  { id: 'seizure-management', title: 'Seizure Management Training', description: 'Recognition, safety protocols, and emergency procedures', category: 'Neurological Disorders', type: 'exercise', categoryId: 'neurological-disorders', tags: ['seizure', 'management', 'safety', 'emergency'] },
  { id: 'trigger-identification', title: 'Trigger Identification Training', description: 'Systematic tracking of potential seizure triggers', category: 'Neurological Disorders', type: 'exercise', categoryId: 'neurological-disorders', tags: ['trigger', 'identification', 'tracking', 'seizure-prevention'] },
  { id: 'cognitive-reconstruction', title: 'Cognitive Reconstruction Exercises', description: 'Evidence-based techniques for rebuilding cognitive skills', category: 'Neurological Disorders', type: 'exercise', categoryId: 'neurological-disorders', tags: ['cognitive', 'reconstruction', 'evidence-based', 'rebuilding'] },

  // Pain Management
  { id: 'chronic-back-pain', title: 'Chronic Back Pain', description: 'Persistent back pain lasting more than three months affecting quality of life', category: 'Pain Management', type: 'condition', categoryId: 'pain-management', tags: ['pain', 'back', 'chronic', 'mobility'] },
  { id: 'migraine', title: 'Migraine', description: 'Complex neurological condition with recurrent headaches and sensory sensitivity', category: 'Pain Management', type: 'condition', categoryId: 'pain-management', tags: ['headache', 'neurological', 'sensitivity', 'triggers'] },
  { id: 'fibromyalgia', title: 'Fibromyalgia', description: 'Widespread musculoskeletal pain with fatigue and tender points', category: 'Pain Management', type: 'condition', categoryId: 'pain-management', tags: ['pain', 'fatigue', 'fibro', 'widespread'] },
  { id: 'phantom-limb-pain', title: 'Phantom Limb Pain', description: 'Pain sensations in amputated limbs requiring specialized treatment', category: 'Pain Management', type: 'condition', categoryId: 'pain-management', tags: ['phantom', 'amputation', 'limb', 'neurological'] },

  { id: 'mindfulness-breathing-games', title: 'Mindfulness & Breathing Games', description: 'Interactive meditation and breathing exercises with visual feedback', category: 'Pain Management', type: 'game', categoryId: 'pain-management', tags: ['mindfulness', 'breathing', 'meditation', 'relaxation'] },
  { id: 'posture-awareness-games', title: 'Posture Awareness Games', description: 'Educational games teaching proper body mechanics and posture', category: 'Pain Management', type: 'game', categoryId: 'pain-management', tags: ['posture', 'body-mechanics', 'education', 'prevention'] },
  { id: 'low-light-relaxation', title: 'Low-Light Relaxation Games', description: 'Gentle games designed for migraine episodes with minimal visual stimulation', category: 'Pain Management', type: 'game', categoryId: 'pain-management', tags: ['migraine', 'low-light', 'relaxation', 'gentle'] },
  { id: 'trigger-tracking-games', title: 'Trigger Tracking Games', description: 'Gamified journaling system for identifying migraine triggers and patterns', category: 'Pain Management', type: 'game', categoryId: 'pain-management', tags: ['tracking', 'triggers', 'patterns', 'prevention'] },
  { id: 'distraction-pain-relief', title: 'Distraction-based Pain Relief Games', description: 'Engaging puzzles and activities to redirect attention from pain', category: 'Pain Management', type: 'game', categoryId: 'pain-management', tags: ['distraction', 'puzzles', 'attention', 'engagement'] },
  { id: 'energy-management-games', title: 'Energy Management Games', description: 'Interactive tools for learning pacing and energy conservation', category: 'Pain Management', type: 'game', categoryId: 'pain-management', tags: ['energy', 'pacing', 'conservation', 'fibromyalgia'] },
  { id: 'mirror-therapy-simulation', title: 'Mirror Therapy Simulation', description: 'Virtual mirror therapy creating illusion of limb presence and movement', category: 'Pain Management', type: 'game', categoryId: 'pain-management', tags: ['mirror-therapy', 'phantom-limb', 'virtual', 'rehabilitation'] },
  { id: 'virtual-limb-rehabilitation', title: 'Virtual Limb Rehabilitation', description: 'VR experiences for controlling and interacting with virtual prosthetic limbs', category: 'Pain Management', type: 'game', categoryId: 'pain-management', tags: ['virtual-reality', 'prosthetic', 'rehabilitation', 'adaptation'] },

  { id: 'gentle-movement-therapy', title: 'Gentle Movement Therapy', description: 'Guided exercises focusing on core strengthening and safe movement patterns', category: 'Pain Management', type: 'exercise', categoryId: 'pain-management', tags: ['movement', 'strengthening', 'flexibility', 'gentle'] },
  { id: 'pain-education-modules', title: 'Pain Education Modules', description: 'Interactive learning about pain science and management strategies', category: 'Pain Management', type: 'exercise', categoryId: 'pain-management', tags: ['education', 'pain-science', 'self-management', 'learning'] },
  { id: 'migraine-prevention-exercises', title: 'Migraine Prevention Exercises', description: 'Relaxation and stress reduction techniques to reduce migraine frequency', category: 'Pain Management', type: 'exercise', categoryId: 'pain-management', tags: ['migraine', 'prevention', 'relaxation', 'stress-reduction'] },
  { id: 'biofeedback-training', title: 'Biofeedback Training', description: 'Self-regulation training with real-time physiological feedback', category: 'Pain Management', type: 'exercise', categoryId: 'pain-management', tags: ['biofeedback', 'self-regulation', 'physiological', 'control'] },
  { id: 'phantom-limb-rehabilitation', title: 'Phantom Limb Rehabilitation', description: 'Mirror therapy, visualization, and sensory retraining techniques', category: 'Pain Management', type: 'exercise', categoryId: 'pain-management', tags: ['phantom-limb', 'mirror-therapy', 'visualization', 'sensory'] },
  { id: 'sensory-discrimination-training', title: 'Sensory Discrimination Training', description: 'Retraining sensory processing to reduce abnormal phantom sensations', category: 'Pain Management', type: 'exercise', categoryId: 'pain-management', tags: ['sensory', 'discrimination', 'phantom', 'retraining'] },

  // Chronic Illness Support
  { id: 'diabetes', title: 'Diabetes Management', description: 'Metabolic disorder requiring blood glucose management', category: 'Chronic Illness Support', type: 'condition', categoryId: 'chronic-illness', tags: ['diabetes', 'glucose', 'insulin', 'metabolic'] },
  { id: 'hypertension', title: 'Hypertension Management', description: 'High blood pressure requiring lifestyle and medical management', category: 'Chronic Illness Support', type: 'condition', categoryId: 'chronic-illness', tags: ['blood pressure', 'hypertension', 'cardiovascular', 'heart'] },
  { id: 'arthritis', title: 'Arthritis Management', description: 'Joint conditions affecting mobility and causing pain', category: 'Chronic Illness Support', type: 'condition', categoryId: 'chronic-illness', tags: ['arthritis', 'joints', 'pain', 'mobility', 'inflammation'] },

  { id: 'stress-relief-puzzles', title: 'Stress Relief Puzzle Games', description: 'Calming cognitive games for stress reduction', category: 'Chronic Illness Support', type: 'game', categoryId: 'chronic-illness', tags: ['stress', 'relaxation', 'puzzles', 'mindfulness'] },
  { id: 'glucose-pattern-games', title: 'Glucose Pattern Recognition Games', description: 'Educational games for blood glucose monitoring skills', category: 'Chronic Illness Support', type: 'game', categoryId: 'chronic-illness', tags: ['diabetes', 'glucose', 'pattern', 'monitoring'] },
  { id: 'bp-calming-games', title: 'Blood Pressure Calming Games', description: 'Relaxation games with breathing exercises', category: 'Chronic Illness Support', type: 'game', categoryId: 'chronic-illness', tags: ['blood pressure', 'breathing', 'relaxation', 'calm'] },
  { id: 'heart-health-games', title: 'Heart Health Education Games', description: 'Interactive learning about cardiovascular health', category: 'Chronic Illness Support', type: 'game', categoryId: 'chronic-illness', tags: ['heart', 'cardiovascular', 'education', 'health'] },
  { id: 'finger-movement-games', title: 'Gentle Finger Movement Games', description: 'Low-impact joint mobility games', category: 'Chronic Illness Support', type: 'game', categoryId: 'chronic-illness', tags: ['arthritis', 'joints', 'mobility', 'gentle'] },
  { id: 'joint-protection-games', title: 'Joint Protection Education Games', description: 'Learning games for joint protection techniques', category: 'Chronic Illness Support', type: 'game', categoryId: 'chronic-illness', tags: ['arthritis', 'joint protection', 'education', 'prevention'] },

  { id: 'diabetes-training', title: 'Diabetes Self-Management Training', description: 'Comprehensive diabetes self-care education', category: 'Chronic Illness Support', type: 'exercise', categoryId: 'chronic-illness', tags: ['diabetes', 'self-management', 'education', 'training'] },
  { id: 'hypertension-exercises', title: 'Hypertension Management Exercises', description: 'Stress reduction and lifestyle modification programs', category: 'Chronic Illness Support', type: 'exercise', categoryId: 'chronic-illness', tags: ['hypertension', 'stress reduction', 'lifestyle', 'management'] },
  { id: 'joint-mobility', title: 'Joint Mobility Exercises', description: 'Gentle exercises for arthritic joints', category: 'Chronic Illness Support', type: 'exercise', categoryId: 'chronic-illness', tags: ['arthritis', 'mobility', 'exercise', 'joints'] },
  { id: 'lifestyle-modification', title: 'Lifestyle Modification Training', description: 'Programs for sustainable lifestyle changes', category: 'Chronic Illness Support', type: 'exercise', categoryId: 'chronic-illness', tags: ['lifestyle', 'behavior change', 'habits', 'modification'] },
  { id: 'medication-adherence', title: 'Medication Adherence Training', description: 'Interactive programs for medication compliance', category: 'Chronic Illness Support', type: 'exercise', categoryId: 'chronic-illness', tags: ['medication', 'adherence', 'compliance', 'treatment'] },
  { id: 'pain-management', title: 'Pain and Inflammation Management', description: 'Comprehensive pain management strategies', category: 'Chronic Illness Support', type: 'exercise', categoryId: 'chronic-illness', tags: ['pain', 'inflammation', 'management', 'arthritis'] },

  // Emotional & Behavioral Health
  { id: 'anxiety-depression', title: 'Anxiety & Depression', description: 'Common mental health conditions involving excessive worry and persistent sadness', category: 'Emotional & Behavioral Health', type: 'condition', categoryId: 'emotional-behavioral', tags: ['anxiety', 'depression', 'mental-health', 'mood'] },
  { id: 'stress-management', title: 'Stress Management', description: 'Chronic stress from prolonged exposure exceeding coping resources', category: 'Emotional & Behavioral Health', type: 'condition', categoryId: 'emotional-behavioral', tags: ['stress', 'coping', 'relaxation', 'management'] },
  { id: 'sleep-disorders', title: 'Sleep Disorders', description: 'Conditions affecting sleep quality, timing, and duration', category: 'Emotional & Behavioral Health', type: 'condition', categoryId: 'emotional-behavioral', tags: ['sleep', 'insomnia', 'rest', 'circadian'] },
  { id: 'social-anxiety', title: 'Social Anxiety', description: 'Intense fear of social situations due to concerns about judgment', category: 'Emotional & Behavioral Health', type: 'condition', categoryId: 'emotional-behavioral', tags: ['social', 'anxiety', 'fear', 'interaction'] },
  { id: 'mood-tracking-games', title: 'Mood Tracking Games', description: 'Interactive mood monitoring with pattern recognition', category: 'Emotional & Behavioral Health', type: 'game', categoryId: 'emotional-behavioral', tags: ['mood', 'tracking', 'awareness', 'patterns'] },
  { id: 'anxiety-coping-games', title: 'Anxiety Coping Games', description: 'Interactive games teaching anxiety management strategies', category: 'Emotional & Behavioral Health', type: 'game', categoryId: 'emotional-behavioral', tags: ['anxiety', 'coping', 'breathing', 'grounding'] },
  { id: 'cognitive-restructuring-games', title: 'Cognitive Restructuring Games', description: 'Games to identify and challenge negative thought patterns', category: 'Emotional & Behavioral Health', type: 'game', categoryId: 'emotional-behavioral', tags: ['cognitive', 'thoughts', 'negative', 'restructuring'] },
  { id: 'stress-relief-games', title: 'Stress Relief Mini-Games', description: 'Quick games providing immediate stress relief', category: 'Emotional & Behavioral Health', type: 'game', categoryId: 'emotional-behavioral', tags: ['stress', 'relief', 'quick', 'relaxation'] },
  { id: 'time-management-games', title: 'Time Management Games', description: 'Interactive games teaching prioritization and organizational skills', category: 'Emotional & Behavioral Health', type: 'game', categoryId: 'emotional-behavioral', tags: ['time', 'management', 'organization', 'prioritization'] },
  { id: 'sleep-hygiene-games', title: 'Sleep Hygiene Games', description: 'Interactive education about sleep hygiene with gamified routines', category: 'Emotional & Behavioral Health', type: 'game', categoryId: 'emotional-behavioral', tags: ['sleep', 'hygiene', 'routine', 'habits'] },
  { id: 'bedtime-relaxation-games', title: 'Bedtime Relaxation Games', description: 'Calming games designed for pre-sleep use', category: 'Emotional & Behavioral Health', type: 'game', categoryId: 'emotional-behavioral', tags: ['bedtime', 'relaxation', 'sleep', 'calming'] },
  { id: 'virtual-social-practice', title: 'Virtual Social Practice Games', description: 'Safe virtual environments for practicing social interactions', category: 'Emotional & Behavioral Health', type: 'game', categoryId: 'emotional-behavioral', tags: ['social', 'practice', 'virtual', 'confidence'] },
  { id: 'social-skills-training-games', title: 'Social Skills Training Games', description: 'Interactive games teaching social communication skills', category: 'Emotional & Behavioral Health', type: 'game', categoryId: 'emotional-behavioral', tags: ['social', 'skills', 'communication', 'training'] },
  { id: 'cbt-exercises', title: 'Cognitive Behavioral Therapy Exercises', description: 'Structured CBT protocols with thought challenging and behavioral activation', category: 'Emotional & Behavioral Health', type: 'exercise', categoryId: 'emotional-behavioral', tags: ['cbt', 'cognitive', 'behavioral', 'therapy'] },
  { id: 'mindfulness-interventions', title: 'Mindfulness-Based Interventions', description: 'Progressive mindfulness exercises and meditation practices', category: 'Emotional & Behavioral Health', type: 'exercise', categoryId: 'emotional-behavioral', tags: ['mindfulness', 'meditation', 'awareness', 'present'] },
  { id: 'stress-management-training', title: 'Stress Management Training', description: 'Training modules on relaxation techniques and cognitive strategies', category: 'Emotional & Behavioral Health', type: 'exercise', categoryId: 'emotional-behavioral', tags: ['stress', 'management', 'relaxation', 'techniques'] },
  { id: 'resilience-building', title: 'Resilience Building Exercises', description: 'Exercises focusing on cognitive flexibility and adaptive coping', category: 'Emotional & Behavioral Health', type: 'exercise', categoryId: 'emotional-behavioral', tags: ['resilience', 'coping', 'flexibility', 'adaptation'] },
  { id: 'sleep-improvement', title: 'Sleep Improvement Exercises', description: 'Progressive muscle relaxation and breathing exercises for better sleep', category: 'Emotional & Behavioral Health', type: 'exercise', categoryId: 'emotional-behavioral', tags: ['sleep', 'improvement', 'relaxation', 'breathing'] },
  { id: 'social-skills-training', title: 'Social Skills Training', description: 'Progressive skill-building for conversation and nonverbal communication', category: 'Emotional & Behavioral Health', type: 'exercise', categoryId: 'emotional-behavioral', tags: ['social', 'skills', 'conversation', 'communication'] }

];

const fuse = new Fuse(searchData, {
  keys: ['title', 'description', 'category', 'tags'],
  threshold: 0.4,
  includeScore: true,
});

interface SearchBarProps {
  onClose?: () => void;
}

export function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Array<{ item: SearchItem; refIndex: number; score?: number }>>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filterOptions = ['condition', 'game', 'exercise'];

  useEffect(() => {
    if (query.length > 1) {
      let searchResults = fuse.search(query);

      if (selectedFilters.length > 0) {
        searchResults = searchResults.filter(result =>
          selectedFilters.includes(result.item.type)
        );
      }

      setResults(searchResults.slice(0, 10));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, selectedFilters]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    setSelectedFilters([]);
    onClose?.();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'condition': return '🏥';
      case 'game': return '🎮';
      case 'exercise': return '💪';
      default: return '📋';
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search conditions, games, or exercises..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10 h-12 text-base"
          onFocus={() => query.length > 1 && setIsOpen(true)}
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Results */}
      {isOpen && results.length > 0 && (
        <Card className="absolute top-full mt-2 w-full max-h-96 overflow-y-auto z-50 shadow-lg">
          <div className="p-2">
            {results.map((result) => (
              <Link
                key={result.item.id}
                to={result.item.type === 'condition'
                  ? `/categories/${result.item.categoryId}/conditions/${searchData
                    .filter(item => item.categoryId === result.item.categoryId && item.type === 'condition')
                    .findIndex(item => item.id === result.item.id)}`
                  : `/categories/${result.item.categoryId}`}
                onClick={() => setIsOpen(false)}
                className="block p-3 hover:bg-muted/50 rounded-lg transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg">{getTypeIcon(result.item.type)}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm truncate">{result.item.title}</h4>
                      <Badge variant="secondary" className="text-xs capitalize">
                        {result.item.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {result.item.description}
                    </p>
                    <p className="text-xs text-primary mt-1">{result.item.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {isOpen && query.length > 1 && results.length === 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg">
          <div className="p-6 text-center text-muted-foreground">
            <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p>No results found for "{query}"</p>
            <p className="text-sm mt-1">Try different keywords or remove filters</p>
          </div>
        </Card>
      )}
    </div>
  );
}