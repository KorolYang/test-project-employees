export type TTask = {
  taskName: string;
  taskDescription: string;
  taskId: string | number;
  isDone: boolean;
  isUrgently?: boolean;
};

export type Employee = {
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

export interface EmployeeState {
  status: "initial" | "fetched" | "error";
  employee: Employee;
  error: string;
}
