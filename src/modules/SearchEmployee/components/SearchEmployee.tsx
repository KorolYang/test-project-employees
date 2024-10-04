import { useState } from "react";
import { getEmployees, getFilteredEmployees } from "@/modules/EmployeesList/slices/employeesReducer";
import { useAppDispatch } from "@/store/store";
import { Button } from "@/ui/Button/Button";
import "./SearchEmployee.scss";

export const SearchEmployee = () => {
  const dispatch = useAppDispatch();
  const isSessionStorage = !sessionStorage.getItem("filterParams");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDisabled, setIsDisabled] = useState(isSessionStorage);

  const handlerSearch = () => {
    if (searchTerm) {
      setIsDisabled(false);
      sessionStorage.setItem("filterParams", searchTerm);
      dispatch(getFilteredEmployees(searchTerm));
      setSearchTerm("");
    }
  };

  const handlerCansel = () => {
    if (!searchTerm) {
      setIsDisabled(true);
      sessionStorage.removeItem("filterParams");
      dispatch(getEmployees());
      setSearchTerm("");
    }
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Поиск сотрудников..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button onClick={handlerSearch}>Найти</Button>
      <Button disabled={isDisabled} onClick={handlerCansel}>
        Сбросить
      </Button>
    </div>
  );
};
