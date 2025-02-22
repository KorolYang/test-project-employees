import { useAppSelector } from "@/store/store";
import { CartesianGrid, XAxis, YAxis, Bar, BarChart, Tooltip, PieChart, Pie } from "recharts";
const data = [
  { name: "Болеет", count: 200 },
  { name: "Выходной", count: 300 },
  { name: "На работе", count: 250 },
];

export const Charts = () => {
  const dataTest = useAppSelector((state) => state.statistic.employeers);
  console.log(dataTest);
  return (
    <div>
      <BarChart width={800} height={300} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis dataKey="count" />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="count" fill="#8884d8" barSize={30} />
      </BarChart>
      <PieChart width={730} height={250}>
        <Pie data={data} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
      </PieChart>
    </div>
  );
};
