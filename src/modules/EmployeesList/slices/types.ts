export interface Employee {
  firstName: string;
  avatar: string;
  status: "sick" | "dayOff" | "working";
  lastName: string;
  description: string;
  birthdate: string;
  tasks: [];
  id: string;
}

export interface EmployeesState {
  status: "initial" | "fetched" | "error";
  employees: Employee[];
  error: string;
}
