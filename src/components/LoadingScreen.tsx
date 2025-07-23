import { Loader2, Brain, Eye, Ear } from "lucide-react";

interface LoadingScreenProps {
  message?: string;
}

export function LoadingScreen({ message = "Loading your therapeutic experience..." }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <div className="relative">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <Loader2 className="w-20 h-20 animate-spin text-primary" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                <Brain className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mb-6">
            <Eye className="w-8 h-8 text-primary/60 animate-bounce" style={{ animationDelay: '0ms' }} />
            <Ear className="w-8 h-8 text-primary/60 animate-bounce" style={{ animationDelay: '200ms' }} />
            <Brain className="w-8 h-8 text-primary/60 animate-bounce" style={{ animationDelay: '400ms' }} />
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">SenseAbled</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{message}</p>
        </div>
        
        <div className="w-64 mx-auto bg-muted rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-primary animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}