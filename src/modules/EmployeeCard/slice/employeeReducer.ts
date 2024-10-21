import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "@/api";
import { EmployeeByIDState } from "./types";

const initialState: EmployeeByIDState = {
  isLoading: true,
  employee: {
    firstName: "",
    avatar: "",
    status: "dayOff",
    lastName: "",
    description: "",
    birthdate: "",
    createdAt: "",
    tasks: [],
    jobType: "",
    sickCount: null,
    phone: "",
    id: "",
  },
  error: "",
};

export const getEmployeeByID = createAsyncThunk("employeeByID/getEmployeeByID", async (id: string, thunkAPI) => {
  try {
    const { data } = await API.employees.getEmployeeByID(id);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const employeeByIDSlice = createSlice({
  name: "employeeByID",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeeByID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployeeByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employee = action.payload;
      })
      .addCase(getEmployeeByID.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default employeeByIDSlice.reducer;
