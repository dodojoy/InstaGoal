'use client'

import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      fontFamily: [
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h4: {
        fontSize: 32,
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#202020",
        dark: "#25AD62",
        contrastText: "#fff",
      },
      secondary: {
        main: "#333",
        dark: "#222",
        contrastText: "#fff",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 900,
        lg: 1200,
        xl: 1600,
      },
    },
  });

