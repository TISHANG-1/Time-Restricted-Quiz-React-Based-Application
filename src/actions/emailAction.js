import { CLEAR_ERROR, EMAIL_FAIL, EMAIL_RECIEVED } from "../constant/emailConstant";

// Define an action type to get email address
export const GET_EMAIL_ADDRESS = "GET_EMAIL_ADDRESS";

// Action to get and store the email address
export const getEmail = (email = "") => async (dispatch) => {
  // Dispatch an action to indicate that email retrieval is in progress
  dispatch({ type: GET_EMAIL_ADDRESS });

  try {
    // Dispatch an action with the received email data on success
    dispatch({
      type: EMAIL_RECIEVED,
      email_: { 'email': email },
    });
  } catch {
    // Dispatch an action with an error payload on failure
    dispatch({
      type: EMAIL_FAIL,
      payload: 'error',
    });
  }
};

// Action to clear errors in the state
export const clearError = () => async (dispatch) => {
  // Dispatch an action to clear errors
  dispatch({ type: CLEAR_ERROR });
};
