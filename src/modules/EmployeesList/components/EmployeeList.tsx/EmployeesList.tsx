import { EmployeeItem } from "../EmployeeItem/EmployeeItem";
import { useAppSelector } from "@/store/store";
import { employeesSelector, statusSelector } from "../../slices/employeesSelectors";
import { PreLoader } from "@/ui/PreLoader/PreLoader";
import "./EmployeesList.scss";

export const EmployeesList = () => {
  const employees = useAppSelector(employeesSelector);
  const status = useAppSelector(statusSelector);
  const isLoading = status === "initial";

  return isLoading ? (
    <PreLoader />
  ) : (
    <ul className="employees-list">{employees?.map((employee) => <EmployeeItem key={employee.id} employee={employee} />)}</ul>
  );
};
