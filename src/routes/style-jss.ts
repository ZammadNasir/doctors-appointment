/*
  Created By Muhammad Hassaan
  Date 10 April 2023
*/
import { makeStyles } from "@mui/styles";
import { defaultLabelColors } from "utils/constants";
const useStyles = makeStyles((theme: any) => ({
  align_center: {
    display: "flex",
    alignItems: "center",
  },
  align_end: {
    display: "flex",
    alignItems: "flex-end",
  },
  justify_center: {
    display: "flex",
    justifyContent: "center",
  },
  justify_end: {
    display: "flex",
    justifyContent: "flex-end",
  },
  direction_row: {
    flexDirection: "row",
  },
  direction_column: {
    flexDirection: "column",
  },
  display_flex_baseline: {
    display: "flex",
    alignItems: "baseline",
  },

  breadcrumb_container: {
    padding: "10px 40px",
    background: "#fff",
    boxShadow:
      "0px 2px 4px -1px #00000033, 0px 4px 5px 0px #00000024, 0px 1px 10px 0px #0000001f",
    // position: "fixed",
    // width: "100%",
    marginBottom: 10,
  },
  breadcrumb_head: {
    color: "#000000" || "#000",
    fontFamily: "Poppins-Regular",
    fontSize: 34,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  breadcrumb_time: {
    fontFamily: "Poppins-Medium",
    color: "#000",
    fontSize: 24,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  breadcrumb_description: {
    fontFamily: "Poppins-Regular",
    color: "#000",
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  },

  main_layout_padding: {
    padding: "15px 100px 0px 100px",
  },

  admin_layout_padding: {
    padding: "50px 20px 50px 20px",
  },

  colored_input_feild: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: theme.palette.blue_main,
    background: "#fff",
  },
  input_feild: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    background: "#fff",
    color: "#000",
  },

  info_table: {
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: theme.palette.primary.color_f,
  },

  background_sand: {
    background: "#fff",
  },

  background_light_gray: {
    background: "#e0e0e0",
  },

  table_head: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000",
  },

  normal_text: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000",
  },
  simple_normal_text: {
    fontSize: 15,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000",
  },
  pagination_per_page: {
    padding: 5,
    borderRadius: 4,
    fontSize: 14,
    color: theme.palette.blue_main,
    background: theme.palette.grey50,
    marginRight: 30,
  },
  color_secondary: {
    color: `${theme.palette.blue_main} !important`,
  },
  color_primary: {
    color: `${theme.palette.blue_primary} !important`,
  },
  bg_gray: {
    backgroundColor: "#f6f6f6",
    background: "#f6f6f6",
  },
  primary_divider: {
    borderColor: theme.palette.blue_primary,
    borderBottomWidth: "medium",
  },
  secondary_divider: {
    borderColor: theme.palette.blue_main,
    borderBottomWidth: "medium",
  },
  gray_divider: {
    borderColor: theme.palette.grey50,
    borderBottomWidth: "medium",
    borderLeftWidth: "medium",
    borderRadius: 10,
  },
  pagination_container: {
    color: theme.palette.blue_main,
    "& ul": {
      "& li": {
        "& .Mui-selected": {
          background: theme.palette.blue_main,
          border: `1px solid ${theme.palette.blue_main}`,
          color: "#fff",
          fontFamily: "Poppins-Regular",
          fontSize: 14,
          borderRadius: 3,
          "&:hover": {
            background: theme.palette.blue_main,
            color: "#fff",
          },
        },
        "& button": {
          background: theme.palette.grey50,
          color: theme.palette.blue_main,
        },
      },
    },
  },
  check_icon: {
    color: `${theme.palette.blue_main} !important`,
    height: 24,
    width: 24,
  },

  selected_row: {
    border: `2px solid ${theme.palette.blue_main}`,
  },
  unselected_row: {
    borderBottom: `none`,
    borderTop: `2px solid transparent`,
    borderLeft: `2px solid transparent`,
    borderRight: `2px solid transparent`,
  },
  input_label_style: {
    padding: "0px 0px 4px 10px",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: theme.palette.grey300,
  },
  color_red: {
    color: `${theme.palette.blue_primary}`,
  },
  button_width: {
    // maxWidth: 150,
    minWidth: 120,
    maxHeight: 43,
    minHeight: 43,
    textTransform: "none",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "none",
      minWidth: "0px",
      marginBottom: 5,
    },
  },
  contained_button: {
    background: theme.palette.blue_main,
    color: defaultLabelColors.color_h,
    transition: "1s",
    "&:hover": {
      background: theme.palette.blue_main,
      color: defaultLabelColors.color_h,
      transition: "1s",
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
  },
  outlined_button: {
    background: defaultLabelColors.color_h,
    color: theme.palette.blue_main,
    borderColor: theme.palette.blue_main,
    transition: "1s",
    "&:hover": {
      background: defaultLabelColors.color_h,
      transition: "1s",
      boxShadow:
        "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
  },

  disabled_button: {
    background: theme.palette.grey50,
    color: theme.palette.grey300,
    borderColor: theme.palette.grey50,
    // transition: "1s",
  },

  modal_background: {
    backgroundColor: theme.palette.blue_main,
    background: theme.palette.blue_main,
    padding: "10px 20px",
  },
  modal_title: {
    fontSize: 22,
    fontWeight: "normal",
    lineHeight: "normal",
    color: defaultLabelColors.color_h,
    letterSpacing: "0.015em",
  },
  card_label_style: {
    fontSize: 16,
    color: "gray",
    fontFamily: "Poppins-Medium",
  },
  card_value_style: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Poppins-Medium",
  },
  profile_name: {
    fontSize: 20,
    color: "#000",
    fontFamily: "Poppins-Bold",
    letterSpacing: 1.5,
  },

  active_tab: {
    borderRadius: "5px 5px 0px 0px",
    color: theme.palette.blue_main,
    letterSpacing: ": 0.05em",
    fontSize: 18,
    minWidth: 250,
    fontFamily: "PoppinsCondensed-Medium",
  },
  inactive_tab: {
    color: theme.palette.grey300,
    letterSpacing: ": 0.05em",
    fontSize: 18,
    minWidth: 250,
    fontFamily: "PoppinsCondensed-Medium",
  },
  accordion_head_container: {
    backgroundColor: `${"#fff"} !important`,
    background: `${"#fff"} !important`,
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: "3px 3px 0px 0px ",
    minHeight: `38px !important`,
    height: `38px !important`,
  },
  accordion_heading: {
    fontSize: 20,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "0.015em",
    color: "#000",
    fontFamily: "Poppins-Medium",
  },
  accordion_icons: {
    fontSize: 20,
    color: theme.palette.grey300,
  },
  accordion_container: {
    border: `1px solid ${"#fff"}`,
  },
  accordion_detail_padding: {
    padding: "24px 32px 30px",
  },
  toggle_sections: {
    color: theme.palette.blue_main,
    fontSize: 16,
    paddingLeft: 15,
    fontFamily: "Poppins-Regular",
    cursor: "pointer",
  },
  view_image_text: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    fontFamily: "PoppinsCondensed-Regular",
    color: theme.palette.blue_main,
  },
  dialog_footer_info: {
    fontSize: 14,
    fontFamily: "PoppinsCondensed-Regular",
    color: theme.palette.grey300,
    width: "max-content",
  },
  dialog_description: {
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: theme.palette.grey300,
    fontFamily: "Poppins-Medium",
  },
  dialog_description_2: {
    fontSize: 16,
    color: theme.palette.blue_main,
    fontFamily: "PoppinsCondensed-Regular",
  },
  radio_label: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: theme.palette.blue_main,
  },

  unselect_radio_label: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: theme.palette.grey300,
  },
  setting_icons: {
    color: theme.palette.blue_main,
    height: 60,
    width: "100%",
  },
  setting_container: {
    background: "#ffffff",
    margin: 30,
    padding: 20,
    border: `2px solid ${theme.palette.blue_light}`,
    borderRadius: 5,

    [theme.breakpoints.down("sm")]: {
      // margin: 50,
    },
  },
  setting_heading: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
  setting_description: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: theme.palette.grey300,
  },
  setting_hover: {
    transition: "0.5s",
    padding: 10,
    borderRadius: 10,
    "&:hover": {
      background: "#fff",
      transition: "0.5s",
    },
  },
  switch_label: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: theme.palette.blue_main,
  },
  rate_dialog_label: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: theme.palette.grey300,
  },
  responsive_width: {
    width: "30%",
    [theme.breakpoints.down("xl")]: {
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  commission_label: {
    fontSize: 16,
    color: theme.palette.grey300,
    fontFamily: "PoppinsCondensed-Medium",
  },
  dashboard_card_head: {
    fontSize: 30,
    color: theme.palette.blue_main,
    fontFamily: "PoppinsCondensed-Medium",
  },
  dashboard_card_title: {
    fontSize: 16,
    color: theme.palette.blue_main,
    fontFamily: "Poppins-Medium",
  },
  dashboard_card_container: {
    padding: 10,
    border: `1px solid ${theme.palette.blue_main}`,
    borderRadius: 5,
    position: "relative",
    boxShadow: `0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)`,
  },

  // main styling

  header: {
    background: "#fff",
  },
  header_inner: {
    padding: "20px 16px",
    [theme.breakpoints.down("sm")]: {
      padding: "12px 16px",
    },
  },
  otp_main: {
    background: "white",
    padding: 12,
    width: 400,
    height: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    gap: "1rem",
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  otp_inputs: {
    marginRight: 12,
    borderRadius: 8,
    padding: 12,
    textAlign: "center",
    border: "2px solid #0078AE",
    color: "black",
    width: "60px",
    height: "55px",
    marginBottom: 12,
  },


}));

export default useStyles;
