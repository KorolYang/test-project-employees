import { useAppDispatch } from "@/store/store";
import { Charts } from "./Charts/Charts";
import { useEffect } from "react";
import { GetEmployeesStatistic } from "../slice/StatisticReducer";

const StatisticEmployee = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetEmployeesStatistic());
  }, []);
  return (
    <div className="statistic-container">
      <Charts />
    </div>
  );
};

export default StatisticEmployee;
