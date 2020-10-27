import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import HomeAppBar from "../Components/HomeAppBar";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Lato", sans-serif',
    // fontFamily: '"Fira Sans", sans-serif',
    // fontFamily: '"Poppins", sans-serif',
    // fontFamily: '"Montserrat", sans-serif',
    // fontFamily: '"Exo", sans-serif',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid xs={12} sm={12} direction="column" justify="space-around">
        <HomeAppBar />
        <Grid
          xs="12"
          sm="12"
          direction="colomn"
          justify="space-around"
          alignItems="center"
        >
          <Typography variant="h4" component="h3">
            Welcome to Your Space!
          </Typography>
          <Typography>A palce where you meet people like you.</Typography>
          <Button color="primary">Get Started</Button>
          <Link to="/profile">Profile</Link>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

export default Home;
