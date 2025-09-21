// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authorizationApi } from "../api/postAuthorization";
import accountsSlice from "./slice/accountsSlice";
export default configureStore({
  reducer: {
    [authorizationApi.reducerPath]: authorizationApi.reducer,
    accounts: accountsSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authorizationApi.middleware),
});
