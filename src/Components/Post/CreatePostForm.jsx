import React, { useEffect, useState } from "react";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { clearCreatePost, createNewPost } from "../../store/actions/posts/create-post";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { Alert } from "@material-ui/lab";

const CreatePostForm = ({
  user = {},
  closeModal,
  createPost,
  clearCreatePost,
  createPostData,
}) => {
  const [post, setPost] = useState({
    content: "",
    picture: new FormData(),
  });
  const classes = useStyles(post);

  useEffect(() => {
    clearCreatePost();
  }, []); //eslint-disable-line
  useEffect(() => {
    if (createPostData?.data?.message) {
      setTimeout(() => {
        clearCreatePost();
        closeModal();
      }, 1000);
    }
  }, [createPostData]); //eslint-disable-line

  const handleInput = (e) => {
    let value = e.target.value;
    setPost({
      ...post,
      content: value,
    });
  };
  const handleFile = (e) => {
    let file = e.target.files[0];
    let { picture } = post;
    picture.set("picture", file);
    setPost({
      ...post,
      picture,
    });
  };

  const removeFile = () => {
    setPost({
      ...post,
      picture: new FormData(),
    });
  };

  const handlePostData = (e) => {
    e.preventDefault();
    clearCreatePost();
    createPost({ data: post });
  };

  return (
    <div className={classes.root}>
      {createPostData.isDone && createPostData.isError && (
        <Alert severity='error' variant='standard'>
          {createPostData?.error?.response?.data.error}
        </Alert>
      )}
      {createPostData.isDone && createPostData.data && (
        <Alert severity='success' variant='standard'>
          {createPostData?.data?.message}
        </Alert>
      )}
      <div className={classes.row}>
        <h2 className={classes.heading}>Create New post</h2>
        <IconButton onClick={closeModal} color='default'>
          <i className='ri-close-fill ri-1x'></i>
        </IconButton>
      </div>
      <div className={classes.divider}></div>
      <div className={classes.rowStart}>
        <Avatar className={classes.avatar} variant='circle'>
          {"A"}
        </Avatar>

        <h3 className={classes.title}>{user?.name ?? "Ravi Bharti"}</h3>
      </div>
      {/* *** * */}
      <form className={classes.form} onSubmit={handlePostData}>
        <textarea
          className={classes.textarea}
          placeholder='Write something awesome!'
          rows={4}
          onChange={handleInput}
        />
        <div className={classes.divider}></div>
        {/* <div
        ref={inputRef}
        className={classes.input}
        contentEditable={true}
        placeholder='What do you want to write?'
        role='textbox'
      ></div> */}
        <div
          className={classes.rowStart}
          style={{ display: post.picture.get("picture") == null ? "none" : "flex" }}
        >
          <p>{post.picture?.get("picture")?.name}</p>
          <IconButton
            onClick={removeFile}
            style={{ display: post.picture.get("picture") == null ? "none" : "block" }}
          >
            <i className='ri-close-fill ri-1x'></i>
          </IconButton>
        </div>
        <div className={classes.row}>
          <div>
            <input
              accept='image/*'
              className={classes.inputFile}
              id='file-select'
              type='file'
              onChange={handleFile}
              onInput={handleFile}
            />
            <label htmlFor='file-select'>
              <IconButton color='primary' aria-label='upload picture' component='span'>
                <i className='ri-image-fill'></i>
              </IconButton>
            </label>
          </div>
          <Button
            disabled={post.content.length > 5 ? false : true}
            variant='contained'
            color='primary'
            type='submit'
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    createPost: (payload) => {
      dispatch(createNewPost(payload));
    },
    createNewPost: () => {
      dispatch(clearCreatePost());
    },
    clearCreatePost: () => {
      dispatch(clearCreatePost());
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    createPostData: state.CreatePostReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(CreatePostForm));

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.grey[300]}`,
    boxSizing: "border-box",
  },
  inputFile: {
    display: "none",
  },
  avatar: {
    margin: theme.spacing(0, 1, 0, 0),
    backgroundColor: "#fefefe",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    border: `1px solid ${theme.palette.grey[300]}`,
  },
  input: ({ isEmpty, editing }) => ({
    borderRadius: 10,
    minHeight: 100,
    padding: theme.spacing(1, 2),
    fontSize: 17,
    color: theme.palette.grey[800],
    fontWeight: 500,
    outline: "none",
    "&::before": {
      content: isEmpty ? `"Write something interesting!" !important` : "",
      position: "absolute",
      color: theme.palette.grey[500],
      zIndex: 100,
      left: 25,
    },
  }),
  form: {
    margin: theme.spacing(1),
  },
  textarea: {
    outline: "none",
    boxSizing: "border-box",
    width: "100%",
    border: "none",
    fontSize: 17,
    color: theme.palette.grey[800],
    fontWeight: 500,
    padding: theme.spacing(1),
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowStart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  divider: {
    height: 0,
    width: "100%",
    border: "none",
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    margin: theme.spacing(1, 0),
  },
  heading: {
    margin: 0,
    color: theme.palette.grey[700],
    fontWeight: 500,
  },
  title: {
    margin: 0,
    color: theme.palette.grey[700],
    fontWeight: 600,
  },
  imgArea: {},
}));
