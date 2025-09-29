import { configureStore } from "@reduxjs/toolkit";
import { authorizationApi } from "../authForm/api/postAuth";
import { accountsSlice } from "../header";
export const store =  configureStore({
  reducer: {
    [authorizationApi.reducerPath]: authorizationApi.reducer,
    authUser: accountsSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authorizationApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
