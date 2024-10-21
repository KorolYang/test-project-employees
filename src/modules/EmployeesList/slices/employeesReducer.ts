import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "@/api";
import { filterEmployees } from "@/modules/SearchEmployee/helper/filterEmployees";
import { EmployeesState } from "./types";

const initialState: EmployeesState = {
  isLoading: true,
  employees: [],
  error: "",
};

export const fetchGetEmployees = createAsyncThunk("employees/getEmployees", async (searchTerm: string, thunkAPI) => {
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
      .addCase(fetchGetEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employees = action.payload;
      })
      .addCase(fetchGetEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(changeStatusOfEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeStatusOfEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.employees.findIndex((employee) => employee.id === action.payload.id);
        if (index !== -1) {
          state.employees[index].status = action.payload.status;
        }
      })
      .addCase(changeStatusOfEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default employeesSlice.reducer;
