export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Em que ano o aniversariante nasceu?",
    options: [
      "1985",
      "1991",
      "1995",
      "2000"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Qual é o estilo musical favorito do aniversariante?",
    options: [
      "Rock",
      "Pop",
      "Instrumental",
      "Eletrônica"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Qual é o teatro favorito do aniversariante?",
    options: [
      "O Fantasma da Ópera",
      "O Vendedor de Sonhos",
      "Les Misérables",
      "Cats"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Qual é a carne favorita do aniversariante?",
    options: [
      "Frango",
      "Porco",
      "Fígado de boi",
      "Peixe"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Qual é o hobby favorito do aniversariante?",
    options: [
      "Ler livros",
      "Silêncio",
      "Jogar videogames",
      "Caminhar"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Qual é o animal de estimação favorito do aniversariante?",
    options: [
      "Gato",
      "Cachorro",
      "Pássaro",
      "Hamster"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Qual é o gênero de filme favorito do aniversariante?",
    options: [
      "Ação",
      "Drama",
      "Comédia",
      "Terror"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Qual é a bebida favorita do aniversariante?",
    options: [
      "Refrigerante",
      "Suco natural",
      "Café",
      "Cerveja"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Qual é o destino de viagem dos sonhos do aniversariante?",
    options: [
      "Japão",
      "Itália",
      "Espanha",
      "Austrália"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Qual é a linguagem de programação favorita do aniversariante?",
    options: [
      "Python",
      "JavaScript",
      "Java",
      "C++"
    ],
    correctAnswer: 1
  }
];