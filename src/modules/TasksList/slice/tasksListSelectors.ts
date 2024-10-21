import { RootState } from "@/store/store";

export const tasksListSelector = (state: RootState) => state.tasksList?.tasks;
export const isLoadingSelector = (state: RootState) => state.tasksList?.isLoading;
