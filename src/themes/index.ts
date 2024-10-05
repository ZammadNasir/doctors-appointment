import { createTheme } from "@mui/material/styles";

// assets
import colors from "assets/scss/_themes-vars.module.scss";

// project imports
import componentStyleOverrides from "./compStyleOverride";
import themePalette from "./palette";

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization: any) => {
  const color = colors;

  const themeOption = {
    colors: color,
    gray50: color.gray50,
    gray100: color.gray100,
    gray200: color.gray200,
    gray300: color.gray300,
    gray400: color.gray400,
    gray500: color.gray500,
    gray600: color.gray600,

    blue_main: color.blue_main,
    blue_primary: color.blue_primary,
    blue_secondary: color.blue_secondary,
    blue_dark: color.blue_dark,
    blue_light: color.blue_light,
    
    customization,
  };

  const themeOptions = {
    direction: "ltr",
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    zIndex: {
      appBar: 10,
      drawer: 1200,
      fab: 1050,
      mobileStepper: 1000,
      modal: 1500,
      snackbar: 1400,
      speedDial: 1050,
      tooltip: 1300,
    },
  } as object;

  const themes = createTheme(themeOptions) as any;
  themes.components = componentStyleOverrides(themeOption);

  return themes;
};

export default theme;
