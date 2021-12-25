import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "../../Components/AppBar";
import Post from "../../Components/Post";
import CreatePost from "../../Components/Post/CreatePost";
import CreatePostForm from "../../Components/Post/CreatePostForm";
import useStyles from "./style/feed.css";
import { postLists } from "./data";
import { connect } from "react-redux";
import { clearFeed, getFeed } from "../../store/actions/posts/feed";

const Feeds = ({ createdPostData, getFeed, clearFeed, userFeeds }) => {
  useEffect(() => {
    getFeed();
    return clearFeed;
  }, []); //eslint-disable-line
  console.log({ userFeeds });
  const styles = useStyles();
  const [openModal, setOpenModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState(postLists);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <AppBar />
      <Dialog maxWidth='sm' fullWidth={true} open={openModal} onClose={handleModalClose}>
        <CreatePostForm closeModal={handleModalClose} />
      </Dialog>
      <section className={styles.root}>
        <Grid container>
          <Grid className={styles.leftSide} item xs={0} sm={2} lg={3}></Grid>
          <Grid className={styles.middleSide} item xs={12} sm={8} lg={6}>
            <CreatePost onClick={handleClick} />
            <div>
              {userFeeds?.data ? (
                userFeeds?.data?.data?.map((post, index) => (
                  <Post post={post} key={index} />
                ))
              ) : (
                <div>No feed available</div>
              )}
            </div>
          </Grid>
          <Grid className={styles.rightSide} item xs={0} sm={2} lg={3}></Grid>
        </Grid>
      </section>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    createdPostData: state.CreatePostReducer,
    userFeeds: state.FeedReducer,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    getFeed: () => {
      dispatch(getFeed());
    },
    clearFeed: () => {
      dispatch(clearFeed());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
