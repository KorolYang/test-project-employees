import { lazy } from "react";
import withReducer from "@/hok/withReducer";
import employeesReducer from "./slices/employeesReducer";

export const LazyEmployeesList = lazy(() => import("./components/Employees"));

export const LazyEmployeesListWithReducer = withReducer(LazyEmployeesList, {
  name: "employees",
  reducer: employeesReducer,
});
