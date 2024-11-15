import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const messages = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.value = action.payload.messages;
    },
  },
});

export const { setMessages } = messages.actions;
export default messages.reducer;
