export type Task = {
  taskName: string;
  taskDescription: string;
  taskId: string;
  isDone: boolean;
  isUrgently?: boolean;
};

export interface TasksListState {
  isLoading: boolean;
  tasks: Task[];
  error: string;
}
