import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { blue } from "@material-ui/core/colors";

function UserCard(props) {
  const classes = useStyles();
  const { name, username, key } = props;
  const avatar = name ? name.slice(0, 1).toUpperCase() : "NA";
  return (
    <Card variant="outlined">
      <ListItem key={key} classes={classes.root}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>{avatar}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={username} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="follow">
            <i class="ri-user-follow-line"></i>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Card>
  );
}

export default UserCard;

const useStyles = makeStyles((theme) => ({
  root: {
    width: " 200px",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    backgroundColor: blue[800],
  },
}));
