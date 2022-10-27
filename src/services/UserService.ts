import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../models/IUser";
export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], null | undefined>({
      query: () => ({
        url: "/users",
      }),
      providesTags: (result: any) => ["User"],
    }),
    createUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
