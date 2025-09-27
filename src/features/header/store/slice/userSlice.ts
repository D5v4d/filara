import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../../types/accountsSlice";

const user = JSON.parse(localStorage.getItem('user') || 'null');

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    user,
  } as IUser,
  reducers: {
    addAccounts(state, action) {
      state.user = action.payload
    },
  },
});

export const { addAccounts } = accountsSlice.actions;

export default accountsSlice.reducer;
