import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: "light" | "dark";
}

const initialState: ThemeState = {
  theme: (localStorage.getItem("theme") as "light" | "dark") || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
