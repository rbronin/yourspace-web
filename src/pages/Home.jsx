import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { RouteLink } from "../Config/HelperComponents";

const Home = () => {
  return (
    <Box marginTop={2}>
      <Grid container>
        <HeadSection />
        <MainSection />
        <FooterSection />
      </Grid>
    </Box>
  );
};

export default Home;

function HeadSection() {
  return (
    <Grid container>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
        xs={6}
      >
        <Grid item>
          <Box marginLeft={2}>
            <i className="ri-stack-fill ri-3x"></i>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h4">Yourspace</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        spacing={3}
        xs={6}
      >
        <Grid item>
          <RouteLink
            to="/about"
            children={
              <Button variant="text" color="secondary">
                About
              </Button>
            }
          />
        </Grid>
        <Grid item>
          <RouteLink
            to="/login"
            children={
              <Button variant="text" color="secondary">
                Login
              </Button>
            }
          />
        </Grid>
        <Grid item>
          <RouteLink
            to="/signup"
            children={
              <Button variant="outlined" color="secondary">
                Signup
              </Button>
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

function MainSection() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box marginTop={10} marginBottom={1}>
        <Typography
          variant="h4"
          component="strong"
          style={{ fontWeight: "bolder" }}
        >
          Share your life's stacks and enjoy together.
        </Typography>
      </Box>
      <Box m={1} marginBottom={3}>
        <Typography variant="body1" component="p">
          Enjoy the awesome moments with friends!
        </Typography>
      </Box>
      <Box>
        <RouteLink
          to="/signup"
          children={
            <Button variant="contained" color="secondary">
              Get Started
            </Button>
          }
        />
      </Box>
      <Box marginTop={3}>
        <img height={300} src="./assets/social.svg" alt="banner" />
      </Box>
    </Grid>
  );
}

function FooterSection() {
  const date = new Date();
  return (
    <Grid container direction="row" justify="center" alignItems="flex-end">
      <Grid item>
        <Typography variant="caption" component="p">
          &copy; {date.getFullYear()} by Ravi Bhart
          <a
            href="https://github.com/ravics1721"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", marginLeft: 5 }}
          >
            <i className="ri-link"></i>
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}
