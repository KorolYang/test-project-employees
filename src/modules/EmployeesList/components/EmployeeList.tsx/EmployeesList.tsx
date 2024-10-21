import { EmployeeItem } from "../EmployeeItem/EmployeeItem";
import { useAppSelector } from "@/store/store";
import { employeesSelector } from "../../slices/employeesSelectors";
import "./EmployeesList.scss";

export const EmployeesList = () => {
  const employees = useAppSelector(employeesSelector);
  console.log("employeesList");

  return employees.length === 0 ? null : (
    <ul className="employees-list">{employees?.map((employee) => <EmployeeItem key={employee.id} employee={employee} />)}</ul>
  );
};
