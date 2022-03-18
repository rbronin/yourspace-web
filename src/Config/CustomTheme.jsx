import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#536DFE",
      light: "#758afe",
      dark: "#3a4cb1",
    },
    secondary: {
      main: "#11cb5f",
      light: "#40d57f",
      dark: "#0b8e42",
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
