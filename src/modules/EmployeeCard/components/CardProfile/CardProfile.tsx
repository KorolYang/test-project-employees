import { useAppSelector } from "@/store/store";
import StatusSelector from "@/ui/Input/CustomSelect";
import { employeeSelector } from "../../slice/employeeSelectors";
import { decodeDataUrl } from "@/utils/decodeDataUrl";
import { dataFormat } from "@/utils/dataFormat";
import "./CardProfile.scss";

export const CardProfile = () => {
  console.log("cardProfile");
  const { avatar, firstName, lastName, birthdate, phone, jobType, sickCount, id, status, description } =
    useAppSelector(employeeSelector);

  const decodeAvatar = decodeDataUrl(avatar, 'width="200"', 'height="200"');

  return (
    <div className="card">
      <div className="employee-card__avatar">
        <img src={decodeAvatar} alt="employee-avatar" />
      </div>
      <div className="employee-card__profile">
        <p>
          {firstName} {lastName}
        </p>
        <p>Дата Рождения: {dataFormat(birthdate)}</p>
        <p>Телефон: {phone}</p>
        <p>Должность: {jobType}</p>
        <p>Количество больничных: {sickCount}</p>
        <p>О себе: {description}</p>
      </div>
      <StatusSelector currentStatus={status} id={id} />
    </div>
  );
};
