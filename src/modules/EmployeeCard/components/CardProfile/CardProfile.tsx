import { useAppSelector } from "@/store/store";
import StatusSelector from "@/ui/Input/CustomSelect";
import { employeeSelector, statusSelector } from "../../slice/employeeSelectors";
import { decodeDataUrl } from "@/utils/decodeDataUrl";
import { dataFormat } from "@/utils/dataFormat";
import { PreLoader } from "@/ui/PreLoader/PreLoader";
import "./CardProfile.scss";

export const CardProfile = () => {
  const { avatar, firstName, lastName, birthdate, phone, jobType, sickCount, id, status, description } =
    useAppSelector(employeeSelector);

  const fetchStatus = useAppSelector(statusSelector);
  const isLoading = fetchStatus === "initial";

  const decodeAvatar = decodeDataUrl(avatar, 'width="200"', 'height="200"');
  return isLoading ? (
    <PreLoader />
  ) : (
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
