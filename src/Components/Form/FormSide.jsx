import React from "react";
import { Grid, Container, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  margin: {
    margin: "2px auto 2px auto",
  },

  link: {
    textDecoration: "none",
  },
}));

export default function FormSide(props) {
  const classes = useStyle();
  return (
    <Grid
      className="bg-primary reg-left-grid"
      item
      lg="4"
      xs="4"
      sm="4"
      direction="column"
      justify=""
      center
      alignItems="center"
    >
      <Container className="container" maxWidth="xs">
        <Grid
          xs="12"
          sm="12"
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <h1 className="bolder">{props.heading || "Welcome Back!"}</h1>
          <Container maxWidth="xs">
            <p className="p">
              {props.subHeading ||
                "To keep connected to your friends please login with your personal info"}
            </p>
          </Container>
          <Container className="formside-btn-mr" maxWidth="xs" lg="3" item>
            <Link className={classes.link} to={props.route || "/login"}>
              <Box className="formside-btn-mr cl-primary">
                <Button variant="outlined" color="default">
                  {props.btn || "SIGN IN"}
                </Button>
              </Box>
            </Link>
          </Container>
        </Grid>
      </Container>
    </Grid>
  );
}
