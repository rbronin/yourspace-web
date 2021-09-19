import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#11cb5f",
      light: "#40d57f",
      dark: "#0b8e42",
    },
    secondary: {
      main: "#4d148c",
      light: "#7043a3",
      dark: "#350e62",
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
