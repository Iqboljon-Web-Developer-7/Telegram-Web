import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "" || (localStorage.getItem("messageReceiver") as unknown),
};

const messageReceiver = createSlice({
  name: "messageReceiver",
  initialState,
  reducers: {
    setMessageReceiver: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("messageReceiver", JSON.stringify(state.value));
    },
  },
});

export const { setMessageReceiver } = messageReceiver.actions;
export default messageReceiver.reducer;
