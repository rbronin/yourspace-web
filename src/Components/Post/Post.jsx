import React, { useEffect, useState, useContext } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import { Typography, Avatar, Box, Collapse, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import PostComments from "./PostComments";
import { addLikes, addComments, getAUser } from "../../Config/server";
import { UserCxt } from "../../Config/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    maxHeight: 200,
  },
  media: {
    height: 300, // 16:9
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
    backgroundColor: "red",
  },
}));

function Post(props) {
  const classes = useStyles();
  const { user } = useContext(UserCxt);
  const [isLiked, setIsLiked] = useState(false);
  const [pUserName, setPUserName] = useState("N/A");
  const id = props.postid;
  let likes = [];
  likes = JSON.parse(props.likes);
  const posttime = new Date(props.time);
  let time = `${posttime.toDateString()},
  ${posttime.toLocaleTimeString()},`;
  const [comments, setComments] = useState(JSON.parse(props.comments));

  useEffect(() => {
    if (likes.length !== 0 || likes.length !== 1) {
      const value = likes.find((id) => id === user.user._id);
      if (value) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }
    getAUser(props.username, user.token)
      .then((response) => {
        setPUserName(response.name);
      })
      .catch((e) => console.log(e));
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  function addPostLike(e) {
    e.preventDefault();
    addLikes(id, user.token)
      .then((res) => {
        setIsLiked(true);
      })
      .catch((err) => console.log(err));
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [comment, setComment] = useState("");
  function handleInputComment(e) {
    e.preventDefault();
    setComment(e.target.value);
  }

  function handlePostComments(e) {
    e.preventDefault();
    addComments(id, user.token, comment)
      .then((res) => {
        if (res) {
          setComment("");
          setComments(res.comments);
        }
      })
      .catch((er) => console.log(er));
  }

  return (
    <Box key={props.key} marginY={2} marginX={5}>
      <Card classes={classes.root}>
        {props.image && (
          <CardMedia
            component="img"
            classes={classes.media}
            width="100%"
            height="300px"
            src={props.image}
          />
        )}
        <CardHeader
          avatar={
            <Avatar style={{ backgroundColor: "purple" }}>
              {pUserName.slice(0, 1).toUpperCase()}
            </Avatar>
          }
          title={pUserName.toUpperCase()}
          subheader={time}
        />
        <CardContent>
          <Typography>{props.content}</Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={addPostLike}>
            {isLiked ? (
              <i className="ri-heart-3-fill" style={{ color: "purple" }}></i>
            ) : (
              <i className="ri-heart-3-line"></i>
            )}
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <i className="ri-chat-3-line"></i>
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider variant="middle" component="hr" />
          <Box m={1}>
            <AddComments
              onchange={handleInputComment}
              onsubmit={handlePostComments}
              value={comment}
            />
            <Box marginX={1} marginY={1}>
              <List>
                {comments &&
                  comments.map((comment) => {
                    return (
                      <PostComments
                        username={comment.id}
                        comment={comment.title}
                      />
                    );
                  })}
              </List>
            </Box>
          </Box>
        </Collapse>
      </Card>
    </Box>
  );
}

export default Post;

function AddComments(props) {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <form onSubmit={props.onsubmit}>
        <TextField
          type="text"
          required={true}
          variant="standard"
          color="secondary"
          multiline={true}
          rowsMax={5}
          placeholder="Write a comment."
          onChange={props.onchange}
          value={props.value}
        />
        <Button type="submit" variant="outlined" size="small" color="primary">
          Add
        </Button>
      </form>
    </Grid>
  );
}
