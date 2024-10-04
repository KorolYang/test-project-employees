import { AxiosInstance } from "axios";
import { Task } from "@/modules/TasksList/slice/types";

export const employees = (instance: AxiosInstance) => ({
  getEmployees() {
    return instance({
      method: "GET",
      url: "employees",
    });
  },
  getEmployeeByID(id: string) {
    return instance({
      method: "GET",
      url: `employees/${id}`,
    });
  },
  changeStatus(id: string, status: string) {
    return instance({
      method: "PUT",
      url: `employees/${id}`,
      data: {
        status,
      },
    });
  },
  createTask(id: string, tasks: object) {
    return instance({
      method: "PUT",
      url: `employees/${id}`,
      data: {
        tasks,
      },
    });
  },
});
