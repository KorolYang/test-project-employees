export type Task = {
  taskName: string;
  taskDescription: string;
  taskId: string | number;
  isDone: boolean;
  isUrgently?: boolean;
};

export interface TasksListState {
  status: "initial" | "fetched" | "error";
  tasks: Task[];
  error: string;
}
