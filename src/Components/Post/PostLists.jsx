import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Typography, Avatar, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { UserCxt } from "../../Config/UserContext";
import { getAllUserPost } from "../../Config/server";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    maxHeight: 200,
  },
  media: {
    height: 200, // 16:9
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

  const { content, username, image, time, like, comments } = props;
  return (
    <Box marginY={2} marginRight={0.5} marginLeft={1} maxWidth={500}>
      <Card classes={classes.root}>
        {image && (
          <CardMedia
            component="img"
            classes={classes.media}
            width="100%"
            height="300px"
            src={image}
          />
        )}
        {/* <img
          src="./assets/girlinform.jpg"
          alt="user-post"
          height={400}
          width="100%"
        /> */}

        <CardHeader
          avatar={<Avatar>U</Avatar>}
          title={username}
          subheader={time}
        />
        <CardContent>
          <Typography>{content}</Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <i class="ri-heart-3-line"></i>
          </IconButton>
          <IconButton>
            <i class="ri-chat-3-line"></i>
          </IconButton>
          <IconButton>
            <i class="ri-bookmark-line"></i>
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default PostLists;

function PostLists() {
  const { user, setUser } = React.useContext(UserCxt);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getAllUserPost(user.user._id, user.token).then((res) => {
      return setPosts(res);
    });
  }, []);

  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  return (
    <Grid container>
      {posts &&
        posts.map((post, index) => {
          console.log(post);
          if (post.photo !== undefined) {
            const src = `data:image/png;base64,${_arrayBufferToBase64(
              post.photo.data.data
            )}`;
            return (
              <Post
                content={post.title}
                username={post.userid}
                image={src}
                time={post.time}
              />
            );
          }
          return (
            <Post
              content={post.title}
              username={post.userid}
              time={post.time}
            />
          );
        })}
    </Grid>
  );
}
