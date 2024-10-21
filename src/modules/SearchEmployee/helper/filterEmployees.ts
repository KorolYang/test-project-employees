import { Employee } from "@/modules/EmployeesList/slices/types";

export const filterEmployees = (employees: Employee[], searchTerm: string) => {
  const normalizedQuery = searchTerm.trim().toLowerCase();

  return employees.filter((employee) =>
    Object.keys(employee).some((key) => {
      const value = employee[key as keyof Employee];
      return typeof value === "string" && value.toLowerCase().includes(normalizedQuery);
    }),
  );
};
