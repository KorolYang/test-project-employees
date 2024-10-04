import { Suspense, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { injectReducer, useAppDispatch } from "@/store/store";
import { getEmployeeByID } from "../slice/employeeReducer";
import { Button } from "@/ui/Button/Button";
import { CardProfile } from "./CardProfile/CardProfile";
import "./EmployeeCard.scss";
import { TasksListWithReducer } from "@/modules/TasksList/TasksList.lazy";
import { PreLoader } from "@/ui/PreLoader/PreLoader";

const EmployeeCard = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    // injectReducer('name', reducer)
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
      <Suspense fallback={<PreLoader />}>
        <TasksListWithReducer />
      </Suspense>
    </div>
  );
};

export default EmployeeCard;
