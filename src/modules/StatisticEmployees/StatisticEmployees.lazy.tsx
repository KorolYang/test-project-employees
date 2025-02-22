import { lazy } from "react";
import withReducer from "@/hok/withReducer";
import StatisticReducer from "./slice/StatisticReducer";

export const LazyStatisticEmployee = lazy(() => import("./components/StatisticEmployees"));

export const LazyStatisticEmployeeWithReducer = withReducer(LazyStatisticEmployee, {
  name: "statistic",
  reducer: StatisticReducer,
});
