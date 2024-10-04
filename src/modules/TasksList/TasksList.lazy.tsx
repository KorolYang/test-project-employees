import { lazy } from "react";
import withReducer from "@/hok/withReducer";
import { tasksListSlice } from "./slice/tasksListReducer";

export const LazyTasksList = lazy(() => import("./components/TasksList"));

export const TasksListWithReducer = withReducer(LazyTasksList, {
  name: "tasksList",
  reducer: tasksListSlice.reducer,
});
