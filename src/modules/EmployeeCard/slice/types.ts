export type TTask = {
  taskName: string;
  taskDescription: string;
  taskId: string | number;
  isDone: boolean;
  isUrgently?: boolean;
};

export type EmployeeByID = {
  firstName: string;
  avatar: string;
  status: "sick" | "dayOff" | "working";
  lastName: string;
  description: string;
  birthdate: string;
  createdAt: string;
  tasks: TTask[];
  jobType: string;
  sickCount: number;
  phone: string;
  id: string;
};

export interface EmployeeByIDState {
  isLoading: boolean;
  employee: EmployeeByID;
  error: string;
}
