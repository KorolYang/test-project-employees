import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { Layout } from "./components/Layout";
import { store } from "./store/store";
import { CustomThemeProvider } from "./components/ThemeProvider/CustomThemeProvider";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Provider store={store}>
      <CustomThemeProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </CustomThemeProvider>
    </Provider>
  </HashRouter>,
);
