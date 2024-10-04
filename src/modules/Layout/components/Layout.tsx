import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { lightBlue, deepOrange } from "@mui/material/colors";
import { TLayoutProps } from "../types/types";
import "./Layout.scss";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: lightBlue[500],
    },
    secondary: {
      main: deepOrange[500],
    },
  },
});

// Создаем темную тему
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: lightBlue[200],
    },
    secondary: {
      main: deepOrange[200],
    },
  },
});

export const Layout: FC<TLayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Переключатель тем
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="layout">
        <header className="layout__header header">
          <nav className="header__nav">
            <Link to={"/employees"} className="header__nav-link">
              Список сотрудников
            </Link>
          </nav>
          {/* <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Пример переключения темы в MUI</h1>
            <Button variant="contained" color="primary" onClick={toggleTheme}>
              Переключить на {isDarkMode ? "светлую" : "темную"} тему
            </Button>
          </div> */}
        </header>
        <main className="main__container">{children}</main>
      </div>
    </ThemeProvider>
  );
};
