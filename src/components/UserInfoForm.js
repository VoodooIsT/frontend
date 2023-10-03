// UserInfoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName, setAge } from '../slices/userSlice';

const UserInfoForm = ({ onFormSubmit }) => {
  const dispatch = useDispatch();
  const [name, setNameValue] = useState('');
  const [age, setAgeValue] = useState('');

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAgeValue(e.target.value);
  };

  const handleSubmit = () => {
    if (name && age) {
      dispatch(setName(name));
      dispatch(setAge(age));
      onFormSubmit(); // Callback to notify the parent component (Chatbot)
    }
  };

  return (
    <div className="user-info-form">
      <h2>Enter your information</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <select id="age" value={age} onChange={handleAgeChange}>
          <option value="">Select Age</option>
          {generateAgeOptions(18, 40)} {/* Generate age options from 18 to 40 */}
        </select>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

const generateAgeOptions = (minAge, maxAge) => {
  const options = [];
  for (let age = minAge; age <= maxAge; age++) {
    options.push(<option key={age} value={age}>{age}</option>);
  }
  return options;
};

export default UserInfoForm;
