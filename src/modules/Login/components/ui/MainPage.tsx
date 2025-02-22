import { useNavigate } from "react-router-dom";
import "./MainPage.scss";
import { Button } from "@/ui/Button/Button";

export const MainPage = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("employees");
  };

  return (
    <div className="container">
      <div className="main">
        <h2 className="main__title"> Добро пожаловать!</h2>
        <Button type="button" onClick={login} className="main__btn">
          Войти
        </Button>
      </div>
    </div>
  );
};
