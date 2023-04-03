import React, { useState } from 'react';
import { AppWrapper, QuizWrapper } from './questionScreenStyled';
import Congratulations from '../Congratulations/congratulations';


const Quiz = (props) => {
  const imagens = {
    l1q1_a: require('../../assets/images/levels/level1/level1_3.png'),

    l2q1_a: require('../../assets/images/levels/level2/level2_4.png'),
    l2q2_a: require('../../assets/images/levels/level2/level2_5.png'),

    l3q1_a: require('../../assets/images/levels/level3/level3_4.png'),

    l3q2_a: require('../../assets/images/levels/level3/level3_5.png'),
    l3q2_b: require('../../assets/images/levels/level3/level3_6.png'),
    l3q2_c: require('../../assets/images/levels/level3/level3_7.png'),

    l3q3_a: require('../../assets/images/levels/level3/level3_8.png'),
    l3q3_b: require('../../assets/images/levels/level3/level3_9.png'),
    l3q3_c: require('../../assets/images/levels/level3/level3_10.png'),

    l3q4_a: require('../../assets/images/levels/level3/level3_11.png'),
    l3q4_b: require('../../assets/images/levels/level3/level3_12.png'),
    l3q4_c: require('../../assets/images/levels/level3/level3_13.png'),

    l3q5_a: require('../../assets/images/levels/level3/level3_14.png'),

    l4q1_a: require('../../assets/images/levels/level4/level4_2.png'),

    l4q2_a: require('../../assets/images/levels/level4/level4_3.png'),

    l4q3_a: require('../../assets/images/levels/level4/level4_4.png'),
    l4q3_b: require('../../assets/images/levels/level4/level4_5.png'),
    l4q3_c: require('../../assets/images/levels/level4/level4_6.png'),
    l4q3_d: require('../../assets/images/levels/level4/level4_7.png'),
    l4q3_e: require('../../assets/images/levels/level4/level4_9.png'),
    l4q3_f: require('../../assets/images/levels/level4/level4_10.png'),
    l4q3_g: require('../../assets/images/levels/level4/level4_11.png'),
    l4q3_h: require('../../assets/images/levels/level4/level4_12.png'),
    l4q3_i: require('../../assets/images/levels/level4/level4_13.png'),
    l4q3_j: require('../../assets/images/levels/level4/level4_14.png'),
  };


  const getImagens = type => imagens[type] || null;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const questions = props.questions;
  
  const level = props.level;

  const showImage = url => {
    if (url) {
      return <img src={getImagens(url)} />;
    }
    return null;
  };

  const showVideo = url =>{
    return <iframe src={`https://drive.google.com/file/d/${url}/preview`} width="640" height="480" allow="autoplay"></iframe>

  }
  


  const handleAnswerClick = (selectedAnswerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswerIndex === currentQuestion.options.findIndex((option) => option.answerIndex)) {
      setSelectedAnswer(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setSelectedAnswer(selectedAnswerIndex);
    }
  }

  const currentQuestion = questions[currentQuestionIndex];
  const renderQuestion = () => {

    return (
      <QuizWrapper>
        {currentQuestion.isVideo ? showVideo(currentQuestion.video.url) : showImage(currentQuestion.image.url)}
        <h2>{currentQuestion.question}</h2>
        <ul>
          {currentQuestion.options.map(({ id, text }, index) => (
            <li key={id}
                onClick={() => handleAnswerClick(index)}
                className={selectedAnswer === index ? 'selected' : ''}>
              {text}
            </li>
          ))}
        </ul>
      </QuizWrapper>
    );
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <AppWrapper style={{backgroundColor:"#F2C824"}}>
        <Congratulations level ={level}/>
      </AppWrapper>
    );
  } else {
    return (
      <AppWrapper style={currentQuestion.isWhiteBackground ? { backgroundColor: "white" } : { backgroundColor: "#F2C824" }}>
        {renderQuestion()}
      </AppWrapper>
    );
  }
};

export default Quiz;
