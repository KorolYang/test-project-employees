import { useEffect } from "react";
import { EmployeesList } from "./EmployeeList.tsx/EmployeesList";
import { SearchEmployee } from "@/modules/SearchEmployee";
import "./Employees.scss";
import { useAppDispatch } from "@/store/store";
import { getEmployees, getFilteredEmployees } from "../slices/employeesReducer";

const Employees = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filterParams = sessionStorage.getItem("filterParams");
    if (filterParams) {
      dispatch(getFilteredEmployees(filterParams));
    } else {
      dispatch(getEmployees());
    }
  }, []);

  return (
    <div className="employees-container">
      <SearchEmployee />
      <div className="employees-table">
        <div className="employees-header">
          <h3>Аватар</h3>
          <h3>Фамилия Имя</h3>
          <h3>Статус</h3>
          <h3>Количество задач</h3>
        </div>
        <EmployeesList />
      </div>
    </div>
  );
};

export default Employees;
