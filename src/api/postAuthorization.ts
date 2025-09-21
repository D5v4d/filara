import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AuthRequest, AuthResponse } from "../types/api";

export const authorizationApi = createApi({
  reducerPath: "authorizationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (build) => ({
    authorization: build.mutation<AuthResponse, AuthRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAuthorizationMutation } = authorizationApi;