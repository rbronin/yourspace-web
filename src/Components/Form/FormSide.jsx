import React from "react";
import { Grid, Box, Typography, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function RegLeft(props) {
  return (
    <Grid
      className="bg-primary reg-left-grid"
      item
      xs="4"
      sm="4"
      direction="column"
      justify="center"
      alignItems="center"
    >
      {props.logo === "true" && (
        <Grid xs="6" sm="6">
          <h5 className="logo">
            Your
            <span className="logo-right">Space</span>
          </h5>
        </Grid>
      )}
      <Container className="container" maxWidth="xs">
        <Grid
          xs="12"
          sm="12"
          direction="column"
          justify="center"
          alignItems="center"
        >
          <h1 className="bolder">{props.heading || "Welcome Back!"}</h1>
          <Container maxWidth="xs">
            <p className="p">
              {props.subHeading ||
                "To keep connected to your friends please login with your personal info"}
            </p>
          </Container>
          <Link to={props.route || "/login"}>
            <button className="btn-outlined-center">
              {props.btn || "SIGN IN"}
            </button>
          </Link>
        </Grid>
      </Container>
    </Grid>
  );
}
