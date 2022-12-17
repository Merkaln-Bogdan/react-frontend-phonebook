import { configureStore } from "@reduxjs/toolkit";
import { userDataSlice } from "./slices/user.slice";

const store = configureStore({
  reducer: {
    user: userDataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
