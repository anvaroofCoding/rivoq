import { baseApi } from '@/services/baseApi'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
	[baseApi.reducerPath]: baseApi.reducer,
})
