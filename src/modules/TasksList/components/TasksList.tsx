import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskForm } from "@/modules/TaskForm/components/TaskForm";
import { Button } from "@/ui/Button/Button";
import { Modal } from "@/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { statusSelector, tasksListSelector } from "../slice/tasksListSelectors";
import { getTasksList } from "../slice/tasksListReducer";
import { PreLoader } from "@/ui/PreLoader/PreLoader";

const TasksList = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const tasks = useAppSelector(tasksListSelector);
  const status = useAppSelector(statusSelector);
  const isLoading = status === "initial";

  useEffect(() => {
    dispatch(getTasksList(id));
  }, []);

  const handlerModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Button onClick={handlerModal}>Назначить Задание</Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <TaskForm setIsOpen={setIsOpen} />
      </Modal>
      <div className="employee-card__tasks">
        {isLoading ? (
          <PreLoader />
        ) : (
          <ul className="tasks-list">
            {tasks?.map((task) => (
              <li key={task.taskId} className="tasks-item">
                {JSON.stringify(task)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TasksList;
