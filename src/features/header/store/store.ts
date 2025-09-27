// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
export const store = configureStore({
  reducer: {
    authUser: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
