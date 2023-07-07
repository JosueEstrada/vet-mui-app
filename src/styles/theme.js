import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#bf1b96",
      light: "#dc85c0",
      dark: "#a40082",
    },
    secondary: {
      main: "#1bbf44",
      light: "#72d47f",
      dark: "#009d2e",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
// type: 'dark',
//   primary: {
//   main: '#bf1b96',
//     light: '#dc85c0',
//     dark: '#a40082',
// },
// secondary: {
//   main: '#1bbf44',
//     light: '#72d47f',
//     dark: '#009d2e',
// },
