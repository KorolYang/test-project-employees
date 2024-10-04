import { createSlice } from "@reduxjs/toolkit";

export interface EmployeesState {
  theme: string;
}

const initialState: EmployeesState = {
  theme: "",
};

export const themeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
});

// export const { setEmployees } = employeesSlice.actions;
export default themeSlice.reducer;
