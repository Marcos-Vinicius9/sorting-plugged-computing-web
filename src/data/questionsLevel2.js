const questions = [
  {
    id: 1,
    question: "Observando as cartas, onde você colocaria a carta 2?",
    image: {
      name: null,
      url: "l2q1_a"
    },
    options: [
      { id: 1, text: "A", answerIndex: false },
      { id: 2, text: "B", answerIndex: true},
      { id: 3, text: "C", answerIndex: false },
      { id: 4, text: "D", answerIndex: false },
      { id: 5, text: "E", answerIndex: false }
    ],
  },
  {
    id: 2,
    question: "Observando as cartas, onde você colocaria a carta 6?",
    image:{
      name: null,
      url: "l2q2_a"
    },
    options: [
      { id: 1, text: "A", answerIndex: false },
      { id: 2, text: "B", answerIndex: false},
      { id: 3, text: "C", answerIndex: false },
      { id: 4, text: "D", answerIndex: true},
      { id: 4, text: "E", answerIndex: false }  
    ],
    
  }
];

export default questions;
