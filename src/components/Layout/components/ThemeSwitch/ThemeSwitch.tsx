import { useAppDispatch, useAppSelector } from "@/store/store";
import { setTheme } from "@/store/themeReduser";
import { CustomSwitch } from "./CustomThemeSwitch";

export const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const toggleTheme = () => {
    dispatch(setTheme());
  };
  return <CustomSwitch checked={theme === "light"} onChange={toggleTheme} />;
};
