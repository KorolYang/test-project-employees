import { Task } from "@/modules/TasksList/slice/types";

export type TaskFormInputs = {
  taskName: string;
  taskDescription: string;
  isUrgently: boolean;
};

export type TTaskFormProps = {
  setIsOpen: (art: boolean) => void;
  titleBtn?: string;
  task?: Task;
  type: "create" | "edit";
};
