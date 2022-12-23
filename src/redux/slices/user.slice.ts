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
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.avatarURL = action.payload.avatarURL;
      state.subscription = action.payload.subscription;
    },
  },
});

export const getState = (rootState: RootState) => rootState.user;

export const { setUser } = userDataSlice.actions;
