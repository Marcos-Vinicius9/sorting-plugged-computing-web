import React, { useState } from 'react';
import { AppWrapper, QuizWrapper } from './questionScreenStyled';
import questions from '../../data/questions';
import Congratulations from '../Congratulations/congratulations';


const Quiz = (props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (selectedAnswerIndex) => {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswerIndex === currentQuestion.options.findIndex((option) => option.answerIndex)) {
      setSelectedAnswer(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setSelectedAnswer(selectedAnswerIndex);
    }
  }

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <QuizWrapper>
        <img src={props.image} alt="" />
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
      <AppWrapper>
        <Congratulations />
      </AppWrapper>
    );
  } else {
    return (
      <AppWrapper>
        {renderQuestion()}
      </AppWrapper>
    );
  }
};

export default Quiz;
