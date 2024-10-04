import { lazy } from "react";
import withReducer from "@/hok/withReducer";
import employeeReducer from "./slice/employeeReducer";

export const LazyEmployeeCard = lazy(() => import("./components/EmployeeCard"));

export const LazyEmployeeCardWithReducer = withReducer(LazyEmployeeCard, {
  name: "employee",
  reducer: employeeReducer,
});
