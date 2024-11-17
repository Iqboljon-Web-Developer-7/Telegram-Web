import { configureStore } from "@reduxjs/toolkit";
import messages from "./slices/messages";
import userInfo from "./slices/userInfo";
import chatInfoToggle from "./slices/chatInfoToggle";
import messageReceiver from "./slices/messageReceiver";

export const store = configureStore({
  reducer: {
    messages,
    userInfo,
    chatInfoToggle,
    messageReceiver,
  },
});

// Infer the type of AppStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
