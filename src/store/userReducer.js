import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isConnected: false,
  userName: "",
  firstName: "",
  lastName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setConnected(state, action) {
      state.isConnected = true;
      state.token = action.payload;
    },
    setDisconnected(state) {
      state.isConnected = false;
      state.token = null;
      state.firstName = "";
      state.lastName = "";
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    setLastName(state, action) {
      state.lastName = action.payload;
    },
  },
});

export default userSlice.reducer;

export const {
  setConnected,
  setDisconnected,
  setUserName,
  setFirstName,
  setLastName,
} = userSlice.actions;
