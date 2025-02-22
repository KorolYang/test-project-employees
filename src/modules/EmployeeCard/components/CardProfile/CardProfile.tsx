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
        <img
          // src={decodeAvatar}
          src={
            "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E"
          }
          alt="employee-avatar"
        />
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
