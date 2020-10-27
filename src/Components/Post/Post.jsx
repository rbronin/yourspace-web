import React from "react";
import {
  Card,
  Grid,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import {
  FavoriteOutlined,
  FavoriteBorderOutlined,
  MoreVertOutlined,
  CommentOutlined,
  ShareOutlined,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    marginBottom: "1.5rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Post(props) {
  const classes = useStyles();
  const time = new Date();
  return (
    <Grid sm="12" lg="12" className={classes.root}>
      <Card>
        <CardHeader
          avatar={
            <Avatar alt="User" className={classes.avatar}>
              {props.avatar || " R"}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertOutlined />
            </IconButton>
          }
          title={
            <Typography variant="h6" component="h6">
              @{props.username || "NewUser"}
            </Typography>
          }
          subheader={props.postTime || time.toUTCString().slice(0, 16)}
        />
        <CardMedia
          className={classes.media}
          image={props.image || "https://picsum.photos/400/300"}
          title="post img"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlined />
          </IconButton>
          <IconButton aria-label="share">
            <CommentOutlined />
          </IconButton>
          <IconButton className={classes.expand} aria-label="Tag">
            <ShareOutlined />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
