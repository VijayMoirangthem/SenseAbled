import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: "blue" | "green" | "purple" | "orange";
}

const colorVariants = {
  blue: "from-therapeutic-blue/20 to-primary/10 border-therapeutic-blue/30",
  cyan: "from-therapeutic-cyan/20 to-secondary/10 border-therapeutic-cyan/30",
  purple: "from-therapeutic-purple/20 to-therapeutic-purple/10 border-therapeutic-purple/30",
  orange: "from-therapeutic-orange/20 to-therapeutic-orange/10 border-therapeutic-orange/30",
};

const iconColors = {
  blue: "text-therapeutic-blue",
  cyan: "text-therapeutic-cyan", 
  purple: "text-therapeutic-purple",
  orange: "text-therapeutic-orange",
};

export function CategoryCard({ title, description, icon: Icon, href, color }: CategoryCardProps) {
  return (
    <Card className={`group hover:shadow-hover transition-all duration-300 bg-gradient-to-br ${colorVariants[color]} hover:scale-105 border-2`}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-background/50 group-hover:scale-110 transition-transform">
            <Icon className={`w-6 h-6 ${iconColors[color]}`} />
          </div>
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm text-muted-foreground mb-4 min-h-[2.5rem]">
          {description}
        </CardDescription>
        <Button 
          asChild 
          className="w-full group/btn bg-gradient-primary hover:opacity-90 shadow-therapeutic"
        >
          <Link to={href}>
            Explore Category
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}