import React from "react";
import MUIButton from "@mui/material/Button";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  value?: React.ReactNode;
  disable?: boolean;
  style?: React.CSSProperties;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  variant?:
    | "outlined"
    | "contained"
    | "text"
    | "gradient"
    | "blue"
    | "blue_rounded"
    | "blue_outlined";
  sx?: {};
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  value,
  disable,
  style,
  endIcon,
  startIcon,
  fullWidth,
  variant,
  size,
  sx,
}) => {
  return (
    <MUIButton
      sx={sx}
      type="button"
      className={className}
      disabled={disable}
      size={size}
      variant={variant}
      onClick={onClick}
      style={style}
      endIcon={endIcon}
      startIcon={startIcon}
      fullWidth={fullWidth}
    >
      {value}
    </MUIButton>
  );
};

export default Button;
