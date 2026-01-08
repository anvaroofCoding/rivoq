import { baseApi } from '@/services/baseApi'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

export const makeStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(baseApi.middleware), // ✅ middleware qo‘shildi
	})

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
