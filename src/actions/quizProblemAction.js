import { ALL_PROBLEM_FAIL, ALL_PROBLEM_SUCCESS, ALL_PROBLEM_REQUEST, CLEAR_ERROR } from "../constant/quizProblemConstant";    
import axios from "axios" ; 

// Action to fetch quiz problems
export const getQuizProblem = () => async (dispatch) => { 
  // Dispatch an action to indicate that the request is in progress
  dispatch({ type: ALL_PROBLEM_REQUEST });

  // Define the API endpoint for fetching quiz problems
  let link = `https://opentdb.com/api.php?amount=15`;

  try {
    // Send a GET request to the API
    const response = await axios.get(link);

    // Dispatch an action with the received data on success
    dispatch({
      type: ALL_PROBLEM_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    // Dispatch an action with the error message on failure
    dispatch({
      type: ALL_PROBLEM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Action to clear errors in the state
export const clearErrors = () => async (dispatch) => {
  // Dispatch an action to clear errors
  dispatch({ type: CLEAR_ERROR });
};
