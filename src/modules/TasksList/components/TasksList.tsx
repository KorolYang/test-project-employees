import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskForm } from "@/modules/TaskForm/components/TaskForm";
import { Button } from "@/ui/Button/Button";
import { Modal } from "@/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { tasksListSelector } from "../slice/tasksListSelectors";
import { getTasksList } from "../slice/tasksListReducer";
import { TaskItem } from "./TaskItem/TaskItem";
import "./TaskList.scss";

const TasksList = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const tasks = useAppSelector(tasksListSelector);

  useEffect(() => {
    dispatch(getTasksList(id));
  }, []);

  const handlerModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="task-container">
      <Button onClick={handlerModal} className="create-task-btn">
        Назначить Задание
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <TaskForm setIsOpen={setIsOpen} titleBtn="Создать" type="create" />
      </Modal>
      <div className="employee-card__tasks">
        <ul className="task-list">{tasks?.map((task) => <TaskItem key={task.taskId} task={task} />)}</ul>
      </div>
    </div>
  );
};

export default TasksList;
