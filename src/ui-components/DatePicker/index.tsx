import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import { InputAdornment } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import classNames from "classnames";
import moment from "moment";

interface Props {
  value?: any;
  maxDate?: moment.Moment | null;
  variant: "standard" | "outlined";
  disabled?: boolean;
  showIcon?: boolean;
  classes?: any;
  input_label?: string;
  required?: any;
  error?: any;
  disablePast?: any;
  disableFuture?: any;
  onChange?: (date: any) => void;
  handleDateChange?: (date: any) => void;
  show_icon?: Boolean;
  label?: string;
  style?: any;
}

// export default function DatePicker(props: Props) {
const DatePicker: React.FC<Props> = (props) => {
  const {
    classes,
    input_label,
    required,
    value,
    error,
    disabled = false,
    disablePast,
    disableFuture,
    onChange,
    show_icon = false,
    maxDate,
    variant = "standard",
    label,
    style,
  } = props;

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {input_label && (
        <label
          style={{ fontSize: 14, paddingLeft: 12, color: "black" }}
          className={classNames(
            classes.input_label_style,
            error && classes.color_red
          )}
        >
          {input_label ?? ""}
          {required && !value ? <span style={{ color: "red" }}> *</span> : ""}
        </label>
      )}

      <MobileDatePicker
        value={value ? moment(value) : null}
        format="DD.MM.YYYY"
        maxDate={maxDate}
        label={label}
        sx={style}
        slotProps={{
          textField: {
            variant,
            InputProps: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{
                    background: "white",
                    cursor: disabled ? "auto" : "pointer",
                  }}
                >
                  {show_icon && (
                    <CalendarMonthSharpIcon sx={{ color: "#11438f" }} />
                  )}
                </InputAdornment>
              ),
            },
          },
        }}
        onChange={onChange}
        disabled={disabled}
        disablePast={disablePast}
        disableFuture={disableFuture}
      />
    </form>
  );
};

export default DatePicker;
