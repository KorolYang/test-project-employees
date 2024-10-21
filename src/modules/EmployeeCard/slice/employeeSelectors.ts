import { RootState } from "@/store/store";

export const employeeSelector = (state: RootState) => state.employeeByID?.employee;
export const statusSelector = (state: RootState) => state.employeeByID?.isLoading;
