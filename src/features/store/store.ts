import { configureStore } from "@reduxjs/toolkit";
import { authorizationApi } from "../authForm/api/postAuth";
import { accountsSlice } from "../header";
import { dataSidebar, seminarsSlice } from "../seminars";

export const store = configureStore({
  reducer: {
    [authorizationApi.reducerPath]: authorizationApi.reducer,
    [dataSidebar.reducerPath]: dataSidebar.reducer,
    authUser: accountsSlice.reducer,
    seminars: seminarsSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authorizationApi.middleware, dataSidebar.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
