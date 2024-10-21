import { useNavigate } from "react-router-dom";
import { Button } from "@/ui/Button/Button";
import "./ErrorPage.scss";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("employees");
  };

  return (
    <div className="container">
      <div className="error">
        <h2 className="error__title">Такой страницы не существует</h2>
        <Button onClick={goBack}>Вернутся на главную</Button>
      </div>
    </div>
  );
};
