import React from "react";
import TextField from "@material-ui/core/TextField";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function CreatePost() {
  const classes = useStyles();
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

  return (
    <>
      <div className={classes.root}>
        <div className={classes.row}>
          <Avatar className={classes.avatar} variant='circle'>
            {"A"}
          </Avatar>
          <TextField
            type='text'
            required={true}
            variant='outlined'
            color='primary'
            multiline={true}
            rowsMax={5}
            placeholder='Write a post...'
            onChange={handleInput("title")}
            size='small'
            fullWidth
            className={classes.input}
          />
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
    borderRadius: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  divider: {
    height: 0,
    width: "100%",
    border: "none",
    borderTop: `1px solid ${theme.palette.grey[400]}`,
    margin: theme.spacing(2, 0),
  },
}));
