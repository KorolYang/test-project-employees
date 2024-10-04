import { RootState } from "@/store/store";

export const employeesSelector = (state: RootState) => state.employees?.employees;
export const statusSelector = (state: RootState) => state.employees?.status;
