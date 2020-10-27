import React from "react";
import { Grid, Container } from "@material-ui/core";
import AppBarHome from "../Components/Feed/AppBarHome";
import Post from "../Components/Post/Post";
//import CreatePost from "../Components/Post/CreatePost";
import { Link } from "react-router-dom";

export default function Feed() {
  return (
    <Grid xl="12" sm="12" direction="column">
      <AppBarHome />
      <Link to="/create/post">Create Post</Link>
      <Container maxWidth="md">
        <Post username="ravics" avatar="RB" />
      </Container>
    </Grid>
  );
}
