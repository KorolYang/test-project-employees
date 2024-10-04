import { Employee } from "@/modules/EmployeesList/slices/types";

export const filterEmployees = (employees: Employee[], searchTerm: string) => {
  return employees.filter((employee) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    return (
      employee.firstName.toLowerCase().includes(lowerCaseTerm) ||
      employee.lastName.toLowerCase().includes(lowerCaseTerm) ||
      employee.description.toLowerCase().includes(lowerCaseTerm)
    );
  });
};
