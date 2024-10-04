import { RootState } from "@/store/store";

export const employeeSelector = (state: RootState) => state.employee?.employee;
export const statusSelector = (state: RootState) => state.employee?.status;
