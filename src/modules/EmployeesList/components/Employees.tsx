import { useEffect } from "react";
import { EmployeesList } from "./EmployeeList.tsx/EmployeesList";
import { SearchEmployee } from "@/modules/SearchEmployee";
import { useAppDispatch } from "@/store/store";
import { fetchGetEmployees } from "../slices/employeesReducer";
import "./Employees.scss";

const Employees = () => {
  console.log("employees");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filterParams = sessionStorage.getItem("filterParams") || "";
    dispatch(fetchGetEmployees(filterParams));
  }, []);

  return (
    <div className="employees-container">
      <SearchEmployee />
      <div className="employees-table">
        <div className="employees-header">
          <p>Аватар</p>
          <p>Фамилия Имя</p>
          <p>Статус</p>
          <p>Количество задач</p>
        </div>
        <EmployeesList />
      </div>
    </div>
  );
};

export default Employees;
