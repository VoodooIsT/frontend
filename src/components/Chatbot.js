// Chatbot.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, nextStep, setCalendarDate, setTimeSlot } from '../slices/chatboatSlice';
import { setName, setAge, setEnrolled } from '../slices/userSlice';
import Calendar from './Calendar';
import TimeSlot from './TimeSlot';
import UserInfoForm from './UserInfoForm';

const Chatbot = () => {
  const dispatch = useDispatch();
  const chatbot = useSelector((state) => state.chatbot);
  const user = useSelector((state) => state.user);
  const [userInput, setUserInput] = useState('');
  const [countdown, setCountdown] = useState(5);
  const [userInputs, setUserInputs] = useState([]);
const [gotItClicked, setGotItClicked] = useState(false);


const handleGotItClick = () => {
    setGotItClicked(true);
    dispatch(nextStep());
}

  const handleUserResponse = (response) => {
    dispatch(addMessage({ type: 'user', text: response }));
    setUserInputs([...userInputs, response]);

    switch (chatbot.step) {
      case 1:
        
        handleGotItClick()
        break;
      case 2:
        if (isValidDate(response)) {
          dispatch(setCalendarDate(response));
          dispatch(nextStep());
        } else {
          dispatch(addMessage({ type: 'bot', text: 'Invalid date format. Please select a valid date.' }));
        }
        break;
      case 3:
        if (isValidTimeSlot(response)) {
          dispatch(setTimeSlot(response));
          dispatch(nextStep());
        } else {
          dispatch(addMessage({ type: 'bot', text: 'Invalid time slot. Please select a valid time slot.' }));
        }
        break;
      case 4:
        dispatch(setName(response));
        dispatch(nextStep());
        break;
      case 5:
        dispatch(setAge(response));
        startCountdown();
        break;
      default:
        break;
    }
  };

  const startCountdown = () => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      dispatch(setEnrolled());
      dispatch(nextStep());
    }
  };

  useEffect(() => {
    dispatch(addMessage({ type: 'bot', text: 'Hello, Welcome to student info system!' }));
  }, []);

  return (
    <div className="chatbot">
      <div className="messages">
        {chatbot.messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="user-input">
        {chatbot.step === 1 && !gotItClicked && (
          <button onClick={handleGotItClick}>Got It</button>
        )}
        {
            chatbot.step <=5 && (
                <>
                    <input
                        type="text"
                        placeholder="Type your response..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <button onClick={() => handleUserResponse(userInput)}>Send</button>
                </>
            )
        }
        {chatbot.step === 2 && (
          <Calendar onSelect={handleUserResponse} />
        )}
        {chatbot.step === 3 && (
          <TimeSlot onSelect={handleUserResponse} />
        )}
        {chatbot.step === 4 && (
          <UserInfoForm onFormSubmit={handleUserResponse} />
        )}
        {chatbot.step === 5 && (
          <div className="countdown">
            {countdown > 0 ? countdown : 'Exiting...'}
          </div>
        )}
      </div>
      {chatbot.step > 5 && (
            <div className="user-info">
            <h2>Your name: {user.name}</h2>
            <h2>Your age: {user.age}</h2>
            </div>
      )}
    </div>
  )
      }

export default Chatbot;

// Replace these with your validation functions
function isValidDate(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
}

function isValidTimeSlot(slot) {
    const validTimeSlots = ['Morning (9AM - 12PM)', 'Afternoon (1PM - 4PM)', 'Evening (5PM - 8PM)'];
    return validTimeSlots.includes(slot);
}

