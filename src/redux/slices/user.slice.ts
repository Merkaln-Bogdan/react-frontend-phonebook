import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  name: null,
  email: null,
  avatarURL: null,
  subscription: null,
};

export const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload;
    },
  },
});

export const getState = (rootState: RootState) => rootState.user;

export const { setUser } = userDataSlice.actions;
