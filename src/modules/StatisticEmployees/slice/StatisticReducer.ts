import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "@/api";
import { EmployeeByID } from "@/modules/EmployeeCard/slice/types";
import { TStatus } from "@/modules/EmployeesList/slices/types";
import { Task } from "@/modules/TasksList/slice/types";

type StatisticTask = {
  isDone: boolean;
  isUrgently?: boolean;
};
type StatisticEmployee = {
  sick: number;
  dayOff: number;
  working: number;
};

export interface StatisticState {
  isLoading: boolean;
  tasks: StatisticTask[];
  employeers: StatisticEmployee;
  error: "";
}

const initialState: StatisticState = {
  isLoading: false,
  tasks: [],
  employeers: {
    sick: 0,
    dayOff: 0,
    working: 0,
  },
  error: "",
};

export const GetEmployeesStatistic = createAsyncThunk("statistic/getEmployeesStatistic", async (_, thunkAPI) => {
  try {
    const { data } = await API.employees.getEmployees();
    const statusCount = data.reduce(
      (acc: StatisticEmployee, employee: EmployeeByID) => {
        acc[employee.status] = (acc[employee.status] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
    const statusTasks = data.reduce(
      (acc: StatisticEmployee, employee: EmployeeByID) => {
        acc[employee.status] = (acc[employee.status] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {},
});

export default statisticSlice.reducer;
