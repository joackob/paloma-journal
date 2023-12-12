import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
const options: ThemeOptions = {
  palette: {
    primary: {
      light: "#757ce8",
      main: "#D95F67",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#F2C1BD",
      dark: "#ba000d",
      contrastText: "#8C8C8D",
    },
    background: {
      default: "#8C8C8D",
    },
  },
};
const theme = createTheme(options);
const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
