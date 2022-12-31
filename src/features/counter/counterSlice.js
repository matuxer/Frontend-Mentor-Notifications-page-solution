import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 3,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clear: (state) => {
      state.value = 0;
    }
  },
});

export const { clear } = counterSlice.actions;

export default counterSlice.reducer;