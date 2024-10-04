import FormControl from "@mui/material/FormControl";
import { FC, useState } from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "@/store/store";
import { changeStatusOfEmployee } from "@/modules/EmployeesList/slices/employeesReducer";

type EmployeeStatus = "working" | "dayOff" | "sick";

const statusMapping: Record<EmployeeStatus, string> = {
  working: "На работе",
  dayOff: "Выходной",
  sick: "Болеет",
};

type TStatusSelector = {
  currentStatus: string;
  id: string;
};

const StatusSelector: FC<TStatusSelector> = ({ currentStatus, id }) => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState(currentStatus);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus);
    dispatch(changeStatusOfEmployee({ id, status: selectedStatus }));
  };

  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      <Select value={status} onChange={handleChange}>
        {Object.keys(statusMapping).map((statusKey) => (
          <MenuItem key={statusKey} value={statusKey}>
            {statusMapping[statusKey as EmployeeStatus]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StatusSelector;
