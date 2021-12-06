import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function CreatePost({ onClick }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.row}>
          <Avatar className={classes.avatar} variant='circle'>
            {"A"}
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
    borderRadius: 10,
    padding: theme.spacing(1, 2),
    border: `1px solid ${theme.palette.grey[300]}`,
  },
  avatar: {
    margin: theme.spacing(0, 1, 0, 0),
    backgroundColor: "#fefefe",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 10,
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
      backgroundColor: theme.palette.grey[200],
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
