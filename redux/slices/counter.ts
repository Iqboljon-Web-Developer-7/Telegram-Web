import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counter = createSlice({
  name: "yourFeature",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counter.actions;
export default counter.reducer;
