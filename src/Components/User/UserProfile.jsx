import React, { useContext } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";
import PostLists from "../Post/PostLists";
import { UserCxt } from "../../Config/UserContext";
// import { getAllUserPost } from "../../Config/server";
// import { RouteLink } from "../../Config/HelperComponents";

function UserProfile() {
  const { user } = useContext(UserCxt);

  function addFriends(e) {
    e.preventDefault();
    //Todo: add methods
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12} lg={6}>
        <Box marginLeft={2} marginY={5}>
          <Typography variant="h4">{user != null && user.user.name}</Typography>
          <Box marginY={2}>
            {/* {  <img
              className="avatar-img"
              src="https://picsum.photos/400/300"
              height="250px"
              width="250px"
              alt="user img"
            />} */}
          </Box>
          <Typography variant="h6" color="secondary">
            {user != null && user.user.email}
          </Typography>
          <Typography variant="h6" color="secondary">
            {user != null && user.user.username}
          </Typography>
          <Box marginY={2}>
            <Box>
              {/* <RouteLink
                to="/set/profile"
                children={
                  <Button variant="text" color="primary">
                    <span>
                      Set Profile <i class="ri-profile-line"></i>
                    </span>
                  </Button>
                }
              /> */}
            </Box>
          </Box>
          <Button
            onClick={addFriends}
            variant="outlined"
            size="large"
            color="primary"
          >
            Follow
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} lg={12}>
        <UserInfo userid={user.user._id} />
      </Grid>
    </Grid>
  );
}

export default UserProfile;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function UserInfo(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={1} className={classes.root}>
        <Container maxWidth="md">
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="tabs"
            centered={true}
          >
            <Tab label="Posts" {...a11yProps(0)} />
            <Tab label="Friends" {...a11yProps(1)} />
            <Tab label="Collections" {...a11yProps(2)} />
          </Tabs>
        </Container>
      </Paper>
      {/* Tabpannels */}
      <TabPanel value={value} index={0}>
        <PostLists />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid item xs={12} lg={12}>
          Under development
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid item xs={12} lg={12}>
          Under development
        </Grid>
      </TabPanel>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    backgroundColor: theme.palette.background.paper,
  },
}));
