import { getLocalStorage, saveLocalStorage } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "closed" || getLocalStorage("chatInfoToggle"),
};

const chatInfoToggle = createSlice({
  name: "chatInfoToggle",
  initialState,
  reducers: {
    toggleChatInfo: (state) => {
      state.value == "open" ? (state.value = "closed") : (state.value = "open");
      saveLocalStorage("chatInfoToggle", state.value);
    },
  },
});

export const { toggleChatInfo } = chatInfoToggle.actions;
export default chatInfoToggle.reducer;
