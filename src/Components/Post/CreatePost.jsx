import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { UserAvatar } from "../utils";

function CreatePost({ onClick, user }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.row}>
          <Avatar className={classes.avatar} variant='circle'>
            <UserAvatar name={user?.username} />
          </Avatar>
          <div className={classes.input} onClick={onClick}>
            Write new post...
          </div>
        </div>
      </div>
      <div className={classes.divider}> </div>
    </>
  );
}

export default CreatePost;

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 5,
    padding: theme.spacing(1, 2),
    border: `1px solid ${theme.palette.grey[300]}`,
    background: theme.palette.common.white,
  },
  avatar: {
    margin: theme.spacing(0, 1, 0, 0),
    backgroundColor: "#fefefe",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    border: `1px solid ${theme.palette.grey[300]}`,
  },
  input: {
    borderRadius: 5,
    width: "100%",
    height: 40,
    border: `1px solid ${theme.palette.grey[300]}`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(1),
    color: theme.palette.grey[600],
    boxSizing: "border-box",
    fontWeight: 500,
    fontSize: 17,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: blue[50],
    },
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    height: 0,
    width: "100%",
    border: "none",
    borderTop: `1px solid ${theme.palette.grey[400]}`,
    margin: theme.spacing(2, 0),
  },
}));
