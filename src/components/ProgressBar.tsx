import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressBar({ current, total, className }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="flex justify-between text-sm font-medium text-muted-foreground">
        <span>Questão {current} de {total}</span>
        <span>{percentage.toFixed(0)}%</span>
      </div>
      <Progress 
        value={percentage} 
        className="h-3 bg-muted"
      />
    </div>
  );
}