import { FC } from "react";
import { Link } from "react-router-dom";
import { TLayoutProps } from "../types/types";
import "./Layout.scss";
import { ThemeSwitch } from "./ThemeSwitch/ThemeSwitch";

export const Layout: FC<TLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header header">
        <nav className="header__nav">
          <Link to={"/employees"} className="header__nav-link">
            Список сотрудников
          </Link>
          <Link to={"/statistic-employees"} className="header__nav-link">
            Статистика сотрудников
          </Link>
        </nav>
        <ThemeSwitch />
      </header>
      <main className="main__container">{children}</main>
    </div>
  );
};
