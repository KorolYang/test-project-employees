import withReducer from "@/hok/withReducer";
import { tasksListSlice } from "./slice/tasksListReducer";
import TasksList from "./components/TasksList";


export const TasksListWithReducer = withReducer(TasksList, {
  name: "tasksList",
  reducer: tasksListSlice.reducer,
});
