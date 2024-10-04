import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import { lightBlue, deepOrange } from "@mui/material/colors";
import { AppRouter } from "./router";
import { Layout } from "./modules/Layout";
import { store } from "./store/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ff00",
    },
  },
});

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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <Layout>
        <AppRouter />
      </Layout>
      {/* </ThemeProvider> */}
    </Provider>
  </BrowserRouter>,
);
