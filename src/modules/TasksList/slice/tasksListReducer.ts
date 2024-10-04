import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "@/api";
import { Task, TasksListState } from "./types";

const initialState: TasksListState = {
  status: "initial",
  tasks: [],
  error: "",
};

export const getTasksList = createAsyncThunk("tasksList/getTasksList", async (id: string, thunkAPI) => {
  try {
    const { data } = await API.employees.getEmployeeByID(id);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createTask = createAsyncThunk(
  "tasksList/createTask",
  async ({ id, editTasks }: { id: string; editTasks: Task[] }, thunkAPI) => {
    try {
      const { data } = await API.employees.createTask(id, editTasks);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const tasksListSlice = createSlice({
  name: "tasksList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasksList.pending, (state) => {
        state.status = "initial";
      })
      .addCase(getTasksList.fulfilled, (state, action) => {
        state.status = "fetched";
        state.tasks = action.payload.tasks;
      })
      .addCase(getTasksList.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(createTask.pending, (state) => {
        state.status = "initial";
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.status = "fetched";
        state.tasks = action.payload.tasks;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default tasksListSlice.reducer;
