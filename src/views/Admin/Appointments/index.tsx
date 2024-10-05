import { Print } from "@mui/icons-material";
import moment from "moment";
import { useReducer } from "react";
import Button from "ui-components/Button";
import ReactBigCalendar from "ui-components/Calender";
import DatePicker from "ui-components/DatePicker";
import SelectField from "ui-components/SelectField";

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBlock: 26,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <SelectField />
          <DatePicker
            value={state.date}
            onChange={(date) => setState({ date: date })}
            label=""
            variant={"outlined"}
            show_icon={true}
          />
        </div>
        <div>
          <Button
            value={"Add Leave"}
            size="small"
            variant="outlined"
            style={{ marginRight: 16 }}
          />
          <Button value={"Print"} size="small" startIcon={<Print />} />
        </div>
      </div>
      <div style={{ width: 1000 }}>
        <ReactBigCalendar />
      </div>
    </div>
  );
}
