import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "../../Components/AppBar";
import Post from "../../Components/Post";
import CreatePost from "../../Components/Post/CreatePost";
import useStyles from "./style/feed.css";

const Feeds = () => {
  const styles = useStyles();
  return (
    <div>
      <AppBar />
      <section className={styles.root}>
        <Grid container>
          <Grid className={styles.leftSide} item xs={0} sm={2} lg={3}></Grid>
          <Grid className={styles.middleSide} item xs={12} sm={8} lg={6}>
            <CreatePost />
            <Post />
          </Grid>
          <Grid className={styles.rightSide} item xs={0} sm={2} lg={3}></Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Feeds;
