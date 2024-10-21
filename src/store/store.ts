import { configureStore, combineReducers, Reducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DynamicState, ExtendedStore, StaticState } from "./types";
import themeReduser from "./themeReduser";

const staticReducers = {
  theme: themeReduser,
};

export const createRootReducer = (asyncReducers = {}) =>
  combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });

export const store: ExtendedStore = configureStore({
  reducer: createRootReducer,
});

export function injectReducer(key: string, asyncReducer: Reducer) {
  if (!store.asyncReducers) store.asyncReducers = {};

  if (!store.asyncReducers[key]) {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createRootReducer(store.asyncReducers));
  }
}

export type RootState = StaticState & DynamicState;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
