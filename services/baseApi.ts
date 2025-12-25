import type { RootState } from "@/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["User", "Post", "Auth"],

  baseQuery: fetchBaseQuery({
    baseUrl: "https://rivoq-backend.onrender.com/",

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      headers.set("Accept", "application/json");
      return headers;
    },
  }),

  endpoints: () => ({}),
});
