const questions = [
  {
    id: 1,
    question: "Veja o vídeo acima para saber quantas comparações são realizadas pelos algoritmos e como é o desempenho de cada algoritmo ao ordenar alguns dados.",
    isVideo: true,
      video:{
        name:null,
        url:"1vX-lDPScynLvDWJEpovZ-5wy6ENON8k1"
      },
    options: [
      { id: 1, text: "Já assisti!", answerIndex: true },
    ]
  },
    {
      id: 2,
      question: "De acordo com o vídeo, qual método de ordenação foi o mais rápido?",
      image: {
        name:null,
        url:"l4q1_a"
      },
      options: [
        { id: 1, text: "Quicksort", answerIndex: true },
        { id: 2, text: "Insertion Sort", answerIndex: false},
        { id: 3, text: "Ambos foram equivalentes", answerIndex: false },
        { id: 4, text: "Nenhum é bom o suficiente", answerIndex: true },
      ]
    },
    {
        id: 3,
        question: "De acordo com o vídeo, qual método de ordenação demanda mais comparações?",
        image: {
            name:null,
            url:"l4q2_a"
          },
        options: [
          { id: 1, text: "Quicksort", answerIndex: false},
          { id: 2, text: "Insertion Sort", answerIndex: true},
          { id: 3, text: "Ambos foram equivalentes", answerIndex: false },
          { id: 4, text: "Nenhum é bom o suficiente", answerIndex: true },
        ]
      },
      {
        id: 4,
        question: "É bem mais fácil encontrar informações quando elas estão ordenadas. Você já imaginou como seria difícil encontrar o significado de uma palavra de uma palavra em um dicionário se as palavras não estivessem em ordem alfabética?",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l4q3_a"
          },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 5,
        question: "Por isso é importante a utilização da ordenação, pois facilita a localização de uma informação especifica e também a identificação de informações duplicadas (ex: um nome que aparece mais de uma vez em uma lista)",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l4q3_b"
          },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 6,
        question: "Os  computadores gastam muito tempo ordenando as coisas. Para fazer isso de forma mais rápida, eles devem ser programados. Deve-se especificar o passo a passo que será seguido para resolver o problema na ordenação.",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l4q3_c"
          },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 7,
        question: "Vimos que a ordenação pode ser feita de várias formas. Essas formas de ordenar são chamadas de algoritmos de ordenação. Vimos, por exemplo, no Nível 2 o algoritmo de ordenação por inserção (Insertion Sort) e no Nível 3 o algoritmo de ordenação rápida ou Quicksort.",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l4q3_d"
          },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 8,
        question: "A ordenação por inserção pode ser um dos métodos mais lentos, porém ele pode ser útil em situações especiais. Ele pode ser utilizado por exemplo, para colocar listas pequenas em ordem quando já estão quase ordenadas.",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l4q3_e"
          },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 9,
        question: "Você lembra que no método de ordenação Quicksort a gente dividia o conjunto de números em grupos menores e, em seguida ficava repetindo o mesmo passo a passo até o conjunto de números ser ordenado? Esse conceito é chamado de recursão.",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l4q3_f"
          },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 10,
        question: "Você notou que para ordenar com o Quicksort a lista era dividida em partes menores e se aplicava em cada parte o mesmo tipo de ordenação?",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l4q3_g"
          },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 11,
        question: "Lembre que em cada ordenação se escolhia uma carta e se via quais as cartas menores e as maiores que ela até que restasse apenas uma carta. Esse principio de dividir o problema em partes até resolvê-lo por completo é chamado de Divisão e Conquista.",
        isWhiteBackground : true,
        image: {
            name:null,
            url:"l4q3_h"
          },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 12,
        question: "Segundo observamos no vídeo, e segundo estudos da Ciência da Computação, o Quicksort, em geral, é mais rápido que a Ordenação por inserção.",
        image: {
            name:null,
            url:"l4q3_i"
          },
        options: [
          { id: 1, text: "Próximo", answerIndex: true},
        ]
      },
      {
        id: 13,
        question: "Se você tiver de mandar um computador colocar em ordem alfabética 1000 fichas e quiser que isso seja feito mais rápido qual algoritmo utilizaria?",
        image: {
            name:null,
            url:"l4q3_j"
          },
        options: [
          { id: 1, text: "Quicksort", answerIndex: true},
          { id: 2, text: "Insertion Sort", answerIndex: true},
          { id: 3, text: "Ambos foram equivalentes", answerIndex: true},
          { id: 4, text: "Nenhum é bom o suficiente", answerIndex: true},
        ]
      },
  ];
  
  export default questions;
  