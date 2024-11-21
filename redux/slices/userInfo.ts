import { getLocalStorage, saveLocalStorage } from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: getLocalStorage("UserInfo") || {},
};

const userInfo = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.value = action.payload;
      saveLocalStorage("UserInfo", action.payload);
    },
  },
});

export const { setUserInfo } = userInfo.actions;
export default userInfo.reducer;
