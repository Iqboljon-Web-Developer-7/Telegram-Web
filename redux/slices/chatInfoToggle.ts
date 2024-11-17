import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "open" || (localStorage.getItem("chatInfoToggle") as unknown),
};

const chatInfoToggle = createSlice({
  name: "chatInfoToggle",
  initialState,
  reducers: {
    toggleChatInfo: (state) => {
      state.value == "open" ? (state.value = "closed") : (state.value = "open");
      console.log("State:", state.value);

      localStorage.setItem("chatInfoToggle", JSON.stringify(state.value));
    },
  },
});

export const { toggleChatInfo } = chatInfoToggle.actions;
export default chatInfoToggle.reducer;
