// TimeSlot.js
import React, { useState } from 'react';

const TimeSlot = ({ onSelect }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = [
    'Morning (9AM - 12PM)',
    'Afternoon (1PM - 4PM)',
    'Evening (5PM - 8PM)',
  ];

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConfirm = () => {
    if (selectedSlot) {
      onSelect(selectedSlot); // Call the provided onSelect callback with the selected time slot
    }
  };

  return (
    <div className="time-slot">
      <h2>Pick a Time Slot</h2>
      <ul>
        {timeSlots.map((slot) => (
          <li
            key={slot}
            className={selectedSlot === slot ? 'selected' : ''}
            onClick={() => handleSlotClick(slot)}
          >
            {slot}
          </li>
        ))}
      </ul>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default TimeSlot;
