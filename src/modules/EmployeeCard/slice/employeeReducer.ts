import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "@/api";
import { Employee, EmployeeState } from "./types";

const initialState: EmployeeState = {
  status: "initial",
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

export const getEmployeeByID = createAsyncThunk("employee/getEmployeeByID", async (id: string, thunkAPI) => {
  try {
    const { data } = await API.employees.getEmployeeByID(id);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeeByID.pending, (state) => {
        state.status = "initial";
      })
      .addCase(getEmployeeByID.fulfilled, (state, action) => {
        state.status = "fetched";
        state.employee = action.payload;
      })
      .addCase(getEmployeeByID.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
