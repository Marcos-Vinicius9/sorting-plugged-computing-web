const questions = [
    {
      id: 1,
      question: "Observando as cartas acima, quais são menores que a carta número 4?",
      image:{
        name: null,
        url: "l3q1_a"
      },
      options: [
        { id: 1, text: "2, 3, 1", answerIndex: true },
        { id: 2, text: "4, 2, 7", answerIndex: false },
        { id: 3, text: "2, 3, 5", answerIndex: false },
        { id: 4, text: "6, 5, 7", answerIndex: false }
      ]
    },
    {
        id: 2,
        question: "As cartas menores ficam à esquerda e as maiores ficam à direita da carta número 4.",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l3q2_a"
        },
        options: [
          { id: 1, text: "Próximo", answerIndex: true },
        ]
      },
      {
        id: 3,
        question: "Considerando o grupo à esquerda da carta 4, vamos sortear outra vez uma das cartas. Por exemplo: suponha que a carta sorteada seja a carta de número 2. ",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l3q2_b"
        },
        options: [
          { id: 1, text: "Próximo", answerIndex: true },
        ]
      },
      {
        id: 4,
        question: "Observando as cartas acima, qual a carta que ficará à direita da carta 2?",
        image: {
            name:null,
            url:"l3q2_c"
        },
        options: [
          { id: 1, text: "3", answerIndex: true },
          { id: 2, text: "1", answerIndex: false },
          { id: 3, text: "Nenhuma das opções", answerIndex: false},
          { id: 4, text: "Qualquer uma das opções", answerIndex: false },

        ]
      },
      {
        id: 6,
        question: "Segundo o método de ordenação que estamos utilizando, os números menores ficam à esquerda e os números maiores ficam à direita. ",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l3q3_a"
        },
        options: [
          { id: 1, text: "Próximo", answerIndex: true },

        ]
      },
      {
        id: 7,
        question: "Observe que os números que estão à esquerda do número 4 já estão ordenados. Agora só precisamos ordenar os números que estão à direita do número 4.",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l3q3_b"
        },
        options: [
          { id: 1, text: "Próximo", answerIndex: true },

        ]
      },
      {
        id: 8,
        question: "Observando as cartas acima, qual carta ficará à esquerda da carta 5?",
        image: {
            name:null,
            url:"l3q3_c"
        },
        options: [
          { id: 1, text: "6", answerIndex: false },
          { id: 2, text: "7", answerIndex: false},
          { id: 3, text: "Nenhuma das opções", answerIndex: true},
          { id: 4, text: "Qualquer uma das opções", answerIndex: false },

        ]
      },
      {
        id: 9,
        question: "Segundo o método de ordenação que estamos utilizando, os números menores ficam à esquerda e os maiores ficam à direita. Portanto as cartas 6 e 7 ficaram a direita da carta 5 e nenhuma carta ficará à esquerda. ",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l3q4_a"
        },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 10,
        question: "Considerando o grupo que restou, vamos sortear outra vez uma das cartas. Por exemplo: suponha que a carta sorteada seja a carta número 7. ",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l3q4_b"
        },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 11,
        question: "Observando as cartas acima, qual carta ficaria à esquerda da carta 7?",
        image: {
            name:null,
            url:"l3q4_c"
        },
        options: [
          { id: 1, text: "6", answerIndex: true},
          { id: 2, text: "Nenhuma carta", answerIndex: false},
          { id: 3, text: "É preciso inserir uma outra carta", answerIndex: false},
          { id: 4, text: "A posição atual está correta", answerIndex: false},
        ]
      },
      {
        id: 12,
        question: "Observe agora que todas as cartas estão ordenadas",
        isWhiteBackground : true,
        image:{
            name:null,
            url:"l3q5_a"
        },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 13,
        question: "Você notou que vai sorteando uma carta e depois compara cada uma das cartas restantes com ela para descobrir em qual posição irá colocar a carta. Veja o vídeo acima para aprender mais sobre o método de ordenação Quicksort.",
        isWhiteBackground : true,
        isVideo: true,
        video:{
          name:null,
          url:"tSHbD278PDU"
        },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
  ];
  
  export default questions;
  