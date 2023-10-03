// Calendar.js
import React, { useState } from 'react';

const Calendar = ({ onSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = [
    '2023-10-15',
    '2023-10-16',
    '2023-10-17',
    // Add more dates as needed
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onSelect(selectedDate); // Call the provided onSelect callback with the selected date
    }
  };

  return (
    <div className="calendar">
      <h2>Pick a Date</h2>
      <ul>
        {dates.map((date) => (
          <li
            key={date}
            className={selectedDate === date ? 'selected' : ''}
            onClick={() => handleDateClick(date)}
          >
            {date}
          </li>
        ))}
      </ul>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default Calendar;
