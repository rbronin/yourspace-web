import React from "react";
import { Grid, Card, Container, Typography } from "@material-ui/core";

export default function UserInfo(props) {
  return (
    <Grid lg="6" sm="12" direction="row" justify="center" alignItems="center">
      <Card color="primary">
        <Typography>Posts</Typography>
        <Typography>{props.posts || 0}</Typography>
      </Card>
      <Card color="primary">
        <Typography>Friends</Typography>
        <Typography>{props.friends || 0}</Typography>
      </Card>
      <Card color="primary">
        <Typography>Following</Typography>
        <Typography>{props.following || 0}</Typography>
      </Card>
    </Grid>
  );
}
