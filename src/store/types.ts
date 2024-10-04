import { Reducer, ThunkDispatch, UnknownAction, configureStore } from "@reduxjs/toolkit";
import { EmployeesState } from "@/modules/EmployeesList/slices/types";
import { createRootReducer } from "./store";
import { EmployeeState } from "@/modules/EmployeeCard/slice/types";
import { TasksListState } from "@/modules/TasksList/slice/types";

export interface ExtendedStore extends ReturnType<typeof configureStore> {
  dispatch: ThunkDispatch<any, undefined, UnknownAction>;
  asyncReducers?: { [key: string]: Reducer };
  getState: () => ReturnType<typeof createRootReducer>;
}

export type StaticState = object;

export type DynamicState = {
  employees?: EmployeesState;
  employee?: EmployeeState;
  tasksList?: TasksListState;
};
