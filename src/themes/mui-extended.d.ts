import '@mui/material/Button';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        gradient: true;
        blue: true;
        red_rounded: true;
        blue_rounded: true;
        blue_outlined: true;
    }
  }