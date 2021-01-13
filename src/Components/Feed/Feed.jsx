import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import {
  Toolbar,
  IconButton,
  Avatar,
  Button,
  Paper,
  List,
} from "@material-ui/core";
import Post from "../Post/Post";
import CreatePost from "../Post/CreatePost";
import UserCard from "../User/UserCard";
import { RouteLink } from "../../Config/HelperComponents";
import { UserCxt } from "../../Config/UserContext";
import { getUserFeed, getUserList } from "../../Config/server";

function Feed() {
  return (
    <Box>
      <MyAppBar />
      <CreatePost />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        xs={12}
        lg={12}
      >
        <Grid container direction="column" lg={3} xs={0}></Grid>
        <Grid
          items
          lg={6}
          xs={12}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <PostsArea />
        </Grid>
        <Grid lg={3} xs={0}>
          <UserList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Feed;

function MyAppBar() {
  return (
    <AppBar position="static" variant="elevation" color="primary">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Box display="flex" flexDirection="row">
            <IconButton edge="start">
              <i class="ri-menu-fill"></i>
            </IconButton>
            <RouteLink
              to="/"
              children={<Typography variant="h4">mysatck</Typography>}
            />
          </Box>
          <Box display="flex" flexDirection="row">
            <IconButton>
              <i class="ri-search-2-line"></i>
            </IconButton>
            <Box marginX={2} />
            <RouteLink
              to="/user/profile"
              children={
                <Avatar
                  src="https://picsum.photos/200/300?grayscale&random=1"
                  alt="user-avatar"
                />
              }
            />
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

function PostsArea() {
  const { user } = React.useContext(UserCxt);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getUserFeed(user.token)
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => console.log(err));
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
    posts &&
    posts.map((post, index) => {
      const likes = JSON.stringify(post.likes);
      const comments = JSON.stringify(post.comments);
      if (post.photo !== undefined) {
        const src = `data:image/png;base64,${_arrayBufferToBase64(
          post.photo.data.data
        )}`;
        return (
          <Post
            likes={likes}
            postid={post._id}
            content={post.title}
            comments={comments}
            username={post.userid}
            image={src}
            time={post.time}
          />
        );
      }
      return (
        <Post
          likes={likes}
          postid={post._id}
          content={post.title}
          comments={comments}
          username={post.userid}
          time={post.time}
        />
      );
    })
  );
}

function UserList() {
  const { user } = React.useContext(UserCxt);
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    getUserList(user.token).then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <List>
      {users &&
        users.map((user, index) => {
          return (
            <UserCard name={user.name} username={user.username} key={index} />
          );
        })}
    </List>
  );
}
