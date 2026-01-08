import { baseApi } from './baseApi'

export const authApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		SendOtp: builder.mutation<{ password: string }, { email: string }>({
			query: body => ({
				url: 'users/register/',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Auth'],
		}),
		agreeOtp: builder.mutation<{ otp: string }, { email: string }>({
			query: body => ({
				url: 'users/verify-otp/',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Auth'],
		}),
		login: builder.mutation<{ password: string }, { email: string }>({
			query: body => ({
				url: 'users/login/',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Auth'],
		}),
		me: builder.query({
			query: () => '/me/',
			providesTags: ['Auth'],
		}),
	}),
})

export const {
	useSendOtpMutation,
	useMeQuery,
	useAgreeOtpMutation,
	useLoginMutation,
} = authApi
