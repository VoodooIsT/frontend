// TimeSlot.js
import React from 'react';

const TimeSlot = (props) => {

  const timeSlots = [
    {
        text: 'Morning (9-12) AM',
        handler: props.actionProvider.handleTimeSlot,
        id:1
    },
    {
        text: 'Afternoon (1-3) PM',
        handler: props.actionProvider.handleTimeSlot,
        id:2
    },
    {
        text: 'Evening (5-7) PM',
        handler: props.actionProvider.handleTimeSlot,
        id:3
    }
  ];

  const timeSlotSelect = timeSlots.map((time) => (
    <button className='flex px-1 space-x-2 bg-blue-600 rounded-md text-white'
            key={time.id}
            onClick={time.handler}
          >
            {time.text}
          </button>
  ))


  return (
    <div className="flex flex-col items-center ">
      <h2 className='font-bold mb-2'>Pick a Time Slot</h2>
      <ul className='flex gap-x-2 '>
        {timeSlotSelect}
      </ul>

    </div>
  );
};

export default TimeSlot;
