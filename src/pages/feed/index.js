import React, { useState, useEffect, useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import { Box } from "@material-ui/core";
import { Skeleton, Alert } from "@material-ui/lab";
import AppBar from "../../Components/AppBar";
import Post from "../../Components/Post";
import CreatePost from "../../Components/Post/CreatePost";
import CreatePostForm from "../../Components/Post/CreatePostForm";
import useStyles from "./style/feed.css";
import { postLists } from "./data";
import { connect } from "react-redux";
import { clearFeed, getFeed } from "../../store/actions/posts/feed";

const Feeds = ({ createdPostData, getFeed, clearFeed, userFeeds, loggedUser }) => {
  useEffect(() => {
    getFeed();
    return clearFeed;
  }, []); //eslint-disable-line
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

  const user = useMemo(() => {
    const { isDone, data } = loggedUser;
    if (isDone && data !== null) {
      return loggedUser.data.data;
    } else {
      return {};
    }
  }, [loggedUser]);

  return (
    <div>
      <AppBar />
      <Dialog maxWidth='sm' fullWidth={true} open={openModal} onClose={handleModalClose}>
        <CreatePostForm closeModal={handleModalClose} user={user} />
      </Dialog>
      <section className={styles.root}>
        <Grid container>
          <Grid className={styles.leftSide} item xs={0} sm={2} lg={3}></Grid>
          <Grid className={styles.middleSide} item xs={12} sm={8} lg={6}>
            <CreatePost onClick={handleClick} user={user} />
            <div>
              {userFeeds.isLoading &&
                [1, 2, 3, 4].map((item) => {
                  return (
                    <Box width='100%' marginX='auto' marginY={2}>
                      <Box
                        display='flex'
                        justifyContent='space-between'
                        mb={1}
                        width='100%'
                      >
                        <Skeleton
                          animation='wave'
                          variant='circle'
                          width={40}
                          height={40}
                        />
                        <Skeleton animation='wave' variant='text' width='90%' />
                      </Box>
                      <Skeleton
                        animation='wave'
                        variant='rect'
                        width='full'
                        height={118}
                      />
                    </Box>
                  );
                })}
              {userFeeds.isError && (
                <Alert severity='error'>{userFeeds.error?.response?.data}</Alert>
              )}
              {userFeeds?.data ? (
                userFeeds?.data?.data?.map((post, index) => (
                  <Post post={post} key={index} loggedUser={user} />
                ))
              ) : (
                <Box textAlign='center' fontSize='larger' color='gray' fontWeight='600'>
                  No feed available
                </Box>
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
    loggedUser: state.LoggedUserReducer,
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
