import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizCard } from "@/components/QuizCard";
import { ProgressBar } from "@/components/ProgressBar";
import { ResultCard } from "@/components/ResultCard";
import { quizQuestions, Question } from "@/data/quizData";
import { Play, Cake } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import birthdayBg from "@/assets/birthday-bg.jpg";

type GameState = "welcome" | "playing" | "result";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showQuestionResult, setShowQuestionResult] = useState(false);
  const { toast } = useToast();

  const handleStartQuiz = () => {
    setGameState("playing");
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(quizQuestions.length).fill(null));
    setSelectedAnswer(null);
    setShowQuestionResult(false);
  };

  const handleSelectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Selecione uma resposta",
        description: "Por favor, escolha uma das opções antes de continuar.",
        variant: "destructive",
      });
      return;
    }

    // Save the answer
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = selectedAnswer;
    setSelectedAnswers(newSelectedAnswers);

    // Show result for current question
    setShowQuestionResult(true);

    // Move to next question or finish quiz after a delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowQuestionResult(false);
      } else {
        setGameState("result");
      }
    }, 2000);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const handleRestart = () => {
    setGameState("welcome");
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(quizQuestions.length).fill(null));
    setSelectedAnswer(null);
    setShowQuestionResult(false);
  };

  if (gameState === "welcome") {
    return (
      <div 
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${birthdayBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Card className="w-full max-w-lg mx-auto shadow-festive bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-party rounded-full flex items-center justify-center animate-bounce-fun">
              <Cake className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-party bg-clip-text text-transparent">
              🎂 Quiz de Aniversário! 🎂
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-foreground">
                Você está convidado(a) para uma festa especial!
              </p>
              <div className="bg-gradient-celebration p-4 rounded-lg border border-primary/20">
                <p className="text-foreground font-medium">
                  🥩 <span className="font-bold">Desafio do Churrasco:</span> 🥩
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Acerte 70% ou mais das perguntas e ganhe um vale churrasco de 50%!
                </p>
              </div>
              <p className="text-muted-foreground">
                São {quizQuestions.length} questões sobre o aniversariante.
                <br />
                Você está preparado(a)?
              </p>
            </div>
            <Button 
              onClick={handleStartQuiz}
              size="lg"
              className="w-full bg-gradient-party hover:opacity-90 shadow-glow"
            >
              <Play className="w-5 h-5 mr-2" />
              Começar o Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (gameState === "playing") {
    const question = quizQuestions[currentQuestion];
    
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto py-8">
          <ProgressBar 
            current={currentQuestion + 1}
            total={quizQuestions.length}
            className="mb-8"
          />
          
          <QuizCard
            question={question.question}
            options={question.options}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleSelectAnswer}
            showResult={showQuestionResult}
            correctAnswer={question.correctAnswer}
            className="mb-8"
          />

          <div className="text-center">
            {!showQuestionResult ? (
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                size="lg"
                className={selectedAnswer !== null ? "bg-gradient-party hover:opacity-90" : ""}
              >
                {currentQuestion === quizQuestions.length - 1 ? "Finalizar Quiz" : "Próxima Questão"}
              </Button>
            ) : (
              <div className="text-lg font-medium">
                {selectedAnswer === question.correctAnswer ? (
                  <span className="text-success">✅ Correto!</span>
                ) : (
                  <span className="text-destructive">❌ Incorreto!</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === "result") {
    const score = calculateScore();
    
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <ResultCard
          score={score}
          total={quizQuestions.length}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return null;
};

export default Index;
