"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#1b202e",
      white: "#9497a2",
    },
    primary: {
      main: "#407d70",
      light: "#468d7f",
      dark: "#3b6d61",
      contrastText: "#1b202e",
    },
    secondary: {
      main: "#6d3b47",
      light: "#7e4752",
      dark: "#5c303d",
      contrastText: "#1b202e",
    },
    text: {
      primary: "#9497a2",
      secondary: "rgba(148, 151, 162, 0.5)",
      disabled: "rgba(148, 151, 162, 0.12)",
    },
    background: {
      paper: "#1b202e",
      default: "#1b202e",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
      color: "#9497a2",
    },
  },
});

// MUI Default Theme: https://mui.com/material-ui/customization/default-theme/
