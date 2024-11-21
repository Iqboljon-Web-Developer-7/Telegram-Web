import { getLocalStorage, saveLocalStorage } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: getLocalStorage("messagesToggle") || "closed",
};

const messagesToggle = createSlice({
  name: "chatInfoToggle",
  initialState,
  reducers: {
    setMessagesToggle: (state) => {
      state.value == "open" ? (state.value = "closed") : (state.value = "open");
      saveLocalStorage("messagesToggle", state.value);
    },
  },
});

export const { setMessagesToggle } = messagesToggle.actions;
export default messagesToggle.reducer;
