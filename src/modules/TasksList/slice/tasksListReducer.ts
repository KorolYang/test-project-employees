import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "@/api";
import { Task, TasksListState } from "./types";
import { RootState } from "@/store/store";

const initialState: TasksListState = {
  isLoading: false,
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
  async ({ id, newTask }: { id: string; newTask: Task }, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const editTasks = [...state.tasksList.tasks, newTask];
      const { data } = await API.employees.createTask(id, editTasks);
      return newTask;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const editTasks = createAsyncThunk(
  "tasksList/editTask",
  async ({ id, newTask }: { id: string; newTask: Task }, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const editTasks = state.tasksList.tasks.map((task) => {
        if (task.taskId === newTask.taskId) {
          return { ...task, isDone: newTask.isDone };
        } else {
          return task;
        }
      });

      const { data } = await API.employees.createTask(id, editTasks);
      return newTask;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deleteTask = createAsyncThunk(
  "tasksList/deleteTask",
  async ({ id, taskId }: { id: string; taskId: string }, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;

      const updatedTasks = state.tasksList.tasks.filter((task: any) => task.taskId !== taskId);

      const { data } = await API.employees.createTask(id, updatedTasks);
      return taskId;
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
        state.isLoading = true;
      })
      .addCase(getTasksList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload.tasks;
      })
      .addCase(getTasksList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(editTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        const newTask = action.payload;
        const taskIndex = state.tasks.findIndex((task) => task.taskId === newTask.taskId);
        if (taskIndex !== -1) {
          state.tasks[taskIndex] = newTask;
        }
      })
      .addCase(editTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const taskId = action.payload;
        state.isLoading = false;
        state.tasks = state.tasks.filter((task: Task) => task.taskId !== taskId);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default tasksListSlice.reducer;
