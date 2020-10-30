import React from "react";

import { Grid, Container, Typography } from "@material-ui/core";
import UserAvatar from "./UserAvatar";
import UserInfo from "./UserInfo";

export default function Profile() {
  return (
    <Grid
      lg={12}
      md={12}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography>Ravics</Typography>
      <UserAvatar />
      {/**
       * @descrption : user post and info components
       */}
      <Container>
        <UserInfo />
      </Container>
    </Grid>
  );
}
