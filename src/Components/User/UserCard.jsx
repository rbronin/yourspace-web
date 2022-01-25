import React from "react";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import { UserAvatar } from "../utils";

function UserCard({ user, key }) {
  const classes = useStyles();

  return (
    <Box padding='10px' margin='10px auto' display='flex' className={classes.root}>
      <Avatar sizes=''>
        <UserAvatar name={user?.name} />
      </Avatar>
      <div style={{ marginLeft: "10px" }}>
        <h5 className={classes.name}>{user?.name}</h5>
        <p className={classes.uName}>@ {user?.username}</p>
      </div>
      <div></div>
    </Box>
  );
}

export default UserCard;

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
    },
  },
  name: {
    fontSize: 17,
    fontWeight: 600,
    margin: 0,
    color: blueGrey[600],
    textTransform: "capitalize",
  },
  uName: {
    fontSize: 15,
    fontWeight: 500,
    margin: 0,
    color: blueGrey[400],
    textTransform: "lowercase",
  },
}));
