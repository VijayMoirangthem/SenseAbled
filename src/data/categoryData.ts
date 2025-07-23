// Category data with conditions, games, and exercises

export const categoryData = {
  "eyes-vision": {
    title: "Eyes & Vision",
    emoji: "👁️",
    description: "Comprehensive vision therapy exercises and games designed to improve visual processing, eye coordination, and visual perception abilities.",
    overview: "Visual impairments encompass a broad spectrum of conditions affecting sight, from mild refractive errors to complete blindness. These conditions can be congenital (present from birth) or acquired through injury, disease, or aging. Visual processing disorders affect how the brain interprets visual information, even when the eyes themselves function normally.",
    conditions: [
      {
        name: "Color Blindness (Color Vision Deficiency)",
        description: "Color blindness affects approximately 8% of men and 0.5% of women worldwide. The most common form is red-green color blindness, caused by genetic mutations affecting cone cells in the retina.",
        causes: [
          "Genetic mutations affecting L, M, or S cone cells",
          "Retinal diseases (diabetic retinopathy, macular degeneration)",
          "Optic nerve disorders",
          "Aging-related changes",
          "Chemical exposure or medication side effects"
        ],
        games: [
          {
            title: "Adaptive Color Vision Challenge",
            description: "An adaptive version of the Ishihara test featuring hidden numbers, letters, and shapes within colored dot patterns",
            instructions: "Players identify hidden elements within 30 seconds per image, with difficulty automatically adjusting based on performance",
            goal: "Enhance color discrimination within available spectrum and develop compensation strategies",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            duration: "5-10 min"
          },
          {
            title: "Chromatic Adaptation Trainer",
            description: "Dynamic color matching game using personalized color palettes based on individual deficiency type",
            instructions: "Match target colors under various lighting conditions with 3-5 attempts per level",
            goal: "Maximize functional use of available color perception",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "10-15 min",
            component: 'ChromaticAdaptationTrainer',
            tags: ['color vision', 'adaptation', 'lighting', 'perception']
          },
          {
            title: "Enhanced Color Sorting Challenge",
            description: "Advanced gradient arrangement game with multiple color families and saturation levels",
            instructions: "Create smooth color transitions across 10-20 color samples within time limits",
            goal: "Train neural pathways to recognize subtle color variations and develop alternative identification strategies",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "15-20 min",
            component: 'EnhancedColorSortingChallenge',
            tags: ['color sorting', 'gradient', 'perception', 'fine motor']
          }
        ]
      },
      {
        name: "Lazy Eye (Amblyopia)",
        description: "Amblyopia affects 2-3% of children and occurs when one eye doesn't develop normal vision during early childhood. The brain favors the stronger eye, leading to reduced visual acuity in the weaker eye.",
        causes: [
          "Refractive errors (significant difference between eyes)",
          "Strabismus (misaligned eyes)",
          "Cataracts or other visual obstructions",
          "Ptosis (drooping eyelid)",
          "Unequal eye sizes (anisometropia)"
        ],
        games: [
          {
            title: "Monocular Adventure Quest",
            description: "Story-driven adventure game requiring precise visual tasks using the weaker eye",
            instructions: "Complete 15-20 minute gaming sessions with specific eye-tracking targets and fine motor coordination",
            goal: "Force weaker eye usage to strengthen neural pathways and improve visual acuity",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "15-20 min",
            component: 'MonocularAdventureQuest',
            tags: ['lazy eye', 'amblyopia', 'monocular', 'visual acuity']
          },
          {
            title: "Contrast Sensitivity Maze",
            description: "Navigate through progressively faint maze patterns with decreasing contrast levels",
            instructions: "Use finger or stylus to trace correct path through maze within time limit",
            goal: "Enhance contrast sensitivity and spatial visual processing",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "10-15 min",
            component: 'ContrastSensitivityMaze',
            tags: ['contrast', 'maze', 'perception', 'spatial']
          },
          {
            title: "Binocular Rivalry Resolution",
            description: "Present different images to each eye that must be mentally fused or alternated",
            instructions: "Identify hidden objects that only appear when both eyes work together",
            goal: "Promote binocular vision development and reduce suppression",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "12-18 min",
            component: 'BinocularRivalryResolution',
            tags: ['binocular', 'rivalry', 'fusion', 'perception']
          }
        ]
      },
      {
        name: "Strabismus (Crossed Eyes)",
        description: "Strabismus affects 4% of children and occurs when eyes don't align properly. Types include esotropia (eyes turn inward), exotropia (outward), hypertropia (upward), and hypotropia (downward).",
        causes: [
          "Muscle imbalance or weakness",
          "Nerve problems controlling eye muscles",
          "Refractive errors",
          "Genetic factors",
          "Brain injuries or neurological conditions"
        ],
        games: [
          {
            title: "Stereoscopic Depth Challenges",
            description: "3D object manipulation and catching games requiring precise depth perception",
            instructions: "Catch falling objects, arrange 3D puzzles, or navigate spatial obstacles using both eyes",
            goal: "Develop stereoscopic vision and improve eye coordination",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Convergence Training Simulator",
            description: "Objects approach and recede requiring precise eye convergence and divergence",
            instructions: "Focus on approaching targets, maintain fusion as objects move in 3D space",
            goal: "Strengthen convergence and divergence eye movements",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Diplopia Resolution Exercises",
            description: "Gradual fusion training for double vision using overlapping images",
            instructions: "Merge separate images into single clear image through eye position adjustment",
            goal: "Reduce double vision and improve binocular fusion",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      },
      {
        name: "Eye Tracking Disorders",
        description: "Eye tracking disorders affect the ability to smoothly follow objects or make accurate eye movements. These can be developmental or acquired through brain injury, affecting reading, sports performance, and daily activities.",
        causes: [
          "Traumatic brain injury",
          "Neurological conditions (Parkinson's, multiple sclerosis)",
          "Developmental delays",
          "Attention disorders",
          "Cerebellar dysfunction"
        ],
        games: [
          {
            title: "Saccadic Precision Trainer",
            description: "Rapid target acquisition game requiring quick, accurate eye movements",
            instructions: "Look rapidly between targets appearing at random locations, minimize overshoot/undershoot",
            goal: "Improve saccadic eye movement precision and reduce reaction time",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Smooth Pursuit Mastery",
            description: "Follow smoothly moving targets in complex patterns (horizontal, vertical, circular, figure-eight)",
            instructions: "Keep eyes locked on moving target without losing tracking or making catch-up movements",
            goal: "Develop sustained, smooth eye tracking abilities",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Reading Scanning Optimizer",
            description: "Specialized reading exercises focusing on optimal eye movement patterns",
            instructions: "Read text while identifying specific targets, maintain proper reading saccades",
            goal: "Improve reading efficiency and reduce visual fatigue",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      },
      {
        name: "Low Vision",
        description: "Low vision refers to visual impairment that cannot be corrected with standard glasses, contacts, or surgery. Affects daily activities but retains some useful vision. Requires rehabilitation and adaptive strategies.",
        causes: [
          "Macular degeneration",
          "Diabetic retinopathy",
          "Glaucoma",
          "Cataracts",
          "Retinal detachment",
          "Albinism"
        ],
        games: [
          {
            title: "Adaptive Visual Navigation",
            description: "Virtual environment navigation using remaining vision with adjustable contrast and magnification",
            instructions: "Navigate virtual spaces using visual cues, develop systematic scanning patterns",
            goal: "Maximize functional use of remaining vision",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "20-25 min"
          },
          {
            title: "Magnification Mastery Training",
            description: "Practice using digital and optical magnification tools effectively",
            instructions: "Complete reading, writing, and recognition tasks using magnification aids",
            goal: "Improve efficiency and comfort with assistive technology",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "15-20 min"
          }
        ]
      },
      {
        name: "Refractive Errors (Myopia/Hyperopia)",
        description: "Refractive errors occur when the eye doesn't bend light correctly, causing blurred vision. Myopia (nearsightedness) and hyperopia (farsightedness) are increasingly common, especially in children.",
        causes: [
          "Genetic factors",
          "Environmental factors (near work, outdoor time)",
          "Eye growth abnormalities",
          "Aging (presbyopia)",
          "Corneal irregularities"
        ],
        games: [
          {
            title: "Dynamic Focus Training",
            description: "Rapid focus shifting between near and far virtual objects",
            instructions: "Quickly focus on targets at varying distances, maintain clear focus for specified duration",
            goal: "Exercise accommodation muscles and improve focusing speed",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "20-20-20 Gamified Breaks",
            description: "Automated reminder system with engaging distance viewing activities",
            instructions: "Every 20 minutes, focus on distant objects for 20 seconds, track compliance",
            goal: "Reduce digital eye strain and accommodation fatigue",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "20 second breaks"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Focus Training",
        description: "Strengthen focusing abilities with dynamic near-far exercises",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Eye Movement Coordination",
        description: "Improve smooth pursuit and saccadic eye movements",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Peripheral Vision Enhancement",
        description: "Expand visual field awareness and processing",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-25 min"
      }
    ],
    games: [
      {
        title: "Color Vision Challenge",
        description: "Grid-based color differentiation game with custom palettes for colorblind individuals",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "5-10 min"
      },
      {
        title: "Eye Tracking Adventure",
        description: "Follow moving objects and characters using camera-based eye tracking",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "10-15 min"
      },
      {
        title: "Contrast Training",
        description: "Identify shapes and patterns in various contrast scenarios",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "15-20 min"
      }
    ],
    gettingStarted: [
      "Complete our vision assessment to identify your specific needs",
      "Start with basic focus training exercises 2-3 times daily",
      "Progress to eye movement coordination as you improve",
      "Play vision games for 10-15 minutes during breaks",
      "Track your progress and adjust difficulty levels"
    ]
  },

  // Ears & Hearing
  "ears-hearing": {
    title: "Ears & Hearing",
    emoji: "👂",
    description: "Auditory training programs and hearing exercises designed to improve sound processing, auditory discrimination, and hearing rehabilitation.",
    overview: "Hearing impairments range from mild hearing loss to complete deafness, affecting communication, social interaction, and quality of life. These can be conductive (outer/middle ear problems), sensorineural (inner ear/nerve problems), or mixed.",
    conditions: [
      {
        name: "Hearing Loss (Partial/Complete)",
        description: "Hearing loss affects over 466 million people worldwide. Can be congenital or acquired, ranging from mild (difficulty hearing whispers) to profound (inability to hear loud sounds). Early intervention and rehabilitation are crucial.",
        causes: [
          "Genetic factors",
          "Aging (presbycusis)",
          "Noise exposure",
          "Infections (otitis media, meningitis)",
          "Ototoxic medications",
          "Head trauma"
        ],
        games: [
          {
            title: "Frequency-Specific Auditory Training",
            description: "Customized hearing exercises based on individual audiogram results with adaptive frequency presentation and real-time threshold adjustment",
            instructions: "Identify tones at specific frequencies, distinguish between similar pitches with increasing complexity",
            goal: "Maximize use of residual hearing and train auditory cortex",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Speech-in-Noise Enhancement",
            description: "Progressive speech recognition training in increasingly challenging acoustic environments with adjustable signal-to-noise ratios",
            instructions: "Identify words and sentences amid background noise, track improvement over time with various noise types",
            goal: "Improve speech understanding in real-world listening situations",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Auditory Memory Builder",
            description: "Sequential sound memory games with increasing complexity featuring multi-modal presentation and adaptive difficulty",
            instructions: "Repeat back sequences of sounds, words, or musical patterns with visual and auditory cues",
            goal: "Strengthen auditory processing and working memory",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      },
      {
        name: "Tinnitus",
        description: "Tinnitus affects 10-15% of adults, characterized by perception of sound without external stimulus. Can be subjective (only patient hears it) or objective (others can hear it). Significantly impacts quality of life and mental health.",
        causes: [
          "Hearing loss",
          "Loud noise exposure",
          "Ear infections or blockages",
          "Medications",
          "Blood vessel disorders",
          "TMJ disorders",
          "Stress and anxiety"
        ],
        games: [
          {
            title: "Tinnitus Retraining Therapy Game",
            description: "Interactive sound therapy program with personalized masking sounds, sound mixing interface, and habituation tracking",
            instructions: "Create and adjust personal soundscapes, gradually reduce masking volume with preference learning algorithms",
            goal: "Promote habituation and reduce tinnitus perception",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "20-30 min"
          },
          {
            title: "Attention Redirection Training",
            description: "Cognitive exercises designed to shift focus away from tinnitus using mindfulness-based games with attention monitoring",
            instructions: "Complete focus-intensive tasks while managing tinnitus awareness, practice distraction techniques",
            goal: "Develop coping strategies and reduce tinnitus distress",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Frequency Matching and Masking",
            description: "Identify tinnitus frequency and find optimal masking sounds using precision frequency generator and sound library management",
            instructions: "Match perceived tinnitus pitch, experiment with masking effectiveness across different sound types",
            goal: "Personalize sound therapy and reduce tinnitus prominence",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "10-15 min"
          }
        ]
      },
      {
        name: "Auditory Processing Disorders (APD)",
        description: "APD affects how the brain processes auditory information, despite normal hearing sensitivity. Common in children but can occur in adults. Impacts listening in noise, following directions, and learning.",
        causes: [
          "Developmental delays",
          "Brain injuries",
          "Chronic ear infections",
          "Neurological conditions",
          "Genetic factors",
          "Premature birth complications"
        ],
        games: [
          {
            title: "Auditory Discrimination Challenge",
            description: "Fine-tuned sound differentiation exercises for similar-sounding phonemes with minimal pair presentation and reaction time measurement",
            instructions: "Distinguish between similar sounds (ba/pa, ship/chip), respond to target sounds with accuracy tracking",
            goal: "Improve phonemic awareness and speech sound discrimination",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Temporal Processing Trainer",
            description: "Exercises focusing on timing aspects of auditory processing including gap detection and rhythm pattern matching",
            instructions: "Detect brief silences in noise, identify rhythm patterns, sequence sounds with temporal order identification",
            goal: "Enhance temporal auditory processing abilities",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Dichotic Listening Exercises",
            description: "Different sounds presented simultaneously to each ear with stereo headphone presentation and attention switching tasks",
            instructions: "Focus on target ear while ignoring distracting input, integrate bilateral information with binaural integration",
            goal: "Improve auditory attention and bilateral brain communication",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      },
      {
        name: "Balance and Vestibular Disorders",
        description: "Vestibular disorders affect the inner ear's balance system, causing dizziness, vertigo, and balance problems. Can significantly impact daily activities and increase fall risk.",
        causes: [
          "Benign Paroxysmal Positional Vertigo (BPPV)",
          "Vestibular neuritis",
          "Ménière's disease",
          "Head injuries",
          "Aging-related changes",
          "Medications"
        ],
        games: [
          {
            title: "Balance Integration Training",
            description: "Multi-sensory balance challenges using visual, auditory, and proprioceptive cues with motion sensors and audio feedback",
            instructions: "Maintain balance during various sensory challenges, adapt to changing conditions with progressive difficulty levels",
            goal: "Improve balance compensation and reduce fall risk",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Vestibular Adaptation Exercises",
            description: "Head movement exercises designed to promote vestibular system adaptation with motion tracking and symptom monitoring",
            instructions: "Perform specific head and body movements, gradually increase intensity with exercise guidance",
            goal: "Retrain balance system and reduce motion sensitivity",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            duration: "10-15 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Frequency-Specific Auditory Training",
        description: "Customized hearing exercises based on individual audiogram results",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "15-20 min"
      },
      {
        title: "Speech-in-Noise Enhancement",
        description: "Progressive speech recognition training in challenging acoustic environments",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "10-15 min"
      },
      {
        title: "Auditory Memory Builder",
        description: "Sequential sound memory games with increasing complexity",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "12-18 min"
      },
      {
        title: "Auditory Discrimination Challenge",
        description: "Fine-tuned sound differentiation exercises for similar phonemes",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "10-15 min"
      },
      {
        title: "Temporal Processing Trainer",
        description: "Exercises focusing on timing aspects of auditory processing",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "15-20 min"
      },
      {
        title: "Balance Integration Training",
        description: "Multi-sensory balance challenges for vestibular rehabilitation",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      }
    ],
    games: [
      {
        title: "Tinnitus Retraining Therapy Game",
        description: "Interactive sound therapy with personalized masking sounds",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "20-30 min"
      },
      {
        title: "Attention Redirection Training",
        description: "Cognitive exercises to shift focus away from tinnitus",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Frequency Matching and Masking",
        description: "Identify tinnitus frequency and find optimal masking sounds",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Dichotic Listening Exercises",
        description: "Different sounds presented simultaneously to each ear",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "12-18 min"
      },
      {
        title: "Vestibular Adaptation Exercises",
        description: "Head movement exercises for vestibular system adaptation",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "10-15 min"
      }
    ],
    gettingStarted: [
      "Complete our comprehensive hearing assessment to identify your specific auditory profile",
      "Begin with frequency-specific auditory training based on your audiogram results",
      "Practice speech-in-noise exercises in gradually increasing difficulty levels",
      "Use tinnitus management games if experiencing ringing or phantom sounds",
      "Incorporate balance training exercises if experiencing dizziness or vertigo",
      "Monitor your progress and adjust exercise intensity based on your comfort level"
    ]
  },
  "mind-cognition": {
    title: "Mind & Cognition",
    emoji: "🧠",
    description: "Cognitive training exercises and brain games designed to enhance memory, attention, executive function, and overall cognitive performance.",
    overview: "Cognitive impairments affect thinking, learning, memory, and problem-solving abilities. These can be developmental, acquired through injury/illness, or age-related. Early intervention and cognitive rehabilitation can significantly improve outcomes.",
    conditions: [
      {
        name: "ADHD and Focus Disorders",
        description: "ADHD affects 5-10% of children and 2.5% of adults, characterized by inattention, hyperactivity, and impulsivity. Significantly impacts academic, occupational, and social functioning.",
        causes: [
          "Genetic factors (70-80% heritability)",
          "Brain structure and function differences",
          "Prenatal factors (alcohol, tobacco, stress)",
          "Environmental toxins",
          "Traumatic brain injury",
          "Premature birth"
        ],
        games: [
          {
            title: "Executive Function Training Suite",
            description: "Comprehensive cognitive training targeting working memory, cognitive flexibility, and inhibitory control",
            instructions: "Complete daily 20-30 minute sessions across various cognitive domains with adaptive difficulty and performance analytics",
            goal: "Strengthen core executive functions and transfer to daily activities",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "20-30 min"
          },
          {
            title: "Attention Regulation Biofeedback",
            description: "Real-time brain activity monitoring with neurofeedback training and attention state visualization",
            instructions: "Maintain focused attention states through visual feedback and game progression with reward-based learning",
            goal: "Improve sustained attention and self-regulation skills",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Impulse Control Training",
            description: "Go/no-go tasks with increasing complexity and distractors, featuring reaction time measurement and error analysis",
            instructions: "Respond only to target stimuli while resisting responding to distractors with adaptive difficulty",
            goal: "Strengthen inhibitory control and reduce impulsive behaviors",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "10-15 min"
          }
        ]
      },
      {
        name: "Memory Loss and Mild Cognitive Impairment",
        description: "Memory disorders range from mild age-related changes to severe impairments affecting daily functioning. MCI affects 15-20% of older adults and may progress to dementia.",
        causes: [
          "Alzheimer's disease",
          "Vascular disorders",
          "Traumatic brain injury",
          "Depression and anxiety",
          "Medication side effects",
          "Vitamin deficiencies",
          "Thyroid disorders"
        ],
        games: [
          {
            title: "Multi-Modal Memory Enhancement",
            description: "Comprehensive memory training using visual, auditory, and kinesthetic modalities with spaced repetition algorithms",
            instructions: "Learn and recall information using multiple sensory channels with personalized content adaptation",
            goal: "Strengthen memory encoding and retrieval processes",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Episodic Memory Reconstruction",
            description: "Story-based memory exercises focusing on autobiographical and episodic memory with narrative structure",
            instructions: "Create and recall detailed personal stories with temporal and contextual details using contextual cue integration",
            goal: "Improve episodic memory formation and retrieval",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "20-25 min"
          },
          {
            title: "Working Memory Bootcamp",
            description: "Intensive working memory training with dual-task challenges, N-back tasks, and complex span procedures",
            instructions: "Hold and manipulate information in mind while performing concurrent tasks with interference management",
            goal: "Expand working memory capacity and cognitive flexibility",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "15-20 min"
          }
        ]
      },
      {
        name: "Learning Differences (Dyslexia/Dyscalculia)",
        description: "Learning differences affect 5-10% of the population, impacting specific academic skills despite normal intelligence. Early identification and intervention are crucial for academic success.",
        causes: [
          "Genetic factors",
          "Brain structure and function differences",
          "Developmental variations",
          "Environmental factors",
          "Prenatal complications"
        ],
        games: [
          {
            title: "Phonemic Awareness Builder",
            description: "Systematic training in speech sound awareness and manipulation with multi-sensory phoneme presentation",
            instructions: "Identify, segment, and blend speech sounds in words through segmentation and blending exercises",
            goal: "Build foundational reading skills through phonemic awareness",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Morphological Awareness Training",
            description: "Word structure and meaning relationship exercises with root word identification and prefix/suffix manipulation",
            instructions: "Analyze word structure and derive meaning from component parts using morphological analysis",
            goal: "Improve reading comprehension and vocabulary development",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            duration: "12-18 min"
          },
          {
            title: "Number Sense Development",
            description: "Foundational number concept training with visual-spatial support, quantity visualization, and number line activities",
            instructions: "Develop intuitive understanding of number relationships and quantities through magnitude comparison",
            goal: "Build basic numerical cognition and number sense",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Math Fact Fluency Builder",
            description: "Systematic math fact practice with memory strategy training, spaced repetition, and fluency measurement",
            instructions: "Practice basic math facts using proven memory strategies with strategy instruction",
            goal: "Achieve automatic recall of basic math facts",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "10-15 min"
          }
        ]
      },
      {
        name: "Autism Spectrum Disorders",
        description: "ASD affects 1 in 36 children, characterized by social communication challenges and restricted, repetitive behaviors. Symptoms range from mild to severe across multiple domains.",
        causes: [
          "Genetic factors (80-90% heritability)",
          "Advanced parental age",
          "Prenatal complications",
          "Environmental factors",
          "Brain development differences"
        ],
        games: [
          {
            title: "Social Skills Training Simulator",
            description: "Virtual reality social interaction training with immediate feedback and facial expression recognition",
            instructions: "Practice social interactions in safe, controlled virtual environments with conversation practice and social scenario navigation",
            goal: "Improve social communication and interaction skills",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "20-25 min"
          },
          {
            title: "Sensory Integration Playground",
            description: "Customizable sensory experiences for regulation and integration training with adjustable sensory inputs",
            instructions: "Explore and adjust sensory experiences to find optimal regulation states using self-regulation tools",
            goal: "Improve sensory processing and self-regulation abilities",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Theory of Mind Development",
            description: "Perspective-taking exercises and false belief understanding through interactive scenarios",
            instructions: "Understand others' thoughts, feelings, and perspectives through guided activities with mental state prediction",
            goal: "Develop theory of mind and social understanding",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            duration: "18-22 min"
          }
        ]
      },
      {
        name: "Executive Function Disorders",
        description: "Executive function disorders affect planning, organization, time management, and goal-directed behavior. Can occur independently or alongside other conditions.",
        causes: [
          "Frontal lobe injuries",
          "ADHD",
          "Autism spectrum disorders",
          "Anxiety and depression",
          "Developmental delays",
          "Neurodegenerative diseases"
        ],
        games: [
          {
            title: "Strategic Planning Challenges",
            description: "Complex multi-step problem-solving games requiring forward planning with tower tasks and maze planning",
            instructions: "Plan sequences of moves to achieve goals with minimal errors using resource management scenarios",
            goal: "Strengthen planning and problem-solving abilities",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "20-25 min"
          },
          {
            title: "Cognitive Flexibility Training",
            description: "Task-switching exercises with rule changes and adaptation requirements using set-shifting paradigms",
            instructions: "Rapidly adapt to changing task demands and rules through attention switching and rule learning",
            goal: "Improve mental flexibility and adaptation skills",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "15-20 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Working Memory Training",
        description: "Exercises to improve short-term information retention and manipulation",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Attention Focus Exercises",
        description: "Train sustained and selective attention abilities",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Cognitive Flexibility Training",
        description: "Improve ability to switch between tasks and mental sets",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-25 min"
      },
      {
        title: "Executive Function Training",
        description: "Comprehensive planning and organization skill development",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "18-22 min"
      }
    ],
    games: [
      {
        title: "Memory Match Challenge",
        description: "Card-matching memory game with progressive difficulty",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "5-10 min"
      },
      {
        title: "Attention Blink Test",
        description: "Rapid visual processing game to improve attentional blink",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "10-15 min"
      },
      {
        title: "Task Switching Challenge",
        description: "Rapidly alternate between different cognitive tasks",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "15-20 min"
      },
      {
        title: "Planning Strategy Game",
        description: "Multi-step problem solving with strategic planning elements",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-25 min"
      }
    ],
    gettingStarted: [
      "Complete our cognitive assessment to identify your strengths and challenges",
      "Start with basic memory and attention exercises",
      "Practice consistently for 15-20 minutes daily",
      "Gradually increase difficulty as you improve",
      "Track your progress with our cognitive performance metrics"
    ]
  },
  "speech-voice": {
    title: "Speech & Voice",
    emoji: "🗣️",
    description: "Comprehensive speech therapy exercises and communication training designed to improve articulation, fluency, voice quality, and language development.",
    overview: "Speech and language disorders affect communication abilities, impacting social interaction, academic performance, and quality of life. These can be developmental or acquired through injury or illness. Early intervention and consistent therapy significantly improve outcomes.",
    conditions: [
      {
        name: "Stuttering and Fluency Disorders",
        description: "Stuttering affects 1% of adults and 5% of children, characterized by disruptions in speech flow including repetitions, prolongations, and blocks. Can significantly impact communication confidence and social participation.",
        causes: [
          "Genetic factors (60% heritability)",
          "Neurological differences in speech motor control",
          "Developmental factors during critical periods",
          "Environmental stressors and pressure",
          "Brain injury or neurological illness",
          "Anxiety and psychological factors"
        ],
        games: [
          {
            title: "Fluency Shaping Trainer",
            description: "Systematic practice of fluent speech techniques with real-time biofeedback monitoring",
            instructions: "Practice slow, controlled speech with gradual rate increase while monitoring fluency metrics",
            goal: "Develop and maintain fluent speech patterns through systematic technique practice",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Rhythm and Pacing Master",
            description: "Musical rhythm integration with speech production exercises using metronome synchronization",
            instructions: "Synchronize speech with rhythmic patterns, maintaining steady pace and flow",
            goal: "Establish rhythmic speech flow and reduce disfluencies through timing control",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Confidence Building Communicator",
            description: "Progressive communication challenges in virtual social environments with graduated exposure",
            instructions: "Practice speaking in increasingly challenging social situations with confidence tracking",
            goal: "Build communication confidence and reduce speech anxiety in social contexts",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "20-25 min"
          }
        ]
      },
      {
        name: "Delayed Speech and Language Development",
        description: "Speech and language delays affect 10-15% of preschoolers, impacting vocabulary development, grammar acquisition, and overall communication effectiveness. Early intervention significantly improves long-term outcomes.",
        causes: [
          "Developmental variations and individual differences",
          "Hearing impairments affecting language input",
          "Cognitive delays impacting language learning",
          "Limited environmental language exposure",
          "Neurological conditions affecting development",
          "Oral-motor difficulties impacting speech production"
        ],
        games: [
          {
            title: "Vocabulary Expansion Adventures",
            description: "Interactive story-based vocabulary learning with multi-sensory support and contextual learning",
            instructions: "Learn new words through engaging stories, activities, and picture-word associations",
            goal: "Expand both expressive and receptive vocabulary through meaningful contexts",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Grammar Construction Kit",
            description: "Sentence building exercises with visual and auditory support for syntactic development",
            instructions: "Build grammatically correct sentences with increasing complexity and rule learning",
            goal: "Develop syntactic and morphological language skills through structured practice",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            duration: "12-18 min"
          },
          {
            title: "Communication Motivation Games",
            description: "High-interest activities requiring verbal communication for success with natural language elicitation",
            instructions: "Engage in motivating activities that naturally require and reward communication attempts",
            goal: "Increase communication attempts and functional language use in meaningful contexts",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "10-15 min"
          }
        ]
      },
      {
        name: "Articulation and Phonological Disorders",
        description: "Articulation disorders affect speech sound production clarity, while phonological disorders involve systematic patterns of sound errors. Both impact speech intelligibility and communication effectiveness.",
        causes: [
          "Developmental variations in speech sound acquisition",
          "Hearing loss affecting sound discrimination",
          "Oral-motor difficulties and coordination issues",
          "Neurological conditions affecting speech control",
          "Structural abnormalities (cleft palate, tongue tie)",
          "Environmental factors and limited speech models"
        ],
        games: [
          {
            title: "Precision Pronunciation Trainer",
            description: "Targeted speech sound practice with visual feedback and articulatory position guidance",
            instructions: "Practice correct production of target sounds with immediate acoustic and visual feedback",
            goal: "Establish correct articulation patterns and improve speech sound precision",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Phonological Pattern Analyzer",
            description: "Systematic training to correct sound pattern errors using minimal pair contrasts",
            instructions: "Distinguish between correct and incorrect sound patterns with generalization activities",
            goal: "Eliminate phonological process errors and improve overall speech intelligibility",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Oral-Motor Strength Builder",
            description: "Targeted exercises to strengthen speech muscles and improve articulatory coordination",
            instructions: "Perform specific tongue, lip, and jaw exercises with progression tracking",
            goal: "Improve oral-motor strength, coordination, and speech precision",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "8-12 min"
          }
        ]
      },
      {
        name: "Voice Disorders",
        description: "Voice disorders affect vocal quality, pitch, loudness, or resonance, impacting communication effectiveness. Can result from vocal misuse, medical conditions, or structural abnormalities.",
        causes: [
          "Vocal abuse or misuse patterns",
          "Neurological conditions affecting vocal control",
          "Structural abnormalities of vocal folds",
          "Hormonal changes affecting voice",
          "Respiratory conditions impacting breath support",
          "Psychological factors and vocal tension"
        ],
        games: [
          {
            title: "Vocal Hygiene Educator",
            description: "Interactive learning program about healthy voice use habits with behavior tracking",
            instructions: "Learn and practice healthy voice behaviors with progress monitoring and reminders",
            goal: "Establish optimal voice care habits and prevent vocal trauma",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "12-15 min"
          },
          {
            title: "Pitch and Volume Controller",
            description: "Precise vocal control training with visual biofeedback for pitch and intensity",
            instructions: "Match target pitch and volume levels using voice control with real-time feedback",
            goal: "Develop accurate vocal pitch and volume control for optimal voice use",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Breathing and Support Strengthener",
            description: "Respiratory support training for optimal voice production with breath pattern analysis",
            instructions: "Practice diaphragmatic breathing and respiratory support techniques for speech",
            goal: "Improve respiratory support and breath control for healthy voice production",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
            duration: "8-12 min"
          }
        ]
      },
      {
        name: "Aphasia and Acquired Language Disorders",
        description: "Aphasia affects language abilities following brain injury, typically stroke. Can impact comprehension, expression, reading, and writing abilities across multiple communication modalities.",
        causes: [
          "Stroke (most common cause)",
          "Traumatic brain injury",
          "Brain tumors affecting language areas",
          "Infections (encephalitis, meningitis)",
          "Neurodegenerative diseases",
          "Surgical complications affecting language centers"
        ],
        games: [
          {
            title: "Language Recovery Pathway",
            description: "Comprehensive language rehabilitation program with adaptive difficulty across all modalities",
            instructions: "Complete language exercises spanning comprehension, expression, reading, and writing",
            goal: "Restore functional language abilities across all communication modalities",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
            duration: "25-30 min"
          },
          {
            title: "Word Retrieval Facilitator",
            description: "Systematic naming therapy with cueing hierarchies and response time measurement",
            instructions: "Name objects and actions with systematic cueing support and generalization tracking",
            goal: "Improve word finding and naming abilities through structured retrieval practice",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Functional Communication Trainer",
            description: "Real-world communication scenarios with adaptive support and multimodal options",
            instructions: "Practice functional communication in simulated real-world situations with varied support",
            goal: "Maximize functional communication effectiveness in daily life contexts",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
            duration: "20-25 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Articulation Practice",
        description: "Targeted speech sound production exercises with precision feedback",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Fluency Enhancement",
        description: "Speech flow improvement exercises with rhythm and pacing control",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Voice Optimization",
        description: "Vocal quality, pitch, and volume control training exercises",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "12-18 min"
      },
      {
        title: "Language Recovery",
        description: "Comprehensive language rehabilitation for acquired disorders",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-30 min"
      }
    ],
    games: [
      {
        title: "Fluency Shaping Trainer",
        description: "Interactive speech fluency training with real-time feedback and progress tracking",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Pronunciation Challenge",
        description: "Gamified articulation training with speech recognition and scoring",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Voice Control Master",
        description: "Vocal pitch and volume control challenges with visual feedback",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "12-15 min"
      },
      {
        title: "Word Retrieval Quest",
        description: "Naming and word-finding exercises in engaging game formats",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "15-20 min"
      }
    ],
    gettingStarted: [
      "Complete our speech and language assessment to identify specific areas of need",
      "Begin with basic articulation or fluency exercises appropriate to your condition",
      "Practice consistently for 10-15 minutes, 2-3 times daily for optimal results",
      "Use voice recording features to monitor progress and improvements",
      "Gradually increase difficulty levels as speech clarity and confidence improve",
      "Incorporate functional communication practice in real-world scenarios"
    ]
  },
  "motor-movement": {
    title: "Motor & Movement",
    emoji: "🏃",
    description: "Motor skills training and movement rehabilitation exercises designed to improve fine and gross motor coordination, strength, and functional mobility.",
    overview: "Motor skills encompass the coordination and control of voluntary muscle movements, divided into fine motor skills (precise hand and finger movements) and gross motor skills (large muscle group coordination). Motor impairments can significantly impact daily functioning, independence, and quality of life.",
    conditions: [
      {
        name: "Fine Motor Delay",
        description: "Fine motor delay refers to difficulties in controlling small muscle movements, particularly in the hands and fingers. This affects precision tasks such as writing, buttoning clothes, using utensils, and manipulating small objects.",
        causes: [
          "Delayed maturation of neural pathways controlling fine motor coordination",
          "Neurological conditions (cerebral palsy, muscular dystrophy, spinal cord injuries)",
          "Genetic syndromes (Down syndrome, fragile X syndrome, Rett syndrome)",
          "Environmental factors (lack of early stimulation, limited practice opportunities)",
          "Medical complications (premature birth, low birth weight, brain injuries)"
        ],
        games: [
          {
            title: "Dot-to-Dot Precision Master",
            description: "Progressive precision training using numbered sequence connection with adaptive difficulty scaling",
            instructions: "Start with large dots (10mm) spaced widely apart, progress to smaller targets (2mm) with closer spacing. Track accuracy percentage and completion time with haptic feedback for successful connections.",
            goal: "Enhance finger dexterity, hand-eye coordination, and sequential motor planning",
            image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Micro-Target Touch Training",
            description: "Precision tapping game with increasingly smaller targets and reduced error tolerance",
            instructions: "Begin with 15mm targets, progress to 3mm with time pressure elements and multi-finger coordination challenges",
            goal: "Improve finger isolation, precision control, and motor accuracy",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
            duration: "8-12 min"
          },
          {
            title: "Virtual Bead Threading Simulator",
            description: "Digital replica of traditional bead threading with progressive difficulty levels",
            instructions: "Use stylus or finger to thread virtual beads onto strings, starting with large beads (20mm) and progressing to small (5mm)",
            goal: "Develop bilateral coordination, finger strength, and visual-motor integration",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      },
      {
        name: "Gross Motor Delay",
        description: "Gross motor delay involves difficulties with large muscle coordination, affecting activities like walking, running, jumping, throwing, and maintaining balance. These skills form the foundation for more complex physical activities and sports participation.",
        causes: [
          "Neurological conditions (cerebral palsy, muscular dystrophy, spina bifida)",
          "Developmental delays in motor milestone achievement",
          "Environmental factors (limited physical activity, sedentary lifestyle)",
          "Medical conditions (orthopedic conditions, chronic illness, medication side effects)",
          "Genetic syndromes affecting muscle development"
        ],
        games: [
          {
            title: "Motion-Tracked Sports Academy",
            description: "Comprehensive virtual sports training using full-body motion capture technology",
            instructions: "Calibrate user's movement range, start with basic throwing motions and progress to complex sports skills including football throwing, basketball shooting, and soccer kicking",
            goal: "Enhance bilateral coordination, motor planning, and cardiovascular fitness",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            duration: "20-30 min"
          },
          {
            title: "Dance Revolution Therapy",
            description: "Rhythm-based movement game with therapeutic progression protocols",
            instructions: "Begin with simple 2-step patterns, advance to complex routines with upper and lower body coordination challenges",
            goal: "Improve rhythm, motor sequencing, and dynamic balance",
            image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
            duration: "15-25 min"
          },
          {
            title: "Adventure Movement Quest",
            description: "Story-driven game requiring various gross motor skills to progress through levels",
            instructions: "Navigate character through obstacles using body movements including jumping, ducking, reaching, and stepping motions",
            goal: "Motivate sustained physical activity, build motor confidence, and enhance motor planning",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
            duration: "20-35 min"
          }
        ]
      },
      {
        name: "Parkinson's Disease",
        description: "Parkinson's disease is a progressive neurodegenerative disorder affecting movement control, characterized by tremor, rigidity, bradykinesia (slowness), and postural instability. Essential tremor is a separate condition causing involuntary shaking, typically in the hands.",
        causes: [
          "Loss of dopamine-producing neurons in the substantia nigra",
          "Essential tremor from abnormal brain activity in cerebellum and thalamus",
          "Secondary causes including medication side effects, stroke, brain injury",
          "Risk factors: age, genetics, environmental toxins, head trauma"
        ],
        games: [
          {
            title: "Tremor Compensation Navigator",
            description: "Adaptive line-tracing game with intelligent tremor filtering and compensation algorithms",
            instructions: "Trace paths while system filters involuntary movements with adjustable tremor sensitivity settings",
            goal: "Build confidence in motor control, reduce tremor anxiety, and improve movement intention",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Rhythm Synchronization Challenge",
            description: "Music-based tapping game designed to improve movement timing and reduce freezing episodes",
            instructions: "Tap to various musical rhythms with metronome training and adjustable tempo",
            goal: "Improve movement initiation, reduce freezing, and enhance motor timing",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
            duration: "12-18 min"
          },
          {
            title: "Large Amplitude Movement Game",
            description: "Exaggerated movement training game based on LSVT BIG therapy principles",
            instructions: "Perform large, exaggerated reaching movements with virtual targets at maximum reach distance",
            goal: "Maintain movement amplitude, prevent motor decline, and improve functional mobility",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            duration: "15-20 min"
          }
        ]
      },
      {
        name: "Stroke Rehabilitation",
        description: "Stroke results from interrupted blood flow to brain tissue, causing varying degrees of motor, sensory, and cognitive impairments. Motor recovery depends on neuroplasticity and intensive, task-specific rehabilitation.",
        causes: [
          "Ischemic stroke (87%): blood clot blocking brain arteries",
          "Hemorrhagic stroke (13%): brain bleeding from ruptured blood vessels",
          "Risk factors: hypertension, diabetes, atrial fibrillation, smoking, age"
        ],
        games: [
          {
            title: "Affected Limb Recovery Suite",
            description: "Targeted rehabilitation games specifically designed for hemiparetic limbs with adaptive difficulty",
            instructions: "Customize controls for affected limb capabilities with reaching, grasping, and manipulation tasks",
            goal: "Promote neuroplasticity, prevent learned non-use, and restore functional movement patterns",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
            duration: "20-30 min"
          },
          {
            title: "Bilateral Coordination Master",
            description: "Two-handed coordination training with emphasis on affected limb integration",
            instructions: "Perform symmetrical bilateral movements and alternating hand patterns with real-time coordination feedback",
            goal: "Restore interhemispheric coordination, reduce neglect, and improve functional independence",
            image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
            duration: "15-25 min"
          },
          {
            title: "Virtual Reality Functional Training",
            description: "Immersive environment for practicing activities of daily living (ADL)",
            instructions: "Navigate virtual kitchen, bedroom, and bathroom environments to practice dressing, cooking, and hygiene tasks",
            goal: "Transfer skills to real-world activities, build confidence, and improve quality of life",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
            duration: "25-40 min"
          }
        ]
      },
      {
        name: "Cerebral Palsy (Mild to Moderate)",
        description: "Cerebral palsy is a group of permanent movement disorders caused by brain damage during fetal development, birth, or early childhood. It affects posture, movement, and motor skills with varying severity levels.",
        causes: [
          "Prenatal: maternal infections, genetic mutations, brain malformations",
          "Perinatal: oxygen deprivation, birth trauma, premature birth",
          "Postnatal: brain infections, head trauma, stroke in early childhood"
        ],
        games: [
          {
            title: "Adaptive Gaming Control Center",
            description: "Highly customizable gaming interface accommodating various motor abilities and control preferences",
            instructions: "Configure switch, eye-gaze, or voice control inputs with adjustable sensitivity and timing parameters",
            goal: "Maximize participation, build motor skills within individual capabilities, and enhance social interaction",
            image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
            duration: "15-30 min"
          },
          {
            title: "Gesture Recognition Movement Games",
            description: "Camera-based games that recognize and reward any voluntary movement within the user's range",
            instructions: "Calibrate to user's available movement patterns including head, eye, hand, or foot control options",
            goal: "Encourage voluntary movement, build motor confidence, and develop functional control skills",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
            duration: "10-20 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Digital Finger Gym",
        description: "Comprehensive finger strengthening program with virtual resistance training",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Balance Mastery Training",
        description: "Progressive balance training program with real-time stability feedback",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Voice-Movement Synchronization",
        description: "Combined speech and movement therapy based on LSVT protocols",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-25 min"
      },
      {
        title: "Range of Motion Maintenance",
        description: "Guided stretching and joint mobility program with progress tracking",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "12-18 min"
      },
      {
        title: "Spasticity Management Training",
        description: "Biofeedback-assisted relaxation and stretching program for muscle tension reduction",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      }
    ],
    games: [
      {
        title: "Dot-to-Dot Precision Master",
        description: "Fine motor precision training with progressive difficulty levels",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Motion Sports Academy",
        description: "Full-body motion tracking for virtual sports training",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "20-30 min"
      },
      {
        title: "Tremor Compensation Navigator",
        description: "Adaptive control training for movement disorders",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "15-20 min"
      }
    ],
    gettingStarted: [
      "Complete our motor skills assessment to identify specific areas of need",
      "Begin with basic fine motor exercises using larger targets and movements",
      "Practice gross motor activities with simple, controlled movements",
      "Gradually increase complexity and reduce assistance as skills improve",
      "Track progress through built-in metrics and celebrate small victories"
    ]
  },
  "touch-sensory": {
    title: "Touch & Sensory",
    emoji: "✋",
    description: "Tactile processing and sensory integration programs designed to improve touch sensitivity, sensory regulation, and tactile discrimination abilities.",
    overview: "Tactile processing involves the interpretation of touch sensations through specialized receptors in the skin. Sensory processing disorders can significantly impact daily functioning, emotional regulation, and social participation.",
    conditions: [
      {
        name: "Tactile Sensitivity (Autism, SPD)",
        description: "Tactile sensitivity involves over-responsiveness to touch sensations, causing discomfort or distress from normal tactile inputs like clothing textures, light touch, or unexpected contact.",
        causes: [
          "Autism spectrum disorders",
          "Sensory processing disorder",
          "Atypical sensory system development",
          "Inherited sensory processing differences",
          "Limited early sensory experiences",
          "Trauma-related sensory responses"
        ],
        games: [
          {
            title: "Gradual Texture Explorer",
            description: "Progressive desensitization program using haptic feedback technology with user-controlled exposure levels",
            instructions: "Start with preferred textures, gradually introduce challenging ones with escape button for immediate relief",
            goal: "Build sensory tolerance, reduce tactile defensiveness, and expand sensory diet options",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Sensory Detective Adventure",
            description: "Mystery-solving game requiring tactile exploration with controlled sensory input",
            instructions: "Explore virtual environments using touch feedback, solve puzzles requiring texture discrimination",
            goal: "Motivate sensory exploration, build tactile discrimination, and develop coping strategies",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Sensory Tolerance Builder",
            description: "Graduated exposure therapy game with user-controlled intensity and immediate escape options",
            instructions: "Start with minimal sensory input, gradually increase intensity based on tolerance with multi-sensory combinations",
            goal: "Build sensory tolerance, reduce avoidance behaviors, and expand participation in daily activities",
            image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      },
      {
        name: "Numbness or Reduced Touch Sensation",
        description: "Reduced tactile sensation involves decreased ability to detect or discriminate touch, pressure, temperature, or texture, often resulting from nerve damage or neurological conditions.",
        causes: [
          "Peripheral neuropathy (diabetes, chemotherapy)",
          "Neurological conditions (stroke, multiple sclerosis)",
          "Nerve compression (carpal tunnel syndrome)",
          "Vascular issues (poor circulation, Raynaud's disease)",
          "Spinal cord injury",
          "Vitamin deficiencies"
        ],
        games: [
          {
            title: "Enhanced Feedback Amplifier",
            description: "Touch detection training with amplified sensory feedback through vibration and visual cues",
            instructions: "Practice detecting light touch with vibrotactile enhancement and adjustable amplification levels",
            goal: "Maximize remaining sensation, develop compensatory strategies, and improve safety awareness",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Texture Detective Challenge",
            description: "Tactile discrimination training using enhanced feedback systems",
            instructions: "Identify virtual textures using amplified haptic feedback with temperature and pressure variations",
            goal: "Enhance tactile discrimination, build compensatory skills, and improve functional use of affected limbs",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            duration: "10-15 min"
          }
        ]
      },
      {
        name: "Over-responsive Sensory Profiles",
        description: "Over-responsiveness involves heightened reactions to sensory input, causing avoidance behaviors, anxiety, and disruption of daily activities across multiple sensory systems.",
        causes: [
          "Sensory processing disorder",
          "Post-traumatic stress disorder",
          "Anxiety disorders",
          "Migraine and chronic pain conditions",
          "Fibromyalgia",
          "Premature birth complications",
          "Early medical interventions"
        ],
        games: [
          {
            title: "Self-Regulation Mastery",
            description: "Interactive training program for sensory self-regulation strategies and coping techniques",
            instructions: "Practice deep breathing during sensory challenges, learn body awareness and early warning signs",
            goal: "Develop emotional regulation, build coping strategies, and increase sensory participation",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            duration: "18-25 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Sensory Diet Planner",
        description: "Personalized sensory activity scheduling with real-time adjustment capabilities",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "15-20 min"
      },
      {
        title: "Tactile Discrimination Training",
        description: "Progressive texture and material identification exercises",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "10-15 min"
      },
      {
        title: "Sensory Integration Challenges",
        description: "Multi-sensory processing and regulation activities",
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-25 min"
      }
    ],
    games: [
      {
        title: "Texture Memory Game",
        description: "Remember and match different tactile sensations in sequence",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "5-10 min"
      },
      {
        title: "Sensory Obstacle Course",
        description: "Navigate virtual environments with various tactile challenges",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "12-18 min"
      },
      {
        title: "Multi-Sensory Integration Quest",
        description: "Complex challenges requiring coordination of multiple sensory systems",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-25 min"
      }
    ],
    gettingStarted: [
      "Complete our sensory profile assessment to identify your processing patterns",
      "Begin with gentle texture exploration exercises in comfortable settings",
      "Practice sensory regulation techniques during low-stress periods",
      "Gradually introduce new sensory experiences with control options",
      "Track your sensory responses and tolerance levels over time"
    ]
  },
  "breathing-respiratory": {
    title: "Breathing & Respiratory",
    emoji: "🫁",
    description: "Comprehensive respiratory therapy exercises and breathing games designed to improve lung function, breathing patterns, and respiratory muscle strength.",
    overview: "Respiratory function involves the coordination of breathing muscles, airway management, and gas exchange. Breathing disorders can affect both physical health and emotional well-being through their impact on oxygenation and stress responses.",
    conditions: [
      {
        name: "Asthma Management",
        description: "Asthma is a chronic respiratory condition characterized by airway inflammation, bronchospasm, and variable airflow obstruction, leading to wheezing, coughing, and shortness of breath.",
        causes: [
          "Environmental allergens (pollen, dust mites, pet dander)",
          "Viral infections, exercise, cold air, stress",
          "Chemical exposures, workplace irritants",
          "Family history, genetic predisposition"
        ],
        games: [
          {
            title: "Breath-Powered Adventure",
            description: "Action-adventure game where proper breathing techniques control character movement and abilities",
            instructions: "Use slow, deep breathing to power character's special abilities, practice pursed-lip breathing to navigate underwater levels",
            goal: "Improve breathing control, build lung capacity, and reinforce proper breathing techniques",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Respiratory Rhythm Master",
            description: "Music-based breathing game that teaches optimal breathing patterns through rhythm and melody",
            instructions: "Match breathing patterns to musical rhythms, practice 4-4-4 breathing (inhale-hold-exhale) patterns",
            goal: "Establish healthy breathing rhythms, reduce breathing-related anxiety, and improve respiratory muscle coordination",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Peak Flow Training System",
            description: "Interactive peak flow monitoring with gamified improvement tracking and asthma action plan integration",
            instructions: "Perform daily peak flow measurements with game rewards, track personal best scores and improvement trends",
            goal: "Improve asthma self-management, early symptom recognition, and medication compliance",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            duration: "5-10 min"
          }
        ]
      },
      {
        name: "COPD / Shallow Breathing",
        description: "Chronic Obstructive Pulmonary Disease (COPD) involves progressive airflow limitation due to emphysema and chronic bronchitis, leading to breathing difficulties and reduced exercise tolerance.",
        causes: [
          "Smoking (primary risk factor - 85-90% of cases)",
          "Air pollution, occupational dust exposure",
          "Alpha-1 antitrypsin deficiency",
          "Childhood respiratory illnesses"
        ],
        games: [
          {
            title: "Oxygen Efficiency Challenge",
            description: "Strategy game where players optimize breathing efficiency to complete increasingly demanding tasks",
            instructions: "Manage virtual oxygen levels through efficient breathing, practice diaphragmatic breathing to maximize efficiency",
            goal: "Optimize breathing efficiency, teach energy conservation, and improve activity tolerance",
            image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Diaphragmatic Breathing Trainer",
            description: "Visual biofeedback system for proper diaphragmatic breathing technique with progress monitoring",
            instructions: "Monitor chest vs. abdominal movement, practice sustained diaphragmatic breathing (5-10 minutes)",
            goal: "Strengthen diaphragm, reduce work of breathing, and improve oxygen efficiency",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            duration: "10-15 min"
          }
        ]
      },
      {
        name: "Anxiety-Related Breathing Irregularities",
        description: "Anxiety can cause various breathing irregularities including hyperventilation, breath holding, and shallow breathing, which can perpetuate anxiety symptoms through physiological feedback loops.",
        causes: [
          "Anxiety disorders, panic disorder, PTSD",
          "Fight-or-flight response activation",
          "Learned breathing patterns, chronic stress",
          "Hyperthyroidism, cardiac conditions"
        ],
        games: [
          {
            title: "Calm Breathing Journey",
            description: "Meditative adventure game where proper breathing techniques guide the player through calming environments",
            instructions: "Navigate peaceful landscapes using controlled breathing, practice box breathing exercises (4-4-4-4 pattern)",
            goal: "Reduce anxiety symptoms, establish calming breathing patterns, and provide portable anxiety management tools",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "4-7-8 Breathing Protocol",
            description: "Structured breathing exercise program based on Dr. Andrew Weil's anxiety-reduction technique",
            instructions: "Inhale for 4 counts, hold for 7 counts, exhale for 8 counts with guided timing and visual cues",
            goal: "Activate parasympathetic nervous system, reduce anxiety, and improve sleep quality",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            duration: "5-10 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Diaphragmatic Breathing",
        description: "Master proper diaphragmatic breathing technique for improved oxygen efficiency",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Pursed Lip Breathing",
        description: "Practice controlled exhalation techniques for better airway pressure",
        image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Breathing Pattern Training",
        description: "Advanced breathing rhythm exercises for respiratory muscle coordination",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-25 min"
      }
    ],
    games: [
      {
        title: "Breath Control Adventure",
        description: "Use your breathing to control game characters and complete challenges",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Rhythm Breathing Game",
        description: "Match your breathing patterns to musical rhythms and melodies",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Lung Capacity Challenge",
        description: "Progressive breathing exercises to build respiratory strength and endurance",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-25 min"
      }
    ],
    gettingStarted: [
      "Complete our respiratory assessment to evaluate your breathing patterns",
      "Begin with basic diaphragmatic breathing exercises for 5-10 minutes daily",
      "Practice pursed lip breathing techniques during daily activities",
      "Use breathing games during stress or anxiety episodes",
      "Monitor your peak flow readings and track improvement over time"
    ]
  },
  "posture-balance": {
    title: "Posture & Balance",
    emoji: "⚖️",
    description: "Comprehensive balance training and postural rehabilitation programs designed to improve stability, spatial orientation, and prevent falls through vestibular and proprioceptive exercises.",
    overview: "Posture and balance involve complex interactions between the vestibular, visual, and proprioceptive systems. Disorders in these systems can significantly impact mobility, independence, and quality of life. Early intervention and targeted rehabilitation can greatly improve outcomes and reduce fall risk.",
    conditions: [
      {
        name: "Vestibular Disorders",
        description: "Vestibular disorders affect the inner ear's balance organs, causing dizziness, vertigo, balance problems, and spatial orientation difficulties. These conditions can significantly impact daily activities and increase fall risk.",
        causes: [
          "BPPV (Benign Paroxysmal Positional Vertigo) from displaced otoconia",
          "Vestibular Neuritis from viral inflammation of vestibular nerve",
          "Meniere's Disease from endolymphatic hydrops causing episodic vertigo",
          "Bilateral Vestibular Loss from ototoxic medications, infections, aging",
          "Head trauma or concussion",
          "Age-related vestibular degeneration"
        ],
        games: [
          {
            title: "Balance Reaction Training",
            description: "Dynamic balance challenge game using phone tilt sensors and visual feedback for vestibular compensation training",
            instructions: "Tilt phone to control character movement while standing, include head movement challenges with visual targets, practice balance reactions to unexpected perturbations",
            goal: "Promote vestibular compensation, improve balance reactions, and reduce fall risk",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Gaze Stabilization Challenge",
            description: "Head movement exercises with visual target tracking to improve vestibulo-ocular reflex",
            instructions: "Keep eyes focused on target while moving head in various directions and speeds",
            goal: "Improve gaze stability during head movements and reduce motion-induced dizziness",
            image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Habituation Training Simulator",
            description: "Virtual reality environments designed to trigger and habituate vestibular symptoms",
            instructions: "Navigate through challenging visual environments while maintaining balance and orientation",
            goal: "Reduce sensitivity to motion and visual stimuli through systematic exposure",
            image: "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      },
      {
        name: "Postural Deviations (Kyphosis, Scoliosis)",
        description: "Postural deviations involve abnormal spinal curvatures that can affect breathing, mobility, and self-image. Early intervention can prevent progression and improve quality of life through targeted exercises and awareness training.",
        causes: [
          "Idiopathic factors (unknown cause, most common in adolescent scoliosis)",
          "Congenital vertebral malformations present at birth",
          "Neuromuscular conditions (cerebral palsy, muscular dystrophy, spina bifida)",
          "Degenerative changes from aging and osteoporosis",
          "Poor postural habits and muscle imbalances",
          "Genetic predisposition"
        ],
        games: [
          {
            title: "Posture Perfect Challenge",
            description: "Real-time posture monitoring game using camera-based posture analysis with corrective feedback",
            instructions: "Maintain correct posture alignment to score points, include various daily activity simulations, provide immediate feedback for postural deviations",
            goal: "Increase postural awareness, strengthen supportive muscles, and develop better movement habits",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Spinal Alignment Trainer",
            description: "Interactive exercises targeting specific postural muscle groups with biofeedback",
            instructions: "Perform strengthening exercises for weak postural muscles while monitoring form and progress",
            goal: "Strengthen postural muscles, improve spinal alignment, and prevent curve progression",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=400&h=300&fit=crop",
            duration: "20-25 min"
          },
          {
            title: "Movement Pattern Optimizer",
            description: "Daily activity simulation with proper body mechanics training",
            instructions: "Practice correct lifting, sitting, and standing techniques with real-time feedback",
            goal: "Develop proper movement patterns and reduce stress on spinal structures",
            image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=300&fit=crop",
            duration: "10-15 min"
          }
        ]
      },
      {
        name: "Elderly Balance Issues",
        description: "Age-related balance decline results from changes in multiple sensory systems, muscle strength, and cognitive processing, significantly increasing fall risk and reducing independence. Comprehensive training can maintain function and confidence.",
        causes: [
          "Sensory changes including vision decline, vestibular aging, proprioception loss",
          "Musculoskeletal factors like muscle weakness, joint stiffness, bone density loss",
          "Neurological changes including slower reaction times and cognitive changes",
          "Medical factors such as medications, chronic conditions, and fear of falling",
          "Environmental hazards and reduced physical activity",
          "Age-related changes in balance system integration"
        ],
        games: [
          {
            title: "Gentle Stability Training",
            description: "Low-risk balance games designed specifically for elderly users with comprehensive safety features",
            instructions: "Practice weight shifting and stepping reactions safely, include dual-task challenges (balance + cognitive tasks), provide chair or wall support options",
            goal: "Improve balance confidence, maintain independence, and reduce fall risk",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Tai Chi Balance Master",
            description: "Virtual Tai Chi instructor with slow, controlled movements for balance improvement",
            instructions: "Follow guided Tai Chi movements focusing on weight shifting, coordination, and mindful movement",
            goal: "Improve dynamic balance, flexibility, and fall prevention through traditional practices",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=400&h=300&fit=crop",
            duration: "20-30 min"
          },
          {
            title: "Functional Movement Simulator",
            description: "Practice common daily activities with balance challenges and safety coaching",
            instructions: "Simulate sit-to-stand, reaching, and walking tasks with progressive difficulty levels",
            goal: "Maintain functional independence and build confidence in daily activities",
            image: "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Vestibular Rehabilitation Protocol",
        description: "Systematic habituation and adaptation exercise program based on Cawthorne-Cooksey principles",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Spinal Alignment Training",
        description: "Targeted exercise program for postural muscle strengthening and spinal mobility improvement",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68e71?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "20-25 min"
      },
      {
        title: "Fall Prevention Exercise Program",
        description: "Evidence-based exercise program incorporating strength, balance, and flexibility training for older adults",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "25-30 min"
      }
    ],
    games: [
      {
        title: "Balance Reaction Training",
        description: "Dynamic balance challenge game using motion sensors for vestibular training",
        image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Posture Perfect Challenge",
        description: "Real-time posture monitoring with camera-based analysis and feedback",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "15-20 min"
      },
      {
        title: "Gentle Stability Training",
        description: "Low-risk balance games with safety features for elderly users",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "15-20 min"
      }
    ],
    gettingStarted: [
      "Complete our balance and posture assessment to identify specific risk factors",
      "Start with gentle stability exercises and progress gradually",
      "Practice vestibular rehabilitation exercises daily for optimal results",
      "Use posture monitoring games during work or daily activities",
      "Track your balance confidence and functional improvements over time"
    ]
  },
  "neurological-disorders": {
    title: "Neurological Disorders",
    emoji: "🧠⚡",
    description: "Specialized therapeutic games and exercises for neurological conditions affecting cognitive function, motor control, and sensory processing.",
    overview: "Neurological disorders affect the central and peripheral nervous systems, impacting cognitive function, motor control, and sensory processing. These conditions often require specialized therapeutic interventions that adapt to fluctuating symptoms and progressive changes in neurological function.",
    conditions: [
      {
        name: "Multiple Sclerosis (MS)",
        description: "Multiple Sclerosis is a chronic autoimmune disease where the immune system attacks the protective myelin sheath covering nerve fibers, causing communication problems between the brain and body. This demyelination leads to unpredictable symptoms that can vary widely between individuals and fluctuate over time.",
        causes: [
          "Autoimmune response targeting myelin",
          "Genetic predisposition combined with environmental factors",
          "Potential viral triggers (Epstein-Barr virus, other infections)",
          "Vitamin D deficiency",
          "Geographic factors (higher prevalence in areas farther from equator)"
        ],
        games: [
          {
            title: "Gentle Brain-Stimulation Puzzles",
            description: "Adaptive cognitive games featuring pattern recognition, memory tasks, and problem-solving activities designed specifically for MS-related cognitive challenges",
            instructions: "Games automatically adjust difficulty based on user performance and fatigue levels. Built-in break reminders appear every 15-20 minutes. Users can pause instantly without penalty",
            goal: "Maintain cognitive function while managing fatigue through neuroplasticity stimulation",
            image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Fatigue-Aware Memory Games",
            description: "Short-burst memory exercises (3-5 minutes) focusing on working memory, attention, and processing speed",
            instructions: "Games track cognitive load and suggest rest periods. Progress is measured over weeks rather than individual sessions",
            goal: "Preserve cognitive reserve and combat MS-related brain fog",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            duration: "3-5 min"
          }
        ]
      },
      {
        name: "Stroke Recovery",
        description: "Stroke occurs when blood supply to part of the brain is interrupted or reduced, preventing brain tissue from receiving oxygen and nutrients. This can result in cognitive, motor, and speech impairments depending on the affected brain region. Recovery involves neuroplasticity-based rehabilitation.",
        causes: [
          "Ischemic stroke (blocked blood vessel - 80% of cases)",
          "Hemorrhagic stroke (bleeding in brain - 20% of cases)",
          "Risk factors: hypertension, diabetes, atrial fibrillation, smoking, age",
          "Transient ischemic attacks (mini-strokes) as warning signs"
        ],
        games: [
          {
            title: "Reaction Time Recovery Games",
            description: "Progressive reaction-based activities starting with simple visual cues and advancing to complex multi-modal responses",
            instructions: "Begin with single-stimulus tasks (tap when circle appears), progress to choice reactions (different responses for different colors), then to complex sequences",
            goal: "Restore cognitive processing speed and reaction time",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Attention Restoration Games",
            description: "Divided attention tasks combining visual tracking, auditory processing, and motor responses",
            instructions: "Start with focused attention (track one moving object), progress to divided attention (track multiple objects while responding to sounds)",
            goal: "Rebuild sustained and divided attention capabilities",
            image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      },
      {
        name: "Epilepsy",
        description: "Epilepsy is a neurological disorder characterized by recurrent, unprovoked seizures due to abnormal electrical activity in the brain. Management requires careful consideration of potential triggers, including visual stimuli, stress, and sleep deprivation.",
        causes: [
          "Genetic factors and inherited syndromes",
          "Head trauma and traumatic brain injury",
          "Brain infections (meningitis, encephalitis)",
          "Stroke and vascular malformations",
          "Brain tumors or structural abnormalities",
          "Metabolic disorders and developmental disabilities",
          "Unknown causes (idiopathic epilepsy - 50% of cases)"
        ],
        games: [
          {
            title: "Non-Flashing Puzzle Games",
            description: "Carefully designed cognitive puzzles with static visuals, avoiding rapid changes, flashing lights, or high contrast patterns",
            instructions: "Games feature gentle transitions, muted colors, and no sudden visual changes. Emergency stop feature immediately accessible",
            goal: "Provide cognitive stimulation without seizure risk",
            image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Stress-Reduction Brain Games",
            description: "Calming logic puzzles and pattern-based games with soothing backgrounds and gentle audio",
            instructions: "Games incorporate breathing cues and relaxation prompts. Session length automatically limited to prevent overstimulation",
            goal: "Maintain cognitive engagement while reducing stress-induced seizure triggers",
            image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=300&fit=crop",
            duration: "8-12 min"
          }
        ]
      },
      {
        name: "Brain Injury Recovery (TBI)",
        description: "Traumatic Brain Injury results from external forces causing brain dysfunction. Recovery involves complex rehabilitation addressing cognitive, physical, and emotional impairments. Neuroplasticity-based interventions are crucial for maximizing recovery potential.",
        causes: [
          "Falls (leading cause in older adults and young children)",
          "Motor vehicle accidents",
          "Sports-related injuries",
          "Violence and assault",
          "Military combat injuries",
          "Penetrating head injuries",
          "Blast injuries"
        ],
        games: [
          {
            title: "Simplified Motor-Cognitive Multitaskers",
            description: "Games combining basic motor tasks (tapping, swiping) with cognitive challenges (counting, pattern recognition)",
            instructions: "Start with single-task activities, gradually introduce dual-task scenarios. Motor demands remain simple while cognitive complexity increases",
            goal: "Restore integrated brain function through multitasking practice",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Attention Reconstruction Games",
            description: "Hierarchical attention training from basic alertness to complex divided attention",
            instructions: "Progress from simple detection tasks to sustained attention, then selective and divided attention challenges",
            goal: "Systematically rebuild attention networks damaged by brain injury",
            image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Fatigue Management Training",
        description: "Interactive modules teaching energy conservation, pacing strategies, and activity prioritization",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Cognitive Rehabilitation Exercises",
        description: "Structured protocols targeting specific cognitive domains affected by neurological conditions",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-25 min"
      },
      {
        title: "Dual-Task Training",
        description: "Combined cognitive-motor exercises mimicking real-world demands",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Cognitive Flexibility Training",
        description: "Structured exercises targeting executive function, attention switching, and mental flexibility",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-25 min"
      },
      {
        title: "Executive Function Training",
        description: "Structured exercises targeting planning, problem-solving, inhibition, and working memory",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-30 min"
      },
      {
        title: "Seizure Management Training",
        description: "Educational modules covering seizure recognition, safety protocols, and emergency procedures",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "15-20 min"
      }
    ],
    games: [
      {
        title: "Brain Plasticity Puzzles",
        description: "Adaptive cognitive games that adjust to neurological symptoms and fatigue levels",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Reaction Recovery Challenge",
        description: "Progressive reaction time games for stroke and brain injury recovery",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "12-18 min"
      },
      {
        title: "Safe Cognitive Training",
        description: "Seizure-safe brain games with carefully controlled visual elements",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "8-15 min"
      },
      {
        title: "Multi-Task Rehabilitation",
        description: "Combined cognitive-motor challenges for comprehensive brain injury recovery",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "15-25 min"
      }
    ],
    gettingStarted: [
      "Complete our neurological assessment to understand your specific condition and symptoms",
      "Start with fatigue management training to learn pacing strategies",
      "Begin with gentle cognitive exercises adapted to your energy levels",
      "Progress gradually based on your symptoms and recovery goals",
      "Track your cognitive performance and adjust difficulty as needed",
      "Coordinate with your healthcare team for comprehensive rehabilitation"
    ]
  },
  "pain-management": {
    title: "Pain Management",
    emoji: "🩹",
    description: "Evidence-based digital therapeutics for chronic pain management through distraction, relaxation, education, and skill-building techniques.",
    overview: "Chronic pain affects millions worldwide and requires multifaceted management approaches. Digital therapeutics can provide accessible, evidence-based interventions that complement traditional pain management strategies through distraction, relaxation, and skill-building techniques.",
    conditions: [
      {
        name: "Chronic Back Pain",
        description: "Chronic back pain persists for more than three months and can significantly impact quality of life, mobility, and psychological well-being. Management typically involves a combination of physical therapy, pain education, and psychological interventions.",
        causes: [
          "Herniated or bulging discs",
          "Spinal stenosis and degenerative disc disease",
          "Muscle strain and ligament sprains",
          "Arthritis and inflammatory conditions",
          "Poor posture and ergonomic factors",
          "Psychological factors (stress, depression, anxiety)",
          "Obesity and physical deconditioning"
        ],
        games: [
          {
            title: "Mindfulness & Breathing Games",
            description: "Interactive guided meditation and breathing exercises with visual feedback and progress tracking",
            instructions: "Follow breathing patterns shown on screen, practice body scanning techniques, and engage in mindful movement activities",
            goal: "Develop pain coping strategies through mindfulness and stress reduction",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            duration: "10-20 min"
          },
          {
            title: "Posture Awareness Games",
            description: "Educational games teaching proper body mechanics and posture principles through interactive scenarios",
            instructions: "Virtual scenarios demonstrate correct lifting, sitting, and movement patterns with real-time feedback",
            goal: "Prevent pain flare-ups through improved body awareness and mechanics",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            duration: "15-25 min"
          }
        ]
      },
      {
        name: "Migraine",
        description: "Migraine is a complex neurological condition characterized by recurrent headaches often accompanied by nausea, vomiting, and sensitivity to light and sound. Management involves both prevention and acute treatment strategies.",
        causes: [
          "Genetic predisposition and family history",
          "Hormonal changes (estrogen fluctuations)",
          "Dietary triggers (caffeine, alcohol, aged cheeses, MSG)",
          "Environmental factors (bright lights, strong odors, weather changes)",
          "Sleep disturbances and irregular sleep patterns",
          "Stress and emotional factors",
          "Physical factors (poor posture, jaw clenching)"
        ],
        games: [
          {
            title: "Low-Light Relaxation Games",
            description: "Specially designed games with minimal visual stimulation, dark backgrounds, and gentle transitions",
            instructions: "Games feature adjustable brightness, eliminate flashing elements, and include audio-only options for severe light sensitivity",
            goal: "Provide engagement during migraine episodes without triggering symptoms",
            image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=400&h=300&fit=crop",
            duration: "5-15 min"
          },
          {
            title: "Trigger Tracking Games",
            description: "Gamified journaling system for identifying personal migraine triggers and patterns",
            instructions: "Daily logging of food, sleep, stress, weather, and activities with pattern analysis and predictive features",
            goal: "Enable proactive migraine prevention through trigger identification",
            image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
            duration: "5-10 min"
          }
        ]
      },
      {
        name: "Fibromyalgia",
        description: "Fibromyalgia is characterized by widespread musculoskeletal pain, fatigue, and tenderness in localized areas. The condition often coexists with sleep disorders, mood disturbances, and cognitive difficulties (\"fibro fog\").",
        causes: [
          "Central sensitization and altered pain processing",
          "Genetic factors and family history",
          "Physical or emotional trauma",
          "Infections and autoimmune disorders",
          "Sleep disorders and chronic fatigue",
          "Stress and psychological factors",
          "Gender (affects women disproportionately)"
        ],
        games: [
          {
            title: "Distraction-based Pain Relief Games",
            description: "Engaging puzzles and immersive activities designed to redirect attention from pain sensations",
            instructions: "Games adapt to energy levels and cognitive capacity. Sessions can be paused without penalty, with gentle reminder systems",
            goal: "Provide pain distraction and mood improvement through cognitive engagement",
            image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
            duration: "10-30 min"
          },
          {
            title: "Energy Management Games",
            description: "Interactive tools for learning pacing strategies and energy conservation techniques",
            instructions: "Virtual scenarios teach activity pacing, rest planning, and energy budgeting with personalized recommendations",
            goal: "Optimize daily functioning through energy management skills",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            duration: "15-20 min"
          }
        ]
      },
      {
        name: "Phantom Limb Pain",
        description: "Phantom limb pain occurs when individuals experience pain sensations in an amputated limb. This complex condition involves reorganization of the somatosensory cortex and requires specialized treatment approaches including mirror therapy and virtual reality interventions.",
        causes: [
          "Cortical reorganization following amputation",
          "Peripheral nerve damage and neuroma formation",
          "Spinal cord changes and central sensitization",
          "Psychological factors and grief responses",
          "Pre-amputation pain experiences",
          "Surgical factors and healing complications"
        ],
        games: [
          {
            title: "Mirror Therapy Simulation",
            description: "Virtual reality or screen-based mirror therapy games that create the illusion of limb presence and movement",
            instructions: "Use intact limb movements to control virtual representation of missing limb. Gradual progression from simple to complex movements",
            goal: "Reduce phantom limb pain through neural retraining and cortical reorganization",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
            duration: "15-25 min"
          },
          {
            title: "Virtual Limb Rehabilitation",
            description: "Immersive virtual reality experiences allowing control and interaction with virtual prosthetic limbs",
            instructions: "Practice virtual limb movements, object manipulation, and functional activities in safe virtual environments",
            goal: "Facilitate adaptation to limb loss and reduce phantom sensations",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
            duration: "20-30 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Gentle Movement Therapy",
        description: "Guided exercise programs focusing on core strengthening, flexibility, and safe movement patterns",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "15-25 min"
      },
      {
        title: "Pain Education Modules",
        description: "Interactive learning sessions about pain science, gate control theory, and pain management strategies",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-20 min"
      },
      {
        title: "Migraine Prevention Exercises",
        description: "Comprehensive relaxation and stress reduction techniques designed to reduce migraine frequency",
        image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-30 min"
      },
      {
        title: "Biofeedback Training",
        description: "Interactive training modules teaching self-regulation of physiological responses",
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "20-25 min"
      },
      {
        title: "Phantom Limb Rehabilitation",
        description: "Comprehensive program combining mirror therapy, visualization, and sensory retraining techniques",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "25-35 min"
      },
      {
        title: "Sensory Discrimination Training",
        description: "Exercises designed to retrain sensory processing and reduce abnormal phantom sensations",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-30 min"
      }
    ],
    games: [
      {
        title: "Mindful Pain Relief",
        description: "Guided meditation and breathing exercises with visual feedback",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-20 min"
      },
      {
        title: "Distraction Puzzle Suite",
        description: "Engaging cognitive games designed to redirect attention from pain",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-30 min"
      },
      {
        title: "Virtual Reality Pain Management",
        description: "Immersive VR experiences for pain distraction and therapeutic intervention",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-40 min"
      }
    ],
    gettingStarted: [
      "Complete our pain assessment to understand your specific pain patterns",
      "Start with gentle movement exercises and basic pain education",
      "Practice mindfulness and breathing techniques daily",
      "Use distraction games during pain flare-ups",
      "Track your pain levels and identify personal triggers",
      "Gradually progress to more advanced therapeutic exercises"
    ]
  },
  "chronic-illness": {
    title: "Chronic Illness Support",
    emoji: "🏥",
    description: "Digital health interventions providing continuous support, education, and monitoring tools for chronic condition management and improved quality of life.",
    overview: "Chronic illnesses require ongoing management and lifestyle adaptations. Digital health interventions can provide continuous support, education, and monitoring tools that empower individuals to take active roles in their health management while improving quality of life.",
    conditions: [
      {
        name: "Diabetes Management",
        description: "Diabetes mellitus is a group of metabolic disorders characterized by high blood glucose levels. Type 1 diabetes results from insulin deficiency, while Type 2 diabetes involves insulin resistance. Both require careful management of blood glucose, diet, exercise, and medication.",
        causes: [
          "Type 1: Autoimmune destruction of insulin-producing beta cells",
          "Type 1: Genetic predisposition and environmental triggers",
          "Type 2: Insulin resistance and progressive beta cell dysfunction",
          "Type 2: Obesity and metabolic syndrome",
          "Type 2: Genetic factors and family history",
          "Type 2: Sedentary lifestyle and poor diet",
          "Age and ethnic predisposition"
        ],
        games: [
          {
            title: "Stress Relief Puzzle Games",
            description: "Calming cognitive games designed to reduce stress levels that can negatively impact blood glucose control",
            instructions: "Short, engaging puzzle sessions with mindfulness elements. Games include breathing reminders and relaxation prompts",
            goal: "Support diabetes management through stress reduction and improved glucose control",
            image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Glucose Pattern Recognition Games",
            description: "Educational games teaching blood glucose pattern identification and trend analysis",
            instructions: "Interactive scenarios presenting glucose data patterns with guided analysis and interpretation exercises",
            goal: "Improve glucose monitoring skills and pattern recognition for better diabetes management",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            duration: "15-20 min"
          }
        ]
      },
      {
        name: "Hypertension Management",
        description: "Hypertension (high blood pressure) is a chronic condition where blood pressure remains consistently elevated. Often called the 'silent killer,' it significantly increases the risk of heart disease, stroke, and kidney damage if left unmanaged.",
        causes: [
          "Essential hypertension (unknown cause - 90-95% of cases)",
          "Secondary hypertension (kidney disease, endocrine disorders)",
          "Lifestyle factors (high sodium intake, obesity, physical inactivity)",
          "Stress and psychological factors",
          "Genetic predisposition",
          "Age and gender factors",
          "Smoking and excessive alcohol consumption"
        ],
        games: [
          {
            title: "Blood Pressure Calming Games",
            description: "Relaxation-focused games incorporating breathing exercises and stress reduction techniques",
            instructions: "Guided breathing patterns with visual feedback, progressive muscle relaxation activities, and mindfulness exercises",
            goal: "Support blood pressure management through stress reduction and relaxation",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Heart Health Education Games",
            description: "Interactive learning games about cardiovascular health, risk factors, and protective behaviors",
            instructions: "Quiz-based learning with immediate feedback, scenario-based decision making, and health goal setting",
            goal: "Increase cardiovascular health knowledge and promote heart-healthy behaviors",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      },
      {
        name: "Arthritis Management",
        description: "Arthritis encompasses over 100 conditions affecting joints and surrounding tissues. The most common forms are osteoarthritis (wear-and-tear arthritis) and rheumatoid arthritis (autoimmune condition). Management focuses on pain relief, maintaining joint function, and preventing progression.",
        causes: [
          "Osteoarthritis: Age-related cartilage deterioration",
          "Osteoarthritis: Joint overuse and repetitive stress",
          "Osteoarthritis: Obesity and mechanical stress",
          "Osteoarthritis: Previous joint injuries and genetic factors",
          "Rheumatoid Arthritis: Autoimmune system dysfunction",
          "Rheumatoid Arthritis: Genetic predisposition (HLA genes)",
          "Rheumatoid Arthritis: Environmental triggers and hormonal factors",
          "Smoking and infections"
        ],
        games: [
          {
            title: "Gentle Finger Movement Games",
            description: "Low-impact games requiring minimal finger movements to maintain joint mobility and strength",
            instructions: "Touch-based games with adjustable sensitivity, gentle tapping activities, and range-of-motion exercises disguised as gameplay",
            goal: "Maintain joint mobility and reduce arthritis stiffness through gentle movement",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Joint Protection Education Games",
            description: "Interactive learning games teaching joint protection principles and techniques",
            instructions: "Scenario-based learning about proper body mechanics, joint protection strategies, and adaptive equipment use",
            goal: "Prevent joint damage through education and behavior modification",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            duration: "15-20 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Diabetes Self-Management Training",
        description: "Comprehensive education modules covering all aspects of diabetes self-care",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "20-25 min"
      },
      {
        title: "Hypertension Management Exercises",
        description: "Comprehensive stress reduction and lifestyle modification programs",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "15-20 min"
      },
      {
        title: "Joint Mobility Exercises",
        description: "Gentle range-of-motion and strengthening exercises for arthritic joints",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "15-20 min"
      },
      {
        title: "Lifestyle Modification Training",
        description: "Structured programs for implementing sustainable lifestyle changes",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "25-30 min"
      }
    ],
    games: [
      {
        title: "Stress Relief Puzzle Games",
        description: "Calming cognitive games designed to reduce stress levels",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      },
      {
        title: "Blood Pressure Calming Games",
        description: "Relaxation-focused games with breathing exercises",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "15-20 min"
      },
      {
        title: "Gentle Finger Movement Games",
        description: "Low-impact games for maintaining joint mobility",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "10-15 min"
      }
    ],
    gettingStarted: [
      "Complete our chronic illness assessment to identify your specific condition needs",
      "Start with stress reduction games to support overall health management",
      "Begin condition-specific exercises based on your primary diagnosis",
      "Practice self-management training modules consistently",
      "Track your symptoms and progress with our integrated monitoring tools",
      "Gradually increase activity levels as your condition stabilizes"
    ]
  },
  "emotional-behavioral": {
    title: "Emotional & Behavioral Health",
    emoji: "🧘",
    description: "Digital mental health interventions providing accessible, evidence-based therapeutic tools for anxiety, depression, stress management, and behavioral wellness.",
    overview: "Mental and behavioral health conditions significantly impact daily functioning and quality of life. Digital mental health interventions can provide accessible, evidence-based therapeutic tools that complement traditional mental health care while offering continuous support and skill development opportunities.",
    conditions: [
      {
        name: "Anxiety & Depression",
        description: "Anxiety and depression are common mental health conditions that frequently co-occur. Anxiety involves excessive worry and fear responses, while depression is characterized by persistent sadness, loss of interest, and cognitive changes.",
        causes: [
          "Genetic predisposition and family history",
          "Brain chemistry imbalances (neurotransmitters)",
          "Trauma and adverse life experiences",
          "Medical conditions and medications",
          "Substance use and withdrawal",
          "Personality factors and thinking patterns",
          "Environmental factors (stress, loss, major life changes)"
        ],
        games: [
          {
            title: "Mood Tracking Games",
            description: "Interactive mood monitoring systems with engaging feedback and pattern recognition features",
            instructions: "Daily mood ratings with contextual factors, trend analysis, and personalized insights with gamified progress tracking",
            goal: "Increase mood awareness and identify patterns for better self-management",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
            duration: "5-10 min"
          },
          {
            title: "Anxiety Coping Games",
            description: "Interactive games teaching anxiety management strategies through experiential learning",
            instructions: "Practice breathing techniques through rhythm games, grounding exercises through sensory games, and cognitive restructuring through puzzle-solving",
            goal: "Build anxiety management skills through engaging, practical skill practice",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            duration: "10-15 min"
          },
          {
            title: "Cognitive Restructuring Games",
            description: "Games designed to identify and challenge negative thought patterns",
            instructions: "Interactive scenarios presenting negative thoughts with guided analysis and alternative thinking exercises",
            goal: "Develop cognitive flexibility and reduce negative thinking patterns",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
            duration: "15-20 min"
          }
        ]
      },
      {
        name: "Stress Management",
        description: "Chronic stress results from prolonged exposure to stressors that exceed an individual's coping resources. It can lead to physical health problems, mental health issues, and impaired daily functioning.",
        causes: [
          "Work-related pressures and job demands",
          "Financial difficulties and economic concerns",
          "Relationship conflicts and social stressors",
          "Health problems and chronic illness",
          "Major life changes and transitions",
          "Time management and organizational challenges",
          "Perfectionism and unrealistic expectations"
        ],
        games: [
          {
            title: "Stress Relief Mini-Games",
            description: "Quick, accessible games providing immediate stress relief through various mechanisms",
            instructions: "Short 3-5 minute games including breathing exercises, progressive muscle relaxation, mindfulness activities, and distraction techniques",
            goal: "Provide immediate stress relief tools for acute stress management",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            duration: "3-5 min"
          },
          {
            title: "Time Management Games",
            description: "Interactive games teaching prioritization, scheduling, and organizational skills",
            instructions: "Virtual scenarios requiring task prioritization, time allocation, and stress management under time pressure",
            goal: "Develop organizational skills to reduce stress from time management challenges",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
            duration: "10-15 min"
          }
        ]
      },
      {
        name: "Sleep Disorders",
        description: "Sleep disorders encompass various conditions that affect sleep quality, timing, and duration. Common disorders include insomnia, sleep apnea, and circadian rhythm disorders.",
        causes: [
          "Stress and anxiety affecting sleep onset",
          "Medical conditions (sleep apnea, restless leg syndrome)",
          "Medications and substances affecting sleep",
          "Environmental factors (noise, light, temperature)",
          "Poor sleep hygiene and irregular schedules",
          "Shift work and circadian rhythm disruption",
          "Mental health conditions (depression, anxiety)"
        ],
        games: [
          {
            title: "Sleep Hygiene Games",
            description: "Interactive education about sleep hygiene principles with gamified routine establishment",
            instructions: "Daily sleep routine tracking with challenges and rewards for maintaining good sleep habits",
            goal: "Improve sleep quality through better sleep hygiene practices",
            image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop",
            duration: "5-10 min"
          },
          {
            title: "Bedtime Relaxation Games",
            description: "Calming games specifically designed for pre-sleep use",
            instructions: "Progressive relaxation activities, gentle visualization exercises, and mindfulness practices with dimming visuals and calming audio",
            goal: "Facilitate transition to sleep through relaxation",
            image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&h=300&fit=crop",
            duration: "10-15 min"
          }
        ]
      },
      {
        name: "Social Anxiety",
        description: "Social anxiety disorder involves intense fear of social situations due to concerns about embarrassment, judgment, or rejection. It can significantly impact daily functioning, relationships, and career opportunities.",
        causes: [
          "Genetic predisposition and temperamental factors",
          "Learned behaviors and social conditioning",
          "Negative social experiences and trauma",
          "Brain structure and chemistry differences",
          "Cultural and environmental factors",
          "Parenting styles and early social experiences",
          "Cognitive biases and negative self-perception"
        ],
        games: [
          {
            title: "Virtual Social Practice Games",
            description: "Safe virtual environments for practicing social interactions with graduated exposure levels",
            instructions: "Start with simple virtual conversations, progress to group interactions, and advance to challenging social scenarios with immediate feedback",
            goal: "Build social confidence and skills through safe practice opportunities",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
            duration: "15-20 min"
          },
          {
            title: "Social Skills Training Games",
            description: "Interactive games teaching specific social communication skills",
            instructions: "Practice reading facial expressions, interpreting social cues, conversation skills, and assertiveness training through game-based scenarios",
            goal: "Develop specific social skills to reduce anxiety in social situations",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
            duration: "12-18 min"
          }
        ]
      }
    ],
    exercises: [
      {
        title: "Cognitive Behavioral Therapy Exercises",
        description: "Structured CBT protocols including thought challenging, behavioral activation, and mood monitoring",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "15-20 min"
      },
      {
        title: "Mindfulness-Based Interventions",
        description: "Progressive mindfulness exercises, meditation practices, and mindful daily living applications",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "20-25 min"
      },
      {
        title: "Stress Management Training",
        description: "Training modules on relaxation techniques, cognitive strategies, time management, and lifestyle modifications",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "18-25 min"
      },
      {
        title: "Resilience Building Exercises",
        description: "Exercises focusing on cognitive flexibility, social support development, and adaptive coping strategies",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "20-30 min"
      },
      {
        title: "Sleep Improvement Exercises",
        description: "Progressive muscle relaxation, visualization techniques, breathing exercises, and sleep restriction therapy principles",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "15-20 min"
      },
      {
        title: "Social Skills Training",
        description: "Progressive skill-building modules covering conversation skills, nonverbal communication, and social problem-solving",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "20-25 min"
      }
    ],
    games: [
      {
        title: "Mood Tracking Dashboard",
        description: "Gamified mood monitoring with insights and pattern recognition",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "5-10 min"
      },
      {
        title: "Breathing Rhythm Games",
        description: "Musical breathing exercises for anxiety and stress relief",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        difficulty: "Beginner",
        duration: "5-10 min"
      },
      {
        title: "Mindfulness Garden",
        description: "Virtual garden tending with mindfulness practice integration",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&h=300&fit=crop",
        difficulty: "Intermediate",
        duration: "10-15 min"
      },
      {
        title: "Social Confidence Builder",
        description: "Virtual reality social scenarios for anxiety exposure therapy",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
        difficulty: "Advanced",
        duration: "15-20 min"
      }
    ],
    gettingStarted: [
      "Complete our mental health screening to identify primary concerns",
      "Start with mood tracking exercises to establish baseline patterns",
      "Practice daily breathing and mindfulness techniques",
      "Gradually introduce cognitive restructuring exercises",
      "Track progress and adjust interventions based on outcomes"
    ]
  },
};