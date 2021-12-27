import React from "react";
import { Box, Grid, Tab, Tabs, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import { connect } from "react-redux";

const imgUrl =
  "https://images.unsplash.com/photo-1555524554-0fdb51cd5020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80";

const Profile = ({ userData }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log({ userData });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item xs={12} sm={10} lg={8}>
        <Box className={classes.box}>
          {/* User profile image */}
          <div
            className={classes.img}
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
          <div className={classes.group}>
            <div>
              <h2 className={classes.name}>{userData?.data?.data?.name ?? "NA"}</h2>
              <h3 className={classes.title}>{userData?.data?.data?.username ?? "NA"}</h3>
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
            <Box className={classes.actions}>
              <Button variant='outlined' color='primary' style={{ marginRight: 30 }}>
                Chat
              </Button>
              <Button variant='outlined' color='secondary'>
                Follow
              </Button>
            </Box>
          </div>
        </Box>
        <Box>
          {/* info */}
          <Paper variant='outlined' className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor='primary'
              textColor='primary'
              centered
            >
              <Tab label='Posts' />
              <Tab label='Friends' />
              <Tab label='Collections' />
            </Tabs>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    userData: state.LoggedUserReducer,
  };
};
export default connect(mapStateToProps)(Profile);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: blueGrey[50],
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
