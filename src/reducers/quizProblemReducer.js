import { ALL_PROBLEM_FAIL, ALL_PROBLEM_SUCCESS, ALL_PROBLEM_REQUEST, CLEAR_ERROR } from "../constant/quizProblemConstant";

export const quizProblemReducer = (state = { quizProblem: [] }, action) => {
  switch (action.type) {
    // When the action type is 'ALL_PROBLEM_REQUEST', set loading to true and reset quizProblem array
    case ALL_PROBLEM_REQUEST:
      return {
        loading: true,
        quizProblem: [],
      };

    // When the action type is 'ALL_PROBLEM_SUCCESS', update the state with received quiz problems
    case ALL_PROBLEM_SUCCESS:
      return {
        loading: false,
        quizProblem: action.payload.results, // Assuming 'action.payload.results' contains quiz problems
      };

    // When the action type is 'ALL_PROBLEM_FAIL', update the state with an error
    case ALL_PROBLEM_FAIL:
      return {
        loading: false,
        error: action.payload, // Assuming 'action.payload' contains the error information
      };

    // When the action type is 'CLEAR_ERROR', clear any existing error in the state
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    // For any other action type, return the current state
    default:
      return state;
  }
};
