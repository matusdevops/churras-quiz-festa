export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é a comida favorita do aniversariante?",
    options: [
      "Pizza",
      "Churrasco",
      "Lasanha",
      "Hambúrguer"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Em que mês o aniversariante faz aniversário?",
    options: [
      "Janeiro",
      "Março",
      "Julho",
      "Dezembro"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Qual é o hobby favorito do aniversariante?",
    options: [
      "Ler livros",
      "Assistir filmes",
      "Jogar videogame",
      "Cozinhar"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Qual é a cor favorita do aniversariante?",
    options: [
      "Azul",
      "Verde",
      "Vermelho",
      "Roxo"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Qual é o animal de estimação preferido do aniversariante?",
    options: [
      "Gato",
      "Cachorro",
      "Pássaro",
      "Peixe"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Qual é o filme favorito do aniversariante?",
    options: [
      "Ação",
      "Comédia",
      "Terror",
      "Romance"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Qual é a bebida favorita do aniversariante?",
    options: [
      "Refrigerante",
      "Suco natural",
      "Café",
      "Cerveja"
    ],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "Qual é o destino de viagem dos sonhos do aniversariante?",
    options: [
      "Praia",
      "Montanhas",
      "Cidade grande",
      "Campo"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Qual é o esporte preferido do aniversariante?",
    options: [
      "Futebol",
      "Basquete",
      "Tênis",
      "Natação"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Qual é a música favorita do aniversariante?",
    options: [
      "Rock",
      "Pop",
      "Sertanejo",
      "Eletrônica"
    ],
    correctAnswer: 2
  }
];