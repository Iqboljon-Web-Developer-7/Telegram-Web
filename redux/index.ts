import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfo";
import chatInfoToggle from "./slices/chatInfoToggle";
import messageReceiver from "./slices/messageReceiver";
import messagesToggle from "./slices/messagesToggle";

export const store = configureStore({
  reducer: {
    userInfo,
    chatInfoToggle,
    messageReceiver,
    messagesToggle,
  },
});

// Infer the type of AppStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
