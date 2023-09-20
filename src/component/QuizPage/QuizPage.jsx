import React, { Fragment } from 'react'
import SideBar from './SideBar/SideBar';  
import { useSelector, useDispatch } from "react-redux" ;
import { BrowserRouter as Router } from "react-router-dom" ; 
import ProblemCard from './Problem/ProblemCard' ; 
import { useEffect, useState } from "react";   
import { getQuizProblem } from '../../actions/quizProblemAction';  
import { clearErrors } from '../../actions/quizProblemAction';
import { useAlert } from 'react-alert'; 
import Timer from './TimerCounter/Timer';  
import { useNavigate } from "react-router-dom";  
import Loader from '../Loader/Loader';  

const QuizPage = () => { 
  // Initialize an array to track visited questions
  const [isRunning , setIsRunning] = useState(1) ;   
  const dispatch = useDispatch() ;   
  const [visitedQuestions, setVisitedQuestions] = useState(Array(15).fill(false));
  const [curr , setCurr] = useState(0) ;    
  const [correctAnswer , setCorrectAnswer] = useState(Array(15).fill(" ")) ; 
  const alert = useAlert() ; 
  
  // Redux state to store quiz problems
  const { quizProblem, error, loading } = useSelector(state => state.quizProblem) ; 
  
  // React Router hook for navigation
  const navigate = useNavigate();
 
  // Fetch quiz problems when the component mounts
  useEffect(() => { 
    if (error) { 
      alert.error(error) ; 
      dispatch(clearErrors()) ; 
    }    
    dispatch(getQuizProblem()) ;  
  }, [])  ;   

  // Update correct answers when quiz problems are loaded
  useEffect(() => {
    if (!(quizProblem === undefined || quizProblem.length === 0)) {  
      const updateCorrectAnswer = Array(15).fill("") ; 
      for (let i = 0; i < 15; i++) { 
        updateCorrectAnswer[i] = quizProblem[i]["correct_answer"] ; 
      }  
      setCorrectAnswer(updateCorrectAnswer) ;
    }
  },  [quizProblem]) ;  

  // Redirect to the end page when the quiz is completed
  useEffect(() => {     
    if (isRunning === 0  &&  quizProblem.length ) { 
      let score = 0  ; 
      for (let i = 0; i < 15 ; i++) { 
        score += (quizProblem[i].correct_answer === markedOptions[i]) ; 
      }
      const data = { questionData: quizProblem, markedOptions: markedOptions , score: score };
      navigate('/end-page' , {state: data});  
    }
  }, [isRunning]) ; 

  // Define initial state for marked questions and marked options
  const [markedQuestions, setMarkedQuestions] = useState(Array(15).fill(false));
  const [markedOptions, setMarkedOption] = useState(Array(15).fill("@un-marked@")) ;   

  return (  
    <Fragment>
      {/* Conditional rendering based on loading state */}
      {(loading === undefined || (loading === true && (quizProblem === undefined || quizProblem.length === 0))) ? (
        <div><Loader/></div>
      ) : (
        <Fragment>   
          {/* Render Sidebar, ProblemCard, and Timer */}
          <SideBar curr={curr} setCurr={setCurr} markedQuestions={markedQuestions} setMarkedQuestions={setMarkedQuestions} visitedQuestions={visitedQuestions} setVisitedQuestions={setVisitedQuestions}/>  

          <ProblemCard questionData={quizProblem} markedQuestions={markedQuestions} setMarkedQuestions={setMarkedQuestions} markedOptions={markedOptions} setMarkedOption={setMarkedOption} pos={curr} setPos={setCurr} visitedQuestions={visitedQuestions} setVisitedQuestions={setVisitedQuestions} isRunning={isRunning} setIsRunning={setIsRunning}/>  
           
          <Timer isRunning={isRunning} setIsRunning={setIsRunning}/>
        </Fragment>
      )} 
    </Fragment>
  );
}

export default QuizPage
