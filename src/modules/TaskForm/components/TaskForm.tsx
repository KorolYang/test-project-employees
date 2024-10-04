import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button } from "@/ui/Button/Button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { createTask } from "@/modules/TasksList/slice/tasksListReducer";
import "./TaskForm.scss";
import { tasksListSelector } from "@/modules/TasksList/slice/tasksListSelectors";

type TaskFormInputs = {
  taskName: string;
  taskDescription: string;
  isUrgently: boolean;
};

export const TaskForm = ({ setIsOpen }: { setIsOpen: (art: boolean) => void }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TaskFormInputs>();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const tasks = useAppSelector(tasksListSelector);

  const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
    const newTask = {
      taskName: data.taskName,
      taskDescription: data.taskDescription,
      taskId: Math.floor(100000 + Math.random() * 900000).toString(),
      isDone: false,
      isUrgently: data.isUrgently,
    };
    const editTasks = [...tasks, newTask];
    dispatch(createTask({ id, editTasks }));
    setIsOpen(false);
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
      <Button>Создать</Button>
    </form>
  );
};
