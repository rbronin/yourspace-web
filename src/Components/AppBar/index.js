import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { AppBar as MuiAppBar, TextField } from "@material-ui/core";
import { Toolbar, IconButton, Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "./style/index.css";

export default function AppBar() {
  const classes = useStyles();
  const avatar = "A";
  const history = useHistory();
  function handelClick(e) {
    e.preventDefault();
    history.push("/user");
  }
  return (
    <MuiAppBar position='static' variant='elevation' elevation={1} color='default'>
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
            <IconButton>
              <i className={`ri-space-ship-line ${classes.logo}`}></i>
            </IconButton>
            <TextField
              size='small'
              type='text'
              variant='outlined'
              placeholder='Seacrh by name...'
            />
          </Box>
          <Box display='flex' flexDirection='row'>
            <IconButton onClick={handelClick}>
              <i className='ri-home-smile-line'></i>
            </IconButton>
            <Box marginX={2} />
            <Avatar className={classes.avatar}>{avatar || "A"}</Avatar>
          </Box>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
}
