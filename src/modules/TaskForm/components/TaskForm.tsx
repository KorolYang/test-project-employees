import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button } from "@/ui/Button/Button";
import { useAppDispatch } from "@/store/store";
import { createTask, editTasks } from "@/modules/TasksList/slice/tasksListReducer";
import { TTaskFormProps, TaskFormInputs } from "../types/types";
import "./TaskForm.scss";

export const TaskForm: FC<TTaskFormProps> = ({ setIsOpen, titleBtn, task, type }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TaskFormInputs>({
    values: {
      taskName: task?.taskName ?? "",
      taskDescription: task?.taskDescription || "",
      isUrgently: task?.isUrgently || false,
    },
  });
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
    switch (type) {
      case "create":
        const newTask = {
          taskName: data.taskName,
          taskDescription: data.taskDescription,
          taskId: Math.floor(100000 + Math.random() * 900000).toString(),
          isDone: false,
          isUrgently: data.isUrgently,
        };
        dispatch(createTask({ id, newTask }));
        setIsOpen(false);
        break;
      case "edit":
        const editTask = {
          ...task,
          taskName: data.taskName,
          taskDescription: data.taskDescription,
          isUrgently: data.isUrgently,
        };
        dispatch(editTasks({ id, newTask: editTask }));
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form__label" htmlFor="taskName">
        Название задания
      </label>
      {errors.taskName && <span className="error-message">{errors.taskName.message}</span>}
      <input
        className="form__input"
        id="taskName"
        type="text"
        {...register("taskName", {
          required: "Введите название задания",
          maxLength: { value: 15, message: "Задание не должно превышать 15 символов" },
        })}
      />
      <label className="form__label" htmlFor="taskDescription">
        Описание
      </label>
      <textarea className="form__textarea" id="taskDescription" {...register("taskDescription", {})}></textarea>
      <label className="form__label" htmlFor="isUrgently">
        Срочно
      </label>
      <input className="form__checkbox" type="checkbox" id="isUrgently" {...register("isUrgently")} />
      <Button>{titleBtn}</Button>
    </form>
  );
};
