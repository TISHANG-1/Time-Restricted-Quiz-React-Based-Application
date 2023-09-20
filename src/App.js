import './App.css';

import {BrowserRouter as Router } from "react-router-dom" ; 
import {Route , Routes} from "react-router-dom" ;     
import QuizPage  from './component/QuizPage/QuizPage'   ;   
import StartPage from './component/StartPage/StartPage' ; 

import React, { useEffect, useState }  from "react"; 
import EndPage from './component/EndPage/EndPage';

function App() {  
 

  useEffect(()=>{ } ,[]); 
  return (
      <Router>      
      


      <Routes> 
     <Route path ="/" Component={StartPage}/>
     <Route path="/QuizPage" Component={QuizPage}/>
     <Route path ='/end-page'  Component={EndPage}/>
      
     </Routes>
     </Router>
  );
}

export default App;
