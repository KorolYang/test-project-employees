import { FC, memo } from "react";
import { Task } from "../../slice/types";
import { TaskSettings } from "../TaskSettings/TaskSettings";
import UrgentlyIcon from "@/assets/icons/urgently.svg";
import "./TaskItem.scss";
import clsx from "clsx";

export type TTaskItemProps = {
  task: Task;
};

export const TaskItem: FC<TTaskItemProps> = memo(({ task }) => {
  console.log("taskItem");
  return (
    <li className={clsx("task-item", { "task-item__done": task.isDone })}>
      <div className="task-item__name">
        <p>{task.taskName}</p>
      </div>
      <div className="task-item__descr">
        <p>{task.taskDescription}</p>
      </div>
      <div className="task-item__urgently">{task.isUrgently && <UrgentlyIcon className="urgently-icon" />}</div>
      <div className="task-item__setting">
        <TaskSettings task={task} />
      </div>
    </li>
  );
});
