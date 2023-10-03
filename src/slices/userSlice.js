// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: null,
  enrolled: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setEnrolled: (state) => {
      state.enrolled = true;
    },
  },
});

export const { setName, setAge, setEnrolled } = userSlice.actions;

export default userSlice.reducer;
