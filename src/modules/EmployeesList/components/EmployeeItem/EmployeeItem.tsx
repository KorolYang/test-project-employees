import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { Employee } from "../../slices/types";
import StatusSelector from "@/ui/Input/CustomSelect";
import { getTaskWord } from "../../helper/taskWord";
import { decodeDataUrl } from "@/utils/decodeDataUrl";
import "./EmployeeItem.scss";

export type TEmployeeItemProps = {
  employee: Employee;
};

export const EmployeeItem: FC<TEmployeeItemProps> = memo(({ employee }) => {
  const avatar = decodeDataUrl(employee.avatar, 'width="60"', 'height="60"');
  const { id } = employee;
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/employee/${id}`);
  };

  return (
    <li className="employee">
      <div className="employee__avatar">
        <img src={avatar} alt="employee-avatar" />
      </div>
      <div className="employee__fio" onClick={onClickHandler}>
        <p>
          {employee.firstName} {employee.lastName}
        </p>
      </div>
      <div className="employee__status">
        <div>
          <StatusSelector currentStatus={employee.status} id={id} />
        </div>
      </div>
      <div className="employee__tasks">
        <p>{getTaskWord(employee.tasks.length)}</p>
      </div>
    </li>
  );
});
