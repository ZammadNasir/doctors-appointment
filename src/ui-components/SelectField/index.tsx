/*
  Created By Muhammad Hassaan
  Date 15 April 2023
*/
import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { Autocomplete, Paper, TextField } from "@mui/material";
import { defaultLabelColors } from "utils/constants";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function SelectField(props: any) {
  const {
    input_label,
    required,
    value,
    classes,
    error,
    options,
    isDisabled,
    name,
    variant,
    placeholder,
    handleSelect,
    readOnly,
    disableClearable,
    fullWidth,
    width,
  } = props;
  return (
    <form
      style={{ width: "100%" }}
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {input_label && (
        <label
          style={{ fontSize: 14, paddingLeft: 12, color: "black" }}
          className={classNames(
            classes.input_label_style,
            "Poppins-Regular",
            error && classes.color_red
          )}
        >
          {input_label ?? ""}
          {required && !value ? <span style={{ color: "red" }}> *</span> : ""}
        </label>
      )}
      <Autocomplete
        // id="county-city"
        options={options}
        getOptionLabel={(option) => option.label}
        fullWidth={fullWidth}
        disabled={isDisabled}
        // placeholder={placeholder}
        style={{
          background: isDisabled ? "#f6f6f6" : "transparent",
          color: defaultLabelColors.color_e,
          width: width,
        }}
        size="small"
        value={value}
        PaperComponent={({ children }) => (
          <Paper
            sx={{
              "& ul": {
                "& li": {
                  fontFamily: "Poppins-Regular",
                  fontSize: 16,
                  fontWeight: "normal",
                  lineHeight: "normal",
                  letterSpacing: "normal",
                  color: defaultLabelColors.color_e,
                  borderBottom: "1px solid #E0E0E0",
                },
              },
            }}
            style={{
              boxShadow:
                "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
              maxHeight: 200,
              overflow: "hidden scroll",
            }}
          >
            {children}
          </Paper>
        )}
        popupIcon={
          <KeyboardArrowDown style={{ color: defaultLabelColors.color_f }} />
        }
        autoComplete={false}
        onChange={(event, values) => handleSelect(name, event, values)}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            name={name}
            {...params}
            size="small"
            autoComplete="off"
            aria-autocomplete="none"
            placeholder={placeholder}
            error={error}
            variant={variant}
            inputProps={{
              ...params.inputProps,
              style: {
                fontFamily: "Poppins-Regular",
                fontSize: 16,
                fontWeight: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                backgroundColor: isDisabled ? "#f6f6f6" : "transparent",
                background: isDisabled ? "#f6f6f6" : "transparent",
                color: defaultLabelColors.color_e,
                width: "100%",
              },
              autocomplete: "off",
              "aria-autocomplete": "none",
            }}
            InputProps={{
              ...params.InputProps,
              style: {
                background: isDisabled ? "#f6f6f6" : "white",
                height: 43,
                paddingRight: 10,
              },
              endAdornment: (
                <React.Fragment>
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
              autoComplete: "off",
            }}
            style={{ background: isDisabled ? "#f6f6f6" : "white" }}
          />
        )}
        readOnly={readOnly}
        disableClearable={disableClearable}
      />
    </form>
  );
}
SelectField.defaultProps = {
  input_label: "",
  value: null,
  required: false,
  error: false,
  classes: {},
  size: "small",
  variant: "outlined",
  placeholder: "",
  InputProps: null,
  inputProps: null,
  InputLabelProps: null,
  style: null,
  handleSelect: null,
  options: [],
  isDisabled: false,
  readOnly: false,
  name: "",
  disableClearable: false,
  width: null,
};

SelectField.propTypes = {
  input_label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,

  options: PropTypes.any,

  value: PropTypes.any,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["outlined", "standard"]),
  required: PropTypes.bool,
  classes: PropTypes.object,
  InputProps: PropTypes.any,
  inputProps: PropTypes.any,
  InputLabelProps: PropTypes.any,
  style: PropTypes.any,
  error: PropTypes.bool,
  isDisabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  disableClearable: PropTypes.bool,
  width: PropTypes.any,
  handleSelect: PropTypes.func,
};
