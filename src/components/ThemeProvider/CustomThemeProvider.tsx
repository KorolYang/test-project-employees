import { ThemeProvider, createTheme } from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";
import { ReactNode, useEffect } from "react";
import { injectReducer, useAppSelector } from "@/store/store";
import employeesReducer from "@/modules/EmployeesList/slices/employeesReducer";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[300],
    },
    secondary: {
      main: deepOrange[500],
    },
  },
  typography: {
    fontFamily: "Mulish, Furore, sans-serif",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey[500],
    },
    secondary: {
      main: deepOrange[200],
    },
  },
  typography: {
    fontFamily: "Mulish, Furore, sans-serif",
  },
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  injectReducer("employees", employeesReducer);

  const theme = useAppSelector((state) => state.theme.theme);
  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  }, [theme]);

  return <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>{children}</ThemeProvider>;
};
