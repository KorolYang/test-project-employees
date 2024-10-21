import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import { lightBlue, deepOrange } from "@mui/material/colors";
import { AppRouter } from "./router";
import { Layout } from "./components/Layout";
import { store } from "./store/store";
import { CustomThemeProvider } from "./components/ThemeProvider/CustomThemeProvider";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <CustomThemeProvider>
        {/* <ThemeProvider theme={theme}> */}
        <Layout>
          <AppRouter />
        </Layout>
        {/* </ThemeProvider> */}
      </CustomThemeProvider>
    </Provider>
  </BrowserRouter>,
);
