import { CategoryCard } from "@/components/CategoryCard";
import { 
  Eye, 
  Ear, 
  Brain, 
  MessageCircle, 
  Activity, 
  Hand, 
  Wind, 
  Users, 
  Zap, 
  Shield, 
  Heart,
  Smile
} from "lucide-react";

export function CategoriesPage() {
  const categories = [
    {
      title: "Eyes & Vision",
      description: "Visual acuity training, eye movement exercises, color vision enhancement, and focus improvement programs.",
      icon: Eye,
      href: "/categories/eyes-vision",
      color: "blue" as const
    },
    {
      title: "Ears & Hearing",
      description: "Auditory processing training, hearing enhancement exercises, and sound recognition therapy programs.",
      icon: Ear,
      href: "/categories/ears-hearing",
      color: "blue" as const
    },
    {
      title: "Mind & Cognition",
      description: "Memory training, attention enhancement, cognitive rehabilitation, and mental processing exercises.",
      icon: Brain,
      href: "/categories/mind-cognition",
      color: "purple" as const
    },
    {
      title: "Speech & Voice",
      description: "Speech therapy exercises, pronunciation training, voice modulation, and communication enhancement.",
      icon: MessageCircle,
      href: "/categories/speech-voice",
      color: "orange" as const
    },
    {
      title: "Motor Skills & Movement",
      description: "Fine and gross motor skill development, coordination training, and movement rehabilitation.",
      icon: Activity,
      href: "/categories/motor-movement",
      color: "blue" as const
    },
    {
      title: "Touch & Sensory Feedback",
      description: "Tactile sensitivity training, sensory integration therapy, and touch perception enhancement.",
      icon: Hand,
      href: "/categories/touch-sensory",
      color: "blue" as const
    },
    {
      title: "Breathing & Respiratory",
      description: "Breathing exercises, respiratory training, relaxation techniques, and lung capacity improvement.",
      icon: Wind,
      href: "/categories/breathing-respiratory",
      color: "purple" as const
    },
    {
      title: "Posture & Balance",
      description: "Balance training, posture correction exercises, stability enhancement, and fall prevention.",
      icon: Users,
      href: "/categories/posture-balance",
      color: "orange" as const
    },
    {
      title: "Neurological Disorders",
      description: "Specialized exercises for neurological conditions, neural pathway training, and brain plasticity.",
      icon: Zap,
      href: "/categories/neurological-disorders",
      color: "blue" as const
    },
    {
      title: "Pain Management",
      description: "Pain relief techniques, therapeutic exercises, mindfulness training, and discomfort reduction.",
      icon: Shield,
      href: "/categories/pain-management",
      color: "blue" as const
    },
    {
      title: "Chronic Illness Support",
      description: "Long-term condition management, adaptive strategies, and quality of life improvement programs.",
      icon: Heart,
      href: "/categories/chronic-illness",
      color: "purple" as const
    },
    {
      title: "Emotional & Behavioral Health",
      description: "Emotional regulation, behavioral therapy, stress management, and mental wellness support.",
      icon: Smile,
      href: "/categories/emotional-behavioral",
      color: "orange" as const
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Therapeutic Categories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Discover our comprehensive range of therapeutic categories, each designed to address 
            specific sensory and physical rehabilitation needs through evidence-based exercises and games.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-hero rounded-2xl p-8 animate-fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Need Help Choosing a Category?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our therapeutic specialists can help you identify the most suitable categories 
            for your specific needs and rehabilitation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-all font-medium shadow-therapeutic">
              Get Personalized Assessment
            </button>
            <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-medium">
              Contact a Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}