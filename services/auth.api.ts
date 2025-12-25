import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    SendEmail: builder.mutation<{ token: string }, { email: string }>({
      query: (body) => ({
        url: "auth/resend-registration-otp",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    me: builder.query({
      query: () => "/me/",
      providesTags: ["Auth"],
    }),
  }),
});

export const { useSendEmailMutation, useMeQuery } = authApi;
