// chatbotSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  calendarDate: null,
  timeSlot: null,
  step: 1,
};

const chatbotSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setCalendarDate: (state, action) => {
      state.calendarDate = action.payload;
    },
    setTimeSlot: (state, action) => {
      state.timeSlot = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
  },
});

export const { addMessage, setCalendarDate, setTimeSlot, nextStep } = chatbotSlice.actions;

export default chatbotSlice.reducer;
