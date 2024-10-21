import { lazy } from "react";
import withReducer from "@/hok/withReducer";
import { employeeByIDSlice } from "./slice/employeeReducer";

export const LazyEmployeeCard = lazy(() => import("./components/EmployeeCard"));

export const LazyEmployeeCardWithReducer = withReducer(LazyEmployeeCard, {
  name: "employeeByID",
  reducer: employeeByIDSlice.reducer,
});
