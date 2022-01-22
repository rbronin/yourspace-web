import React, { useEffect } from "react";
import { Box, Grid, Tab, Tabs, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import { connect } from "react-redux";
import AppBar from "../../Components/AppBar";
import { getPost } from "../../store/actions/posts/get-post";
import { useToken } from "../../Config";
import { Skeleton, Alert } from "@material-ui/lab";
import Post from "../../Components/Post";

const imgUrl =
  "https://images.unsplash.com/photo-1555524554-0fdb51cd5020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80";

const Profile = ({ userData, getPosts, postData, loggedUser }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const token = useToken();
  console.log({ userData });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value === 0) {
      getPosts({ token: token });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const metaInfo = [
    {
      type: "Activity",
      number: 100,
    },
    {
      type: "Friends",
      number: 150,
    },
    {
      type: "Posts",
      number: 20,
    },
  ];
  console.log({ loggedUser });

  return (
    <>
      <AppBar />
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={12} sm={8} lg={6}>
          <Box className={classes.box}>
            {/* User profile image */}
            <div
              className={classes.img}
              style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>
            <div className={classes.group}>
              <div>
                <h2 className={classes.name}>{userData?.data?.data?.name ?? "NA"}</h2>
                <h3 className={classes.title}>
                  {userData?.data?.data?.username ?? "NA"}
                </h3>
              </div>
              {/* User meta info */}
              <Box
                dir='row'
                display='flex'
                alignItems='flex-start'
                className={classes.metaGroup}
              >
                {metaInfo.map((item) => (
                  <div className={classes.itemGroup}>
                    <h4 className={classes.item}>{item.type}</h4>
                    <h5 className={classes.number}>{item.number}</h5>
                  </div>
                ))}
              </Box>

              {/* Actions */}
              {loggedUser.data?.data?._id !== userData.data?.data?._id && (
                <Box className={classes.actions}>
                  <Button
                    disabled
                    variant='outlined'
                    color='primary'
                    style={{ marginRight: 30 }}
                  >
                    Chat
                  </Button>

                  <Button variant='outlined' color='secondary'>
                    Follow
                  </Button>
                </Box>
              )}
            </div>
          </Box>
          <Box>
            {/* info */}
            <Paper variant='outlined' className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='inherit'
                centered
              >
                <Tab label='Posts' />
                <Tab label='Friends' />
                <Tab label='Collections' />
              </Tabs>
              <Box width='full' bgcolor='white' minHeight='200px'>
                <TabPanel color='black' value={value} index={0} style={{ paddingX: 10 }}>
                  {postData.isLoading &&
                    [1, 2, 3, 4].map((item) => {
                      return (
                        <Box width='70%' marginX='auto' marginY={2}>
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
                  {postData.isError && (
                    <Alert severity='error'>{postData.error?.response?.data}</Alert>
                  )}
                  <Box paddingX={4}>
                    {postData.data &&
                      postData.data?.data?.map((post) => {
                        return <Post post={post} loggedUser={loggedUser.data.data} />;
                      })}
                  </Box>
                </TabPanel>
                <TabPanel color='black' value={value} index={1}>
                  Comming soon 😎
                </TabPanel>
                <TabPanel color='black' value={value} index={2}>
                  Comming soon 😎
                </TabPanel>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    userData: state.LoggedUserReducer,
    postData: state.GetPostReducer,
    loggedUser: state.LoggedUserReducer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    getPosts: (payload) => {
      dispatch(getPost(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

function TabPanel({ children, value, index, style, ...other }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2} color='#000000'>
          {children}
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.main,
    color: "#ffffff",
    borderColor: theme.palette.grey[300],
  },
  img: {
    width: 250,
    height: 250,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "100%",
    borderRadius: 10,
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(1.2, 1),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1.2, 1),
    },
  },
  group: {
    padding: theme.spacing(1),
    height: 230,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
      height: "auto",
    },
  },
  name: {
    fontSize: 22,
    fontWeight: 600,
    color: blueGrey[900],
    margin: theme.spacing(1, 0, 0),
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
    color: blueGrey[300],
    margin: theme.spacing(0),
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  box: {
    background: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    margin: theme.spacing(2, 0),
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingY: 3,
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      boxShadow: theme.shadows[0],
    },
  },
  metaGroup: {
    backgroundColor: blueGrey[50],
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1),
    borderRadius: 5,
  },
  itemGroup: {
    margin: theme.spacing(1, 3),
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(1, 2.5),
    },
  },
  item: {
    color: blueGrey[300],
    fontWeight: 600,
    margin: 0,
  },
  number: {
    color: blueGrey[800],
    fontWeight: 600,
    margin: 0,
    fontSize: 20,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
}));
