/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme: any) {
  return {
    black: theme.black,
    white: theme.white,

    blue_main: theme.blue_main,
    blue_primary: theme.blue_primary,
    blue_secondary: theme.blue_secondary,
    blue_dark: theme.blue_dark,
    blue_light: theme.blue_light,
  };
}
