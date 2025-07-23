import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import category data
import { categoryData } from "@/data/categoryData";

export function ConditionDetailPage() {
  const { categoryId, conditionId } = useParams<{ categoryId: string; conditionId: string }>();
  
  // Ensure we have valid IDs
  if (!categoryId || !conditionId) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Error: Missing Information</h1>
        <p className="text-muted-foreground mb-8">Category or condition information is missing.</p>
        <Link to="/categories">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
        </Link>
      </div>
    );
  }
  
  // Find the category and condition
  const category = categoryData[categoryId as keyof typeof categoryData];
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-muted-foreground mb-8">The category you're looking for doesn't exist.</p>
        <Link to="/categories">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Button>
        </Link>
      </div>
    );
  }

  // Get condition data using index
  const conditionIndex = parseInt(conditionId);
  
  if (isNaN(conditionIndex) || conditionIndex < 0 || conditionIndex >= category.conditions.length) {
    // Invalid condition index
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Condition Not Found</h1>
        <p className="text-muted-foreground mb-8">The condition you're looking for doesn't exist in this category.</p>
        <Link to={`/categories/${categoryId}`}>
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {category.title}
          </Button>
        </Link>
      </div>
    );
  }

  // Get the condition data
  const condition = category.conditions[conditionIndex];
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-primary border-b">
        <div className="container mx-auto px-4 py-8">
          <Link to={`/categories/${categoryId}`} className="inline-flex items-center text-primary-foreground hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {category.title}
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold text-primary-foreground mb-2">
                {condition.name}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {category.title} Condition
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Condition Overview */}
        <section className="animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-6">Condition Overview</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {condition.description}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Causes */}
        <section className="animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-6">Common Causes</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="list-disc pl-6 space-y-2">
                {condition.causes.map((cause, index) => (
                  <li key={index} className="text-muted-foreground">{cause}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Condition-specific Games */}
        <section className="animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-6">Therapeutic Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {condition.games.map((game, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-hover transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{game.title}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-1">Instructions:</h4>
                      <p className="text-sm text-muted-foreground">{game.instructions}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">Goal:</h4>
                      <p className="text-sm text-muted-foreground">{game.goal}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">{game.duration}</span>
                      <Link to={`/categories/${categoryId}/conditions/${conditionId}/games/${encodeURIComponent(game.title)}`}>
                        <Button size="sm">
                          <Play className="mr-2 h-4 w-4" />
                          Start Game
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ConditionDetailPage;