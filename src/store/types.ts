import { Reducer, ThunkDispatch, UnknownAction, configureStore } from "@reduxjs/toolkit";
import { EmployeesState } from "@/modules/EmployeesList/slices/types";
import { createRootReducer } from "./store";
import { EmployeeByIDState } from "@/modules/EmployeeCard/slice/types";
import { TasksListState } from "@/modules/TasksList/slice/types";
import { ThemeState } from "./themeReduser";
import { StatisticState } from "@/modules/StatisticEmployees/slice/StatisticReducer";

export interface ExtendedStore extends ReturnType<typeof configureStore> {
  dispatch: ThunkDispatch<any, undefined, UnknownAction>;
  asyncReducers?: { [key: string]: Reducer };
  getState: () => ReturnType<typeof createRootReducer>;
}

export type StaticState = {
  theme: ThemeState;
};

export type DynamicState = {
  employees?: EmployeesState;
  employeeByID?: EmployeeByIDState;
  tasksList?: TasksListState;
  statistic?: StatisticState;
};
