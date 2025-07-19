import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Gift, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  score: number;
  total: number;
  onRestart: () => void;
  className?: string;
}

export function ResultCard({ score, total, onRestart, className }: ResultCardProps) {
  const percentage = (score / total) * 100;
  const hasWon = percentage >= 70;

  return (
    <Card className={cn("w-full max-w-2xl mx-auto shadow-festive", className)}>
      <CardContent className="p-8 text-center">
        <div className={cn(
          "w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center",
          hasWon ? "bg-gradient-party animate-pulse-party" : "bg-muted"
        )}>
          {hasWon ? (
            <Trophy className="w-12 h-12 text-white" />
          ) : (
            <Gift className="w-12 h-12 text-muted-foreground" />
          )}
        </div>

        <h2 className="text-3xl font-bold mb-4">
          {hasWon ? "🎉 Parabéns! 🎉" : "😅 Quase lá!"}
        </h2>

        <p className="text-xl mb-2">
          Você acertou <span className="font-bold text-primary">{score}</span> de{" "}
          <span className="font-bold">{total}</span> questões
        </p>

        <p className="text-lg mb-6 text-muted-foreground">
          Sua pontuação: <span className="font-bold">{percentage.toFixed(1)}%</span>
        </p>

        {hasWon ? (
          <div className="bg-gradient-celebration p-6 rounded-lg mb-6 border border-primary/20">
            <h3 className="text-xl font-bold text-primary mb-2">
              🥩 Vale Churrasco Conquistado! 🥩
            </h3>
            <p className="text-foreground">
              Você ganhou um <span className="font-bold">vale churrasco de R$ 50,00</span>!
              <br />
              Entre em contato para resgatar seu prêmio.
            </p>
          </div>
        ) : (
          <div className="bg-muted p-6 rounded-lg mb-6">
            <p className="text-muted-foreground">
              Você precisava de pelo menos <span className="font-bold">70%</span> para ganhar o vale churrasco.
              <br />
              Que tal tentar novamente?
            </p>
          </div>
        )}

        <Button
          onClick={onRestart}
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Jogar Novamente
        </Button>
      </CardContent>
    </Card>
  );
}