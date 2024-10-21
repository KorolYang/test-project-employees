import { RootState } from "@/store/store";

export const employeesSelector = (state: RootState) => state.employees?.employees;
export const isLoadingSelector = (state: RootState) => state.employees?.isLoading;
