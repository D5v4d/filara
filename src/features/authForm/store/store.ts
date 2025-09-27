// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authorizationApi } from "../api/postAuth";
export const store =  configureStore({
  reducer: {
    [authorizationApi.reducerPath]: authorizationApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authorizationApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
