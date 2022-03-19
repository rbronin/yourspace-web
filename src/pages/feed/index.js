import React, { useState, useEffect, useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import { Box, Card } from "@material-ui/core";
import { Skeleton, Alert } from "@material-ui/lab";
import AppBar from "../../Components/AppBar";
import Post from "../../Components/Post";
import CreatePost from "../../Components/Post/CreatePost";
import CreatePostForm from "../../Components/Post/CreatePostForm";
import useStyles from "./style/feed.css";
import { connect } from "react-redux";
import { clearFeed, getFeed } from "../../store/actions/posts/feed";
import { getRecommendation } from "../../store/actions/users/recommend";
import { getFriends } from "../../store/actions/users/friends";
import UserCard from "../../Components/User/UserCard";
import { useToken } from "../../Config";
import { UserAvatar } from "../../Components/utils";

const Feeds = ({
  createdPostData,
  getFeed,
  clearFeed,
  userFeeds,
  loggedUser,
  userRecommendData,
  recommendedUser,
  getFriends,
}) => {
  const styles = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const token = useToken();
  useEffect(() => {
    getFeed();
    return clearFeed;
  }, [createdPostData]); //eslint-disable-line
  useEffect(() => {
    if (userFeeds.isDone === true && userFeeds.data !== null) {
      recommendedUser({ token });
      getFriends({ token });
    }
  }, [userFeeds]); //eslint-disable-line

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
          <Grid className={styles.leftSide} item xs={0} sm={2} lg={3}>
            <Box paddingY={2} paddingX={2}>
              <Card variant='outlined'>
                {loggedUser.isLoading && (
                  <Box
                    paddingX={5}
                    paddingY={2}
                    display='flex'
                    flexDirection='column'
                    alignItems='flex-start'
                    my={2}
                    width='100%'
                  >
                    <Skeleton
                      animation='wave'
                      variant='circle'
                      width={100}
                      height={100}
                    />
                    <Skeleton
                      animation='wave'
                      style={{ borderRadius: 5, margin: "10px auto" }}
                      variant='text'
                      width='80%'
                    />
                    <Skeleton
                      animation='wave'
                      style={{ borderRadius: 5 }}
                      variant='text'
                      width='80%'
                    />
                  </Box>
                )}
                {!loggedUser.isLoading && loggedUser.data && (
                  <Box
                    paddingX={5}
                    paddingY={2}
                    display='flex'
                    flexDirection='column'
                    alignItems='flex-start'
                  >
                    {user && <UserAvatar name={user?.username} size={100} />}
                    <h3 className={styles.name}>{user?.name}</h3>
                    <h4 className={styles.uname}> @ {user?.username}</h4>
                  </Box>
                )}
              </Card>
            </Box>
          </Grid>
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
          <Grid className={styles.rightSide} item xs={0} sm={2} lg={3}>
            <Box paddingY={2} paddingX={2}>
              {userRecommendData.isLoading &&
                [1, 2, 3, 4, 5].map((item) => {
                  return (
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      alignItems='center'
                      my={2}
                      width='100%'
                    >
                      <Skeleton
                        animation='wave'
                        variant='circle'
                        width={50}
                        height={50}
                      />
                      <Skeleton
                        animation='wave'
                        style={{ borderRadius: 5 }}
                        variant='rect'
                        height={40}
                        width='80%'
                      />
                    </Box>
                  );
                })}
              {!userRecommendData.isLoading && userRecommendData.data && (
                <Card variant='outlined' style={{ padding: "5px 10px" }}>
                  {/* <h3>User Recommendation</h3> */}
                  {userRecommendData.data?.data?.map((user, i) => {
                    return <UserCard user={user} key={i} />;
                  })}
                </Card>
              )}
            </Box>
          </Grid>
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
    userRecommendData: state.GetRecommendReducer,
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
    recommendedUser: (payload) => {
      dispatch(getRecommendation(payload));
    },
    getFriends: (payload) => {
      dispatch(getFriends(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
