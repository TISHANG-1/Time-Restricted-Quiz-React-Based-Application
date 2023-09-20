import { EMAIL_RECIEVED, GET_EMAIL_ADDRESS, EMAIL_FAIL } from "../constant/emailConstant";
import { CLEAR_ERROR } from "../constant/quizProblemConstant";

export const emailReducer = (state = { email: {} }, action) => {
  switch (action.type) {
    // When the action type is 'GET_EMAIL_ADDRESS', set loading to true
    case GET_EMAIL_ADDRESS:
      return {
        loading: true,
      };

    // When the action type is 'EMAIL_RECEIVED', update the state with received email data
    case EMAIL_RECIEVED:
      return {
        loading: false,
        email: action.email_, // Assuming 'action.email_' contains the email data
      };

    // When the action type is 'EMAIL_FAIL', update the state with an error
    case EMAIL_FAIL:
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
