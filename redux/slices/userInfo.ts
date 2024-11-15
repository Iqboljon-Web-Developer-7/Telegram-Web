import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {} || JSON.parse(localStorage.getItem("UserInfo")!),
};

const userInfo = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("UserInfo", JSON.stringify(action.payload));
    },
  },
});

export const { setUserInfo } = userInfo.actions;
export default userInfo.reducer;
