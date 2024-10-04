import { RootState } from "@/store/store";

export const tasksListSelector = (state: RootState) => state.tasksList?.tasks;
export const statusSelector = (state: RootState) => state.tasksList?.status;
