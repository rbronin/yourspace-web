import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Messages from "../Messages";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UserCxt } from "../../Config/UserContext";
import { createPost } from "../../Config/server";

function CreatePost() {
  const classes = useStyles();
  const [message, setMessage] = React.useState("");
  const { user } = React.useContext(UserCxt);
  const [post, setPosts] = React.useState({
    formData: new FormData(),
    loading: false,
  });
  const { formData } = post;
  const handleInput = (name) => (e) => {
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setPosts({ ...post, [name]: value });
  };
  function makePost(e) {
    e.preventDefault();
    createPost(formData, user.token)
      .then((res) => {
        setMessage(res.message);
        setPosts({
          formData: null,
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <Grid item alignContent="center" xs={12} lg={12}>
      <Box marginY={1}>
        <Card variant="outlined">
          <form onSubmit={makePost}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <TextField
                type="text"
                required={true}
                variant="standard"
                color="secondary"
                multiline={true}
                rowsMax={5}
                placeholder="Write a post."
                onChange={handleInput("title")}
              />
              <Box>
                <input
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                  onChange={handleInput("photo")}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <i class="ri-image-add-fill"></i>
                  </IconButton>
                </label>
              </Box>
              <Button
                type="submit"
                variant="contained"
                size="small"
                color="primary"
              >
                Create
              </Button>
            </Grid>
          </form>
        </Card>
      </Box>
      {message && <Messages success={message} />}
    </Grid>
  );
}

export default CreatePost;

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));
