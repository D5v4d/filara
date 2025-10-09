import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiBrands = createApi({
  reducerPath: "brands",
  tagTypes: ["Brands"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (build) => ({
    getBrands: build.query({
      query: () => `brands`,
      providesTags: ["Brands"],
    }),
    upBrands: build.mutation({
      query: ({ id, likes, isLikes }) => ({
        url: `/brands/${id}`,
        method: "PATCH",
        body: { likes, isLikes },
      }),
      invalidatesTags: ["Brands"],
    }),
  }),
});

export const { useGetBrandsQuery, useUpBrandsMutation} = apiBrands;
