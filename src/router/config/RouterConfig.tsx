import { Suspense } from "react";
import { LazyEmployeeCardWithReducer } from "@/modules/EmployeeCard/EmployeeCard.lazy";
import { ErrorPage } from "@/modules/Error";
import { MainPage } from "@/modules/Login";
import { LazyEmployeesListWithReducer } from "@/modules/EmployeesList/EmployeesList.lazy";
import { PreLoader } from "@/ui/PreLoader/PreLoader";
import { LazyStatisticEmployeeWithReducer } from "@/modules/StatisticEmployees/StatisticEmployees.lazy";

export const RoutesConfig = () => [
  {
    path: "/",
    element: (
      <Suspense fallback={"loading..."}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "/employees",
    element: (
      <Suspense fallback={<PreLoader />}>
        <LazyEmployeesListWithReducer />
      </Suspense>
    ),
  },
  {
    path: "/employee/:id",
    element: (
      <Suspense fallback={<PreLoader />}>
        <LazyEmployeeCardWithReducer />
      </Suspense>
    ),
  },
  {
    path: "statistic-employees",
    element: (
      <Suspense fallback={<PreLoader />}>
        <LazyStatisticEmployeeWithReducer />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={"loading..."}>
        <ErrorPage />
      </Suspense>
    ),
  },
];
