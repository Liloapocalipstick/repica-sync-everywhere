import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-background">
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-ai-blue" />
        <div>
          <h1 className="text-xl font-semibold text-foreground">
            Learn AI by Doing—Visually
          </h1>
          <p className="text-sm text-gray-500">Interactive LLM Pipeline Visualization</p>
        </div>
      </div>
      
      <nav className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          Learn
        </Button>
        <Button variant="outline" size="sm">
          Quiz
        </Button>
        <Button variant="ai-primary" size="sm">
          Sign In for AI
        </Button>
        <div className="px-3 py-1 bg-secondary rounded-full">
          <span className="text-xs font-medium text-secondary-foreground">
            Educational Tool
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;