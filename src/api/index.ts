import axios from "axios";
import { employees } from "./eployees/employees";

export const instance = axios.create({
  baseURL: "https://66ed44c9380821644cdc3dc2.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const API = {
  employees: employees(instance),
};
