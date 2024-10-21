export type TStatus = "sick" | "dayOff" | "working";

export interface Employee {
  firstName: string;
  avatar: string;
  status: TStatus;
  lastName: string;
  description: string;
  birthdate: string;
  tasks: [];
  id: string;
}

export interface EmployeesState {
  isLoading: boolean;
  employees: Employee[];
  error: string;
}
