import styled from "@emotion/styled";
import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import React from "react";

interface BootstrapTooltipProps extends TooltipProps {
  width: string | number;
  height: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
}

const BootstrapTooltip = styled(
  ({ className, width, height, ...props }: BootstrapTooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme, width, height, minWidth, minHeight }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    border: "1px solid lightgrey",
    top: "-12px",
    width,
    minWidth,
    minHeight,
    height,
    borderRadius: 2,
    color: "black",
    padding: 0,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "white",
    transform: "translateX(-60px)",
    fontSize: 20,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "0px",
      border: "1px solid lightgrey",
      borderRadius: 2,
    },

    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: 2,
    },
  },
}));

interface CustomToolTipProps {
  children: any;
  title: React.ReactNode;
  width: string | number;
  height: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  show_arrow: boolean;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}

export default function CustomToolTip(props: CustomToolTipProps) {
  const {
    width,
    height,
    show_arrow,
    title,
    children,
    minWidth,
    minHeight,
    placement = "bottom-start",
  } = props;
  return (
    <BootstrapTooltip
      width={width}
      height={height}
      minHeight={minHeight}
      minWidth={minWidth}
      arrow={show_arrow}
      placement={placement}
      title={title}
    >
      {children}
    </BootstrapTooltip>
  );
}
