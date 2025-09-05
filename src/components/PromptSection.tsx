import { useState } from "react";
import { Button } from "@/components/ui/button";

const PromptSection = () => {
  const [prompt, setPrompt] = useState("Explain quantum computing in simple terms");
  
  const quickExamples = [
    "Quantum Computing",
    "Machine Learning", 
    "AI vs ML",
    "Code Request",
    "Creative Writing"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 bg-gray-300 rounded"></div>
          <h2 className="text-xl font-semibold text-card-foreground">Your Prompt</h2>
        </div>
        
        <p className="text-gray-500 mb-6">
          Type your question and watch the real-time tokenization. Then execute the full pipeline.
        </p>
        
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full min-h-[120px] p-4 border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring text-foreground bg-background"
            placeholder="Type your question and watch the real-time tokenization. Then execute the full pipeline."
          />
          <div className="absolute bottom-3 right-3 text-sm text-gray-500">
            {prompt.length} chars
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-sm font-medium text-foreground mb-3">Quick Examples:</p>
          <div className="flex flex-wrap gap-2">
            {quickExamples.map((example, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setPrompt(example.toLowerCase().includes('quantum') ? 
                  "Explain quantum computing in simple terms" : 
                  `Tell me about ${example.toLowerCase()}`
                )}
                className="text-sm"
              >
                {example}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptSection;