import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  showResult?: boolean;
  correctAnswer?: number;
  className?: string;
}

export function QuizCard({
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
  showResult = false,
  correctAnswer,
  className
}: QuizCardProps) {
  return (
    <Card className={cn("w-full max-w-2xl mx-auto shadow-festive", className)}>
      <CardContent className="p-8">
        <h3 className="text-xl font-bold text-foreground mb-6 text-center">
          {question}
        </h3>
        <div className="space-y-3">
          {options.map((option, index) => {
            let buttonVariant: "default" | "secondary" | "destructive" = "secondary";
            let extraClasses = "";

            if (showResult && correctAnswer !== undefined) {
              if (index === correctAnswer) {
                buttonVariant = "default";
                extraClasses = "bg-success hover:bg-success border-success";
              } else if (index === selectedAnswer && index !== correctAnswer) {
                buttonVariant = "destructive";
                extraClasses = "animate-shake";
              }
            } else if (selectedAnswer === index) {
              buttonVariant = "default";
            }

            return (
              <Button
                key={index}
                variant={buttonVariant}
                className={cn(
                  "w-full text-left justify-start h-auto py-4 px-6 text-wrap",
                  extraClasses,
                  selectedAnswer === index && !showResult && "animate-pulse-party"
                )}
                onClick={() => !showResult && onSelectAnswer(index)}
                disabled={showResult}
              >
                <span className="font-medium mr-3">{String.fromCharCode(65 + index)})</span>
                {option}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}