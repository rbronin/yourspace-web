import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";

function About(props) {
  const classes = useStyles();
  return (
    <Card variant="outlined" component="div">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "#5C6BC0" }}>U</Avatar>
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
                User comment will goes here!
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography variant="body1" component="p">
                User Name
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </Card>
  );
}

export default About;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));
