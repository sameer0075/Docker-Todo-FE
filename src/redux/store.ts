import { ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import { AnyAction, combineReducers } from "redux";

import tasksSlice from "./slices/task-slice";
import authSlice from "./slices/auth-slice";

export const rootReducer = combineReducers({
	tasks: tasksSlice,
	auth: authSlice
});

export const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = ThunkDispatch<[], void, AnyAction>;

