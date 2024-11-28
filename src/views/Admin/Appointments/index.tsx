import { Print } from "@mui/icons-material";
import moment from "moment";
import { useReducer } from "react";
import Button from "ui-components/Button";
import ReactBigCalendar from "ui-components/Calender";
import CustomDataTable from "ui-components/DataTable";
import DatePicker from "ui-components/DatePicker";
import SelectField from "ui-components/SelectField";

const columns = [
  { id: 'patientname', label: 'Patient Name', minWidth: 170 },
  { id: 'appointmenttime', label: 'Appointment Time', minWidth: 100 },
  { id: 'doctorname', label: 'Doctor Name', minWidth: 100 },
];


export default function Appointments({ classes }: any) {
  const [state, setState] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      date: moment(),
    }
  );
  return (
    <div className={classes.admin_layout_padding}>
      <p className="Poppins-SemiBold fs-14">Appointments</p>
      <br />
      <CustomDataTable
      columns={columns}
      // rows={rows}
      rows={[]}
      title="Appointments Today"
      rowsPerPageOptions={[5, 10, 20]}
    />
    </div>
  );
}
