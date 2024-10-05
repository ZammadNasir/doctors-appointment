import { TextField } from "@mui/material";
import classNames from "classnames";

interface InputFieldProps {
  input_label?: string;
  placeholder?: string;
  value?: string | number;
  size?: 'small' | 'medium';
  variant?: 'outlined' | 'standard';
  required?: boolean;
  classes?: any;
  InputProps?: any;
  inputProps?: any;
  InputLabelProps?: any;
  style?: React.CSSProperties;
  error?: boolean;
  fullWidth?: boolean;
  type?: string;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rows?: string | number;
  multiline?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  input_label_2?: React.ReactNode;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  autoFocus?: boolean;
  label?: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    input_label,
    required = false,
    value = "",
    classes,
    error,
    rows,
    multiline = false,
    disabled = false,
    input_label_2,
  } = props;

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{
        width: "100%",
      }}
    >
      {input_label_2 ? (
        <div style={{ display: "flex" }}>
          <label
            className={classNames(
              classes.input_label_style,
              "Kanit-Light-Regular",
              error && classes.color_red
            )}
            style={{ flex: 1 }}
          >
            {input_label}
            {required && !value ? <span style={{ color: "red" }}> *</span> : ""}
          </label>
          <span style={{ paddingRight: 15 }}>{input_label_2}</span>
        </div>
      ) : input_label ? (
        <label
          style={{ fontSize: 14, paddingLeft: 12, color: "black" }}
          className={classNames(
            classes.input_label_style,
            "Kanit-Light",
            error && classes.color_red
          )}
        >
          {input_label ?? ""}
          {required && !value ? <span style={{ color: "red" }}> *</span> : ""}
        </label>
      ) : null}
      {/* input field as first child of form to disable the autocomplete forcely  */}
      <input
        autoComplete="false"
        name="hidden"
        type="text"
        style={{ display: "none" }}
      />
      <TextField
        {...props}
        rows={rows}
        autoComplete="off"
        multiline={multiline}
        disabled={disabled}
      />
    </form>
  );
}

export default InputField;