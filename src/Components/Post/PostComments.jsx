import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { getAUser } from "../../Config/server";
import { UserCxt } from "../../Config/UserContext";
import { Box, Paper } from "@material-ui/core";

function PostComments(props) {
  const classes = useStyles();
  const { username, comment } = props;
  const { user } = useContext(UserCxt);
  const [uName, setUName] = useState("N/A");

  useEffect(() => {
    getAUser(username, user.token)
      .then((res) => {
        setUName(res.name);
      })
      .catch((e) => console.log(e));
  });

  return (
    <Box>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            style={{ backgroundColor: "#5C6BC0" }}
            className={classes.small}
          >
            {uName.slice(0, 1).toUpperCase()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="primary"
              >
                {comment}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography variant="subtitle2" component="p">
                {uName.toUpperCase()}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </Box>
  );
}

export default PostComments;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));
