import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "@/store/store";
import { getEmployeeByID } from "../slice/employeeReducer";
import { Button } from "@/ui/Button/Button";
import { CardProfile } from "./CardProfile/CardProfile";
import { TasksListWithReducer } from "@/modules/TasksList/TasksListWithReducer";
import "./EmployeeCard.scss";

const EmployeeCard = () => {
  console.log("employeeCard");
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(getEmployeeByID(id));
  }, []);

  const goBack = () => {
    navigation(-1);
  };

  return (
    <div className="employee-card">
      <div className="employee-card__buttons">
        <Button onClick={goBack}>Назад</Button>
      </div>
      <CardProfile />
      <TasksListWithReducer />
    </div>
  );
};

export default EmployeeCard;
