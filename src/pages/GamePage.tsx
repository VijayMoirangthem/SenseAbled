import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categoryData } from "@/data/categoryData";

// Import game components
import { AdaptiveColorVisionChallenge } from "@/games/EyesAndVision";

export function GamePage() {
  const { categoryId, conditionId, gameTitle } = useParams<{ categoryId: string; conditionId: string; gameTitle: string }>();
  
  // Ensure we have valid IDs
  if (!categoryId || !conditionId || !gameTitle) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Error: Missing Information</h1>
        <p className="text-muted-foreground mb-8">Game information is missing.</p>
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
  
  // Find the game by title
  const game = condition.games.find(g => g.title === decodeURIComponent(gameTitle));
  
  if (!game) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Game Not Found</h1>
        <p className="text-muted-foreground mb-8">The game you're looking for doesn't exist for this condition.</p>
        <Link to={`/categories/${categoryId}/conditions/${conditionId}`}>
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {condition.name}
          </Button>
        </Link>
      </div>
    );
  }

  // Render the appropriate game component based on the game title
  const renderGame = () => {
    switch (game.title) {
      case "Adaptive Color Vision Challenge":
        return <AdaptiveColorVisionChallenge />;
      // Add more cases for other games as they are implemented
      default:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Game Not Implemented</h2>
            <p className="text-muted-foreground mb-8">This game is not yet implemented.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-primary border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to={`/categories/${categoryId}/conditions/${conditionId}`} className="inline-flex items-center text-primary-foreground hover:underline mb-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {condition.name}
          </Link>
          
          <h1 className="text-2xl font-bold text-primary-foreground">
            {game.title}
          </h1>
        </div>
      </div>

      {/* Game Container */}
      <div className="container mx-auto px-4 py-8">
        {renderGame()}
      </div>
    </div>
  );
}

export default GamePage;