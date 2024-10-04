import { useNavigate } from "react-router-dom";
import { Button } from "@/ui/Button/Button";
import "./ErrorPage.scss";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="error">
        <h2 className="error__title">Такой страницы не существует</h2>
        <Button onClick={goBack}>Вернутся назад</Button>
      </div>
    </div>
  );
};
