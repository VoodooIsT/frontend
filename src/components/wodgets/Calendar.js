// Calendar.js
import React, { useState } from 'react';

const Calendar = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = [
      {
        text: '15-10-2023',
        handler: props.actionProvider.handleDateSelect,
        id: 1
      },
      {
        text: '16-10-2023',
        handler: props.actionProvider.handleDateSelect,
        id: 2
      },
      {
        text: '17-10-2023',
        handler: props.actionProvider.handleDateSelect,
        id: 3
      }

  ];

  const datesMark = dates.map((date) => (
    <button
      key={date.id}
      className={selectedDate === date ? 'bg-blue-800 text-white rounded-md p-2 hover:cursor-pointer' : 'border border-blue-700 p-2 hover:cursor-pointer'}
      onClick={date.handler}
    >
      {date.text}
    </button>
  ))



  return (
    <div className="flex flex-col m-2">
      <h2>Pick a Date</h2>
      <ul className='flex flex-wrap'>
        {datesMark}
      </ul>
    </div>
  );
};

export default Calendar;
