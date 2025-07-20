export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Em que ano você nasceu?",
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
    question: "Qual é o seu estilo musical favorito?",
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
    question: "Qual é o seu teatro favorito?",
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
    question: "Qual é a sua carne favorita?",
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
    question: "Qual é o seu hobby favorito?",
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
    question: "Qual é o seu animal de estimação favorito?",
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
    question: "Qual é o gênero do seu filme favorito?",
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
    question: "Qual é a sua bebida favorita?",
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
    question: "Qual é o seu destino de viagem dos sonhos?",
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
    question: "Qual é a sua linguagem de programação favorita?",
    options: [
      "Python",
      "JavaScript",
      "Java",
      "C++"
    ],
    correctAnswer: 1
  }
];