import React from "react";
import {
  TextField,
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { MenuRounded, Settings } from "@material-ui/icons";
import useStyles from "../../Core/styles";

const muiTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: {
      light: teal[200],
      main: "#49ADA0",
      contrastText: "#fefefe",
    },
  },
});

export default function AppBarHome() {
  const style = useStyles();
  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className={style.root}>
        <AppBar className={style.appbar} position="static" color="secondary">
          <Toolbar>
            <IconButton className={style.menuButton} edge="start">
              <MenuRounded color="action" />
            </IconButton>
            <Typography className={style.title} variant="h6" noWrap>
              YourSpace
            </Typography>
            <div className={style.search}>
              <TextField variant="outlined" type="search" size="small" />
            </div>
            <IconButton className={style.tool} edge="end">
              <Settings />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}
