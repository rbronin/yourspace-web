import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: "#5499C7",
      main: "#0074b8",
      // light: "#3498DB",
      light: "#318ec4",
      // dark: "#2874A6",
      dark: "#005f96",
    },
    secondary: {
      main: "#884EA0",
      light: "#C39BD3",
      dark: "#512E5F",
    },
    error: {
      light: "#FF8A65",
      main: "#f50057",
      dark: "#E53935",
    },
    warning: {
      main: "#FFB74D",
      light: "#FFD600",
      dark: "#EF6C00",
    },
    info: {
      main: "#48C9B0",
      light: "#48C9B0",
      dark: "#48C9B0",
    },
    success: {
      main: "#239B56",
      light: "#48C9B0",
      dark: "#186A3B",
    },
  },
});

/**
 *
 * @param {Node} children - pass components or node to render
 */

function CustomTheme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default CustomTheme;
