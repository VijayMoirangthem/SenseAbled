import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categoryData } from "@/data/categoryData";

const categoryIcons: { [key: string]: any } = {
  "eyes-vision": "👁️",
  "ears-hearing": "👂",
  "mind-cognition": "🧠",
  "speech-voice": "🗣️",
  "motor-movement": "🏃",
  "touch-sensory": "👐",
  "breathing-respiratory": "🫁",
  "posture-balance": "🧍",
  "neurological-disorders": "⚡",
  "pain-management": "🛡️",
  "chronic-illness": "🏥",
  "emotional-behavioral": "❤️",
};

export function CategoryDetailPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  if (!categoryId || !categoryData[categoryId]) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">Category not found</h1>
        <p className="mt-4">The category you're looking for doesn't exist.</p>
        <Button asChild className="mt-6">
          <Link to="/categories">Back to Categories</Link>
        </Button>
      </div>
    );
  }

  const category = categoryData[categoryId];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/categories">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-4xl font-bold">
            <span className="mr-2">{categoryIcons[categoryId]}</span>
            {category.title}
          </h1>
        </div>

        {/* Category Overview */}
        <section className="animate-fade-in">
          <div className="max-w-3xl">
            <p className="text-xl text-muted-foreground mb-6">{category.description}</p>
            <div className="bg-card rounded-lg p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-foreground leading-relaxed">{category.overview}</p>
            </div>
          </div>
        </section>

        {/* Common Conditions */}
        <section className="animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-6">Common Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.conditions.map((condition, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{condition.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{condition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{condition.games.length} Activities</Badge>
                    <Button asChild>
                      <Link to={`/categories/${categoryId}/conditions/${index}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Getting Started Guide */}
        <section className="animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-6">Getting Started Guide</h2>
          <Card>
            <CardHeader>
              <CardTitle>How to Begin Your {category.title} Journey</CardTitle>
              <CardDescription>
                Follow these steps to get the most out of your therapeutic experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {category.gettingStarted.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-foreground leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default CategoryDetailPage;