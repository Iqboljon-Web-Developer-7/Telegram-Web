import { getLocalStorage, saveLocalStorage } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: getLocalStorage("messageReceiver") || " ",
};

const messageReceiver = createSlice({
  name: "messageReceiver",
  initialState,
  reducers: {
    setMessageReceiver: (state, action) => {
      state.value = action.payload;

      saveLocalStorage("messageReceiver", state.value);
    },
  },
});

export const { setMessageReceiver } = messageReceiver.actions;
export default messageReceiver.reducer;
