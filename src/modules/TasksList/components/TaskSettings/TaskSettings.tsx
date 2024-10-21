import { useState } from "react";
import { useParams } from "react-router-dom";
import { Task } from "../../slice/types";
import { useAppDispatch } from "@/store/store";
import { deleteTask, editTasks } from "../../slice/tasksListReducer";
import { Modal } from "@/ui/Modal/Modal";
import { TaskForm } from "@/modules/TaskForm/components/TaskForm";
import DeleteIcon from "@/assets/icons/trash-2.svg";
import IsDoneIcon from "@/assets/icons/check.svg";
import LoaderIcon from "@/assets/icons/loader.svg";
import EditIcon from "@/assets/icons/edit.svg";
import Tooltip from "@mui/material/Tooltip";
import "./TaskSetting.scss";

export const TaskSettings = ({ task }: { task: Task }) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const taskId = task.taskId;

  const handlerDeleteTask = () => {
    setIsLoading(true);
    dispatch(deleteTask({ id, taskId })).then(() => setIsLoading(false));
  };

  const handlerIsDoneTask = () => {
    const editTask = {
      ...task,
      isDone: !task.isDone,
    };
    dispatch(editTasks({ id, newTask: editTask }));
  };

  const handlerModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <TaskForm setIsOpen={setIsOpen} titleBtn="Сохранить" task={task} type="edit" />
        </Modal>
      )}
      <Tooltip title={"Изменить"} placement="top">
        <span>
          <EditIcon onClick={handlerModal} className="edit-icon" />
        </span>
      </Tooltip>
      <Tooltip title={"Сделано"} placement="top">
        <span>
          <IsDoneIcon onClick={handlerIsDoneTask} className="is-done-icon" />
        </span>
      </Tooltip>
      <Tooltip title={"Удалить"} placement="top">
        <span>
          {isLoading ? (
            <LoaderIcon className="loading-icon" />
          ) : (
            <DeleteIcon onClick={handlerDeleteTask} className="delete-icon" />
          )}
        </span>
      </Tooltip>
    </>
  );
};
