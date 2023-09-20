import React, { useEffect, useState } from 'react';
import './SideBar.css';

const SideBar = ({curr , setCurr , markedQuestions , setMarkedQuestions , visitedQuestions , setVisitedQuestions}) => {  



  // Initialize an array to track marked questions


  // Function to handle question clicks
  const handleQuestionClick = (index) => {
    // Set the current question
    console.log(curr) ;
    setCurr(index) ;  
    console.log(index) ;
    // Mark the question as visited
    const updatedVisitedQuestions = [...visitedQuestions];
    updatedVisitedQuestions[index] = true;
    setVisitedQuestions(updatedVisitedQuestions);
  };


  useEffect(()=>{} , []) ; 
  return (  
    <div className="container">
      <ul className="sidebar">
        <li className='quesSno'><span>Ques</span></li>
        {Array.from({ length: 15 }, (_, index) => (
          <li
            key={index}
            onClick={() => handleQuestionClick(index)}
            style={{
              backgroundColor: markedQuestions[index]  ? 'green' : visitedQuestions[index] && index !== curr? 'blue' : '#dedede',
            }}

          >
            Q. {index + 1}
          </li>
        ))}
      </ul>
      <div className="content"></div>
    </div>
  );
};

export default SideBar;
