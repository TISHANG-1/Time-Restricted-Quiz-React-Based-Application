import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';
import { useDispatch } from 'react-redux';
import { getEmail } from '../../actions/emailAction';

const StartPage = () => {
  // State to manage the user's email input
  const [email, setEmail] = useState('');

  // React Router hook to navigate to different pages
  const navigate = useNavigate();

  // Redux dispatch function for an action to store the email
  const dispatch = useDispatch();

  // Function to handle form submission
  const submit = () => {
    // Dispatch the 'getEmail' action with the email as payload
    dispatch(getEmail(email));
    
    // Navigate to the 'QuizPage' route
    navigate('/QuizPage');
  };

  return (
    <div className='box-container'>
      <div className='box-email'>
        <div>Take A Test !!!! Quiz Time</div>
        <div>Created By: Tishang Prajapati</div>
        <label htmlFor='email'></label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)} // Update 'email' state on input change
          placeholder='Enter your Email'
        />
        <button type='submit' className='nav-button' onClick={() => submit()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default StartPage;
