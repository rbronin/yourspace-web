import React from "react";
import AppBar from "../../Components/AppBar";
import Post from "../../Components/Post";
import useStyles from "./style/feed.css";

const Feeds = () => {
  const styles = useStyles();
  return (
    <div>
      <AppBar />
      <section className={styles.root}>
        <Post />
      </section>
    </div>
  );
};

export default Feeds;
