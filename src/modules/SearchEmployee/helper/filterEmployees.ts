import { Employee } from "@/modules/EmployeesList/slices/types";

export const filterEmployees = (employees: Employee[], searchTerm: string) => {
  const normalizedQuery = searchTerm.trim().toLowerCase();

  return employees.filter((employee) =>
    Object.keys(employee).some((key: keyof Employee) => {
      if (typeof employee[key] !== "string") {
        return false;
      }
      const value = employee[key];
      return typeof value === "string" && value.toLowerCase().includes(normalizedQuery);
    }),
  );
};
// картеж
