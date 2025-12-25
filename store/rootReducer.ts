import authReducer from "@/features/auth/auth.slice";
import { baseApi } from "@/services/baseApi";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
});
