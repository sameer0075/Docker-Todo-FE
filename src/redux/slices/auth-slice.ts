import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../BaseClass";
import { AuthInterface, LoginRequestInterface } from "../interface";
import { AuthEndpoints } from "../endpoints";

const initialState = {
	isLoading: <boolean>false,
	error: <object | null | string>null,
};

export const login = createAsyncThunk("auth/login", async (data: LoginRequestInterface, thunkAPI) => {
	try {
        const url = `${AuthEndpoints.loginUser()}`
        const resp = await api.post<AuthInterface>(`${url}`, data);
		window.location.href = "/dashboard";
		return resp;
	} catch (error: any) {
		console.log(error)
		return thunkAPI.rejectWithValue(error.response.data);
	}
});

export const register = createAsyncThunk(
	"auth/register",
	async (data: any, thunkAPI) => {
		try {
            const url = `${AuthEndpoints.createUser()}`
            const resp = await api.post<AuthInterface>(`${url}`, data);
			window.location.href = "/dashboard";
            return resp
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
				state.error = null; // Reset error on new request
			})
			.addCase(login.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(login.rejected, (state, action: any) => {
				state.isLoading = false;
				console.log("action", action.payload)
				state.error = action.payload.message.response ? action.payload.message.response : action.payload || "Login failed"; // Update error state
			})
			.addCase(register.pending, (state) => {
				state.isLoading = true;
				state.error = null; // Reset error on new request
			})
			.addCase(register.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(register.rejected, (state, action: any) => {
				state.isLoading = false;
				console.log("action", action)
				state.error = action.payload.message.response ? action.payload.message.response : action.payload || "Registration failed"; // Update error state
			});
	},
});

export default authSlice.reducer;
