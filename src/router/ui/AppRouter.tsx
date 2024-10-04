import { memo } from "react";
import { useRoutes } from "react-router-dom";
import { RoutesConfig } from "../config/RouterConfig";

const AppRouter = memo(() => {
  return useRoutes(RoutesConfig());
});

export default AppRouter;
