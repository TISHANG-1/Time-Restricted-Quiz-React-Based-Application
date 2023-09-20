import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EndPage.css';  
import { useSelector } from 'react-redux';

const EndPage = () => {
  // Get the location data passed from the previous page
  const location = useLocation();
  const data = location.state;

  // Extract marked options and correct answers from the location data
  const markedOptionsCombine = data.markedOptions;
  const correctAnswers = data.questionData;   

  // React Router hook for navigation
  const navigate = useNavigate() ;   

  // Get the email from Redux state
  const {email } = useSelector(state=>state.email);  

  return (
    <div className='box-container'>  
      {/* Display email and user's total score */}
      <div className='score-card'>Email: "{email.email}" Your Total Score {data.score} / 15</div>  

      {/* Map through correct answers and marked options to display results */}
      {correctAnswers.map((question, index) => {
        const isCorrect = markedOptionsCombine[index] === question.correct_answer;

        return (
          <div
            key={index}
            className={`question-card ${isCorrect ? 'correct' : 'wrong'}`}
          >
            <p className='question-text'>{question.question}</p>
            <p className='answer'>
              <strong>Correct Answer:</strong> {question.correct_answer}
            </p>
            <p className={`user-answer ${isCorrect ? 'correct' : 'wrong'}`}>
              <strong>Your Answer:</strong> {markedOptionsCombine[index]}
            </p>
          </div>
        );
      })}    

      {/* Button to navigate back to the main page */}
      <button className='nav-buttons' onClick={()=>{navigate('/')}}>Take another Quiz</button>
    </div>
  );
};

export default EndPage;
