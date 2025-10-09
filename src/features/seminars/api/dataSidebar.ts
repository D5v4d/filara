import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataSidebar = createApi({
  reducerPath: "sidebar",
  tagTypes: ["Seminar"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (build) => ({
    getSeminars: build.query({
      query: () => `seminars`,
      providesTags: ["Seminar"],
    }),
    deleteSeminar: build.mutation({
      query: (id) => ({
        url: `seminars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Seminar"],
    }),
    likesSeminar: build.mutation({
      query: ({ id, likes, isLikes }) => ({
        url: `/seminars/${id}`,
        method: "PATCH",
        body: { likes, isLikes },
      }),
      invalidatesTags: ["Seminar"],
    }),
    addSeminar: build.mutation({
      query: (body) => ({
        url: "seminars",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Seminar"],
    }),
    getUsers: build.query({
      query: () => "users",
    }),
  }),
});

export const { useGetSeminarsQuery, useGetUsersQuery, useDeleteSeminarMutation, useLikesSeminarMutation, useAddSeminarMutation } = dataSidebar;
