import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Shield, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { SearchBar } from "@/components/SearchBar";

export function HomePage() {
  const features = [
    {
      icon: Heart,
      title: "Therapeutic Excellence",
      description: "Evidence-based exercises designed by healthcare professionals for optimal rehabilitation outcomes."
    },
    {
      icon: Shield,
      title: "Accessibility First",
      description: "WCAG 2.1 AA compliant design ensuring equal access for users with diverse abilities and needs."
    },
    {
      icon: Users,
      title: "Personalized Experience",
      description: "Adaptive interfaces that adjust to individual sensory preferences and therapeutic requirements."
    },
    {
      icon: Zap,
      title: "Gamified Training",
      description: "Engaging, interactive exercises that make therapy enjoyable while tracking meaningful progress."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Diverse people using adaptive technology in a therapeutic setting"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Empowering Lives Through
              <br />
              <span className="text-secondary">Therapeutic Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              SenseAbled combines cutting-edge technology with evidence-based therapy to create 
              personalized rehabilitation experiences for individuals with sensory and physical impairments.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90 shadow-therapeutic text-lg px-8 py-3">
                <Link to="/categories">
                  Explore Categories
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 border-2">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose SenseAbled?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform is built with accessibility, effectiveness, and user experience at its core.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="text-center hover:shadow-hover transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Comprehensive Therapeutic Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our 12 specialized categories designed to address diverse therapeutic needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-hover transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  👁️ Eyes & Vision
                </CardTitle>
                <CardDescription>
                  Visual acuity training, eye movement exercises, and color vision enhancement programs.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-hover transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  🧠 Mind & Cognition
                </CardTitle>
                <CardDescription>
                  Memory training, attention enhancement, and cognitive rehabilitation exercises.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-hover transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  🦿 Motor Skills & Movement
                </CardTitle>
                <CardDescription>
                  Fine and gross motor skill development through interactive movement training.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" asChild className="bg-gradient-secondary hover:opacity-90 shadow-therapeutic">
              <Link to="/categories">
                View All 12 Categories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Therapeutic Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who have enhanced their quality of life through our personalized therapy platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
              <Link to="/register">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-medium">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}