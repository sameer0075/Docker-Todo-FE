import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TasksEndpoints } from "../endpoints";
import api from "../BaseClass";
import { TaskInterface } from "../interface";

const initialState = {
	isLoading: <boolean>false,
	tasks: <any>[],
};

export const TasksList = createAsyncThunk("tasks/list", async () => {
	try {
        const url = `${TasksEndpoints.getTasks()}`
        const resp = await api.get<TaskInterface>(`${url}`);
		return resp;
	} catch (error: any) {
		throw error.response.data;
	}
});

export const savetask = createAsyncThunk(
	"save/task",
	async (data: { title: string }, thunkAPI) => {
		try {
			const url = `${TasksEndpoints.createTask()}`
			const resp = await api.post<TaskInterface>(`${url}`, data);
			return resp;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export const deleteTask = createAsyncThunk(
	"delete/task",
	async (data: { id: number }, thunkAPI) => {
		try {
			const url = `${TasksEndpoints.deleteTask(data.id)}`
			const resp = await api.delete<TaskInterface>(`${url}`);
			return resp;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export const updateTask = createAsyncThunk(
	"update/task",
	async (data: { id: number, title: string }, thunkAPI) => {
		try {
			const url = `${TasksEndpoints.updateTask(data.id)}`
			const resp = await api.put<TaskInterface>(`${url}`, { title: data.title });
			return resp;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(TasksList.pending, (state) => {
				state.isLoading = true;
				state.tasks = null;
			})
			.addCase(TasksList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.tasks = action.payload
			})
			.addCase(TasksList.rejected, (state, action: any) => {
				state.isLoading = false;
				console.log("action", action.payload)
			})
			.addCase(savetask.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(savetask.fulfilled, (state,action) => {
				state.isLoading = false;
				console.log("state.tasks", state.tasks, action)
				state.tasks.unshift(action.payload);
			})
			.addCase(savetask.rejected, (state, action: any) => {
				state.isLoading = false;
			})
			.addCase(deleteTask.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteTask.fulfilled, (state,action) => {
				state.isLoading = false;
				state.tasks = state.tasks.filter(
					(task: any) => task.id !== action.meta.arg.id
				);
			})
			.addCase(deleteTask.rejected, (state, action: any) => {
				state.isLoading = false;
				console.log("action", action)
			})
			.addCase(updateTask.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateTask.fulfilled, (state, action) => {
				state.isLoading = false;
				const index = state.tasks.findIndex(
					(task: any) => task.id === action.payload.id
				);
				if (index !== -1) {
					state.tasks[index] = action.payload;
				}
			})
			.addCase(updateTask.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export default tasksSlice.reducer;
