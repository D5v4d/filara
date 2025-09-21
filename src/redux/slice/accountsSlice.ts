import { createSlice } from "@reduxjs/toolkit";
import type { AccountsState } from "../../types/accountsSlice";

const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    accounts: {},
  } as AccountsState,
  reducers: {
    addAccounts(state, action) {
      state.accounts = action.payload
    },
  },
});

export const { addAccounts } = accountsSlice.actions;

export default accountsSlice.reducer;
