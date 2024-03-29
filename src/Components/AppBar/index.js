import React, { useEffect, useMemo, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { AppBar as MuiAppBar, TextField } from "@material-ui/core";
import { Toolbar, IconButton, Avatar } from "@material-ui/core";
import { Menu, MenuItem, Fade } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useToken } from "../../Config";
import useStyles from "./style/index.css";
import { getUser } from "../../store/actions/users/user";
import { connect } from "react-redux";
import { Logout } from "../../store/actions/auth/logout";
import { UserAvatar } from "../utils/index";

function AppBar({ getLoggedUser, loggedUser, logout, searchValue = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEL, setAnchorEL] = useState(null);
  const [searchStr, setSearchStr] = useState(searchValue);
  const classes = useStyles();
  const history = useHistory();
  const token = useToken();

  useEffect(() => {
    getLoggedUser(token);
  }, []); //eslint-disable-line

  const user = useMemo(() => {
    const { isDone, data } = loggedUser;
    if (isDone && data !== null) {
      return loggedUser.data;
    } else {
      return {};
    }
  }, [loggedUser]);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(!isOpen);
    setAnchorEL(null);
  };
  const handleClick = (e) => {
    setAnchorEL(e.currentTarget);
    openMenu();
  };

  const profileRoute = () => {
    history.push("/profile");
  };
  // const accountRoute = () => {
  //   history.push("/account");
  // };
  const handleLogout = () => {
    logout();
    history.push("/");
  };
  const feedRoute = () => {
    history.push("/feed");
  };

  const getSearchStr = (e) => {
    setSearchStr(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?s=${searchStr}`);
  };

  return (
    <MuiAppBar position='static' variant='elevation' elevation={1} color='inherit'>
      <Toolbar>
        <Grid
          className={classes.root}
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='start'
            alignItems='center'
          >
            <IconButton onClick={feedRoute}>
              <i className={`ri-space-ship-line ${classes.logo}`}></i>
            </IconButton>
            <form onSubmit={handleSearch}>
              <TextField
                onChange={getSearchStr}
                size='small'
                type='search'
                variant='outlined'
                placeholder='Seacrh by name...'
                value={searchStr}
              />
            </form>
          </Box>
          <Box display='flex' flexDirection='row'>
            <Box marginX={2} />
            <Avatar className={classes.avatar} component='button' onClick={handleClick}>
              <UserAvatar name={user?.data?.username} />
            </Avatar>
            <Menu
              id='fade-menu'
              anchorEl={anchorEL}
              keepMounted
              onClose={closeMenu}
              open={isOpen}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={profileRoute}>Profile</MenuItem>
              {/* <MenuItem onClick={accountRoute}>Account</MenuItem> */}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    loggedUser: state.LoggedUserReducer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    getLoggedUser: (payload) => {
      dispatch(getUser(payload));
    },
    logout: () => {
      dispatch(Logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
