import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter,
  },
});

// Infer the type of AppStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
