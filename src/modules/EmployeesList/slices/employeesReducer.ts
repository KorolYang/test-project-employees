import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "@/api";
import { filterEmployees } from "@/modules/SearchEmployee/helper/filterEmployees";
import { EmployeesState } from "./types";

const initialState: EmployeesState = {
  status: "initial",
  employees: [],
  error: "",
};

export const getEmployees = createAsyncThunk("employees/getEmployees", async (_, thunkAPI) => {
  try {
    const { data } = await API.employees.getEmployees();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getFilteredEmployees = createAsyncThunk("employees/getFilteredEmployees", async (searchTerm: string, thunkAPI) => {
  try {
    const { data } = await API.employees.getEmployees();
    return filterEmployees(data, searchTerm);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const changeStatusOfEmployee = createAsyncThunk(
  "employees/changeStatusOfEmployee",
  async ({ id, status }: { id: string; status: string }, thunkAPI) => {
    try {
      const { data } = await API.employees.changeStatus(id, status);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.status = "initial";
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.status = "fetched";
        state.employees = action.payload;
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(getFilteredEmployees.pending, (state) => {
        state.status = "initial";
      })
      .addCase(getFilteredEmployees.fulfilled, (state, action) => {
        state.status = "fetched";
        state.employees = action.payload;
      })
      .addCase(getFilteredEmployees.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(changeStatusOfEmployee.pending, (state) => {
        state.status = "initial";
      })
      .addCase(changeStatusOfEmployee.fulfilled, (state, action) => {
        state.status = "fetched";
        const index = state.employees.findIndex((employee) => employee.id === action.payload.id);
        if (index !== -1) {
          state.employees[index].status = action.payload.status;
        }
      })
      .addCase(changeStatusOfEmployee.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default employeesSlice.reducer;
