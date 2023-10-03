// EnrollmentButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { nextStep } from '../slices/chatboatSlice';
import { useNavigate } from 'react-router-dom';

const EnrollmentButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleEnrollClick = () => {
    // Dispatch the nextStep action to start the chatbot
    dispatch(nextStep());
    navigate('/chatboat');
  };

  return (
    <div className="enrollment-button">
      <h2>Enter into Student Info System</h2>
      <button onClick={handleEnrollClick}>Enroll Now!</button>
    </div>
  );
};

export default EnrollmentButton;
