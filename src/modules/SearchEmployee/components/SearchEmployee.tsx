import { useState } from "react";
import { fetchGetEmployees } from "@/modules/EmployeesList/slices/employeesReducer";
import { useAppDispatch } from "@/store/store";
import { Button } from "@/ui/Button/Button";
import "./SearchEmployee.scss";

export const SearchEmployee = () => {
  const dispatch = useAppDispatch();
  const sessionStorageParams = sessionStorage.getItem("filterParams");
  const [searchTerm, setSearchTerm] = useState(sessionStorageParams || "");
  const [isDisabled, setIsDisabled] = useState(!Boolean(sessionStorageParams));

  const handlerSearch = () => {
    if (searchTerm !== "") {
      setIsDisabled(false);
      sessionStorage.setItem("filterParams", searchTerm);
      dispatch(fetchGetEmployees(searchTerm));
    }
  };

  const handlerCansel = () => {
    setSearchTerm("");
    setIsDisabled(true);
    sessionStorage.removeItem("filterParams");
    dispatch(fetchGetEmployees(""));
  };
  // const onChangeSearchValue=(e)=>{
  //   setSearchTerm(e.target.value)
  // }
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Поиск сотрудников..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button disabled={!Boolean(searchTerm)} onClick={handlerSearch}>
        Найти
      </Button>
      <Button disabled={isDisabled} onClick={handlerCansel}>
        Сбросить
      </Button>
    </div>
  );
};
