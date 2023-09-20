import {createStore, combineReducers , applyMiddleware} from "redux" ;

import thunk from "redux-thunk" ; 
import {composeWithDevTools} from "redux-devtools-extension" ; 
import {emailReducer} from "./reducers/emailReducer" ; 
import {quizProblemReducer} from "./reducers/quizProblemReducer.js" ;  

const reducer = combineReducers({
     email: emailReducer, 
     quizProblem: quizProblemReducer
}) ; 
let initialState = { 
  
 

}
const middleware = [thunk]  ; 
const store = createStore(reducer , initialState , composeWithDevTools(applyMiddleware(...middleware))) ;   

export default store; 