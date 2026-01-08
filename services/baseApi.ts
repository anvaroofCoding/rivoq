import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://45.126.125.109/',
		prepareHeaders: headers => {
			const token = localStorage.getItem('access')
			if (token) headers.set('Authorization', `Bearer ${token}`)
			headers.set('Accept', 'application/json')
			return headers
		},
	}),
	tagTypes: ['Auth', 'User', 'Post'],
	endpoints: () => ({}),
})
