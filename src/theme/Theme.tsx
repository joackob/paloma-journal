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
    info: {
      light: "#757ce8",
      main: "#D95F67",
      dark: "#002884",
      contrastText: "#fff",
    },
    action: {
      active: "#D95F67",
      hover: "#F2C1BD",
      hoverOpacity: 0,
      selected: "#F2A7A7",
      selectedOpacity: 0,
      disabled: "#fff",
      disabledOpacity: 1,
      disabledBackground: "#fff",
      focus: "#D95F67",
      focusOpacity: 0,
      activatedOpacity: 0,
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
