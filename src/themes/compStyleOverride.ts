export default function componentStyleOverrides(theme: any) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          letterSpacing: "0.7px",
          color: "#fff",
          backgroundColor: theme.blue_main,
          fontFamily: "Poppins-Regular",
          display: "inline-flex",
          padding: "10px 16px",
          textTransform: "capitalize",
          fontSize: 16,
          "&:hover": {
            backgroundColor: theme.blue_main,
          },
          "&.MuiButton-sizeLarge": {
            fontSize: 20,
          },

          "&.MuiButton-sizeMedium": {
            fontSize: 14,
            padding: "6px 12px",
          },

          "&.MuiButton-sizeSmall": {
            fontSize: 12,
            padding: "6px 10px",
          },
        },
      },
      variants: [
        {
          props: { variant: "blue_primary" },
          style: {
            backgroundColor: theme.blue_primary,
            "&:hover": {
              backgroundColor: theme.blue_primary,
            },
          },
        },
        {
          props: { variant: "blue_primary_rounded" },
          style: {
            backgroundColor: theme.blue_primary,
            borderRadius: 25,
            "&:hover": {
              backgroundColor: theme.blue_primary,
            },
          },
        },
        {
          props: { variant: "blue_secondary" },
          style: {
            backgroundColor: theme.blue_secondary,
            "&:hover": {
              backgroundColor: theme.blue_secondary,
            },
          },
        },
        {
          props: { variant: "blue_dark" },
          style: {
            backgroundColor: theme.blue_dark,
            borderRadius: 25,
            "&:hover": {
              backgroundColor: theme.blue_dark,
            },
          },
        },
        {
          props: { variant: "blue_outlined" },
          style: {
            backgroundColor: "#fff",
            border: `1px solid ${theme.blue_main}`,
            color: theme.blue_main,
            "&:hover": {
              backgroundColor: theme.blue_main,
              color: "#fff",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "#fff",
            border: `1px solid ${theme.blue_main}`,
            color: theme.blue_main,
            "&:hover": {
              backgroundColor: theme.blue_main,
              color: "#fff",
            },
          },
        },
      ],
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
        rounded: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: "#fff",
          background: theme.blue_primary,
          padding: 8,
        },
        title: {
          fontSize: 28,
          fontFamily: "Poppins-Bold",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: "#000",
          padding: "4px 6px",
          "&.Mui-selected": {
            color: theme.blue_primary,
            backgroundColor: theme.white,
          },
          "& .MuiListItemIcon-root": {
            color: theme.blue_primary,
          },
          "&:hover": {
            backgroundColor: theme.gray50,
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.grey500,
          minWidth: "36px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 13,
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        label: {
          color: theme.gray300,
          fontSize: "12px",
          fontFamily: "Poppins-Regular",
          marginTop: 4,
          "&.Mui-selected": {
            color: theme.blue_primary,
            fontSize: "12px",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          "&::placeholder": {
            color: theme.darkTextSecondary,
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.black,
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "Poppins-Bold",
          textTransform: "uppercase",
          "&.Mui-focused": {
            color: theme.blue_primary,
          },
          "&.Mui-error": {
            color: theme.blue_primary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: theme.white,
          borderRadius: 4,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.gray200,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.gray400,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.blue_primary,
          },
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: theme.white,
          padding: "10px 14px",
          borderRadius: 4,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: 4,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: theme.colors?.grey300,
          },
        },
        mark: {
          backgroundColor: "#fff",
          width: "4px",
        },
        valueLabel: {
          color: theme.blue_light,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.blue_dark,
          background: theme.blue_primary,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-deletable .MuiChip-deleteIcon": {
            color: "inherit",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors?.grey700,
        },
      },
    },
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          color: "#fff",
          background: "#fff",
          "& .MuiTypography-overline": {
            display: "none",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          // border: '1px solid rgba(0, 0, 0, .125)',
          boxShadow: "none",
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "auto",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          marginBottom: -1,
          padding: 0,
          width: "100%",
          margin: 0,
          background: "#f1f1f1",
          borderRadius: "8px 8px 0px 0px",
          paddingInline: 12,
          minHeight: 50,
          "&.Mui-expanded": {
            minHeight: 50,
          },
          "& .MuiAccordionSummary-content": {
            width: "100%",
            "&.Mui-expanded": {
              margin: 0,
              padding: 0,
            },
          },
        },
        expandIcon: {
          color: theme.gray400,
          padding: 0,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: theme.blue_primary,
            backgroundColor: "transparent",
          },
          "&.Mui-checked:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          // width: 42,
          // height: 26,
          // padding: 0,
          "& .MuiSwitch-switchBase": {
            // padding: 1,
            "&.Mui-checked": {
              // transform: 'translateX(16px)',
              color: "#fff",
              "& + .MuiSwitch-track": {
                backgroundColor: theme.blue_main,
                opacity: 1,
              },
            },
          },
        },
        thumb: {
          // width: 24,
          // height: 24,
        },
        track: {
          borderRadius: 26 / 2,
          backgroundColor: "#e4e4e4",
          opacity: 1,
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins-Regular",
          "&.Mui-selected": {
            backgroundColor: "#1976d2",
            color: "#ffffff",
          },
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        switchViewButton: {
          color: "#000",
        },
        label: {
          fontFamily: "Poppins-Regular",
          color: "#000",
        },
      },
    },
    MuiPickersYear: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins-Regular",
          "&.Mui-selected": {
            color: "#1976d2",
          },
        },
      },
    },
    MuiPickersMonth: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins-Regular",
          "&.Mui-selected": {
            color: "#1976d2",
          },
        },
      },
    },
  };
}
