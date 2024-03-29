import React, { useState } from "react";
import { Avatar, Box, Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useMemo } from "react";
import { formateDate } from "../../Config";
import useStyles from "./style/index.css";
import { useToken } from "../../Config";
import { post as postApi } from "../../apis/post";
import { user as userApi } from "../../apis";
import { UserAvatar } from "../utils";

const Post = ({ post = {}, loggedUser = {} }) => {
  const styles = useStyles();
  const token = useToken();
  console.log({ post });
  const [likedRes, setLikedRes] = useState([]);
  const [comments, setComments] = useState({
    show: false,
    data: post?.comments || [],
  });
  const [collection, setCollection] = useState({
    type: "success",
    msg: "",
    isOpen: false,
    result: false,
  });

  const handleSnackBarClose = () => {
    setCollection({
      ...collection,
      type: "",
      msg: "",
      isOpen: false,
    });
  };
  const isLiked = useMemo(() => {
    const isLiked = post.likes?.findIndex((id) => id === loggedUser._id);
    if (isLiked >= 0) {
      return true;
    } else {
      return false;
    }
  }, []); //eslint-disable-line

  const isLikedNow = useMemo(() => {
    const isLike = likedRes.findIndex((id) => id === loggedUser._id);
    if (isLike >= 0) {
      return true;
    } else {
      return false;
    }
  }, [likedRes]); //eslint-disable-line
  const addLikes = () => {
    postApi
      .addLike({
        postid: post._id,
        token: token,
      })
      .then((res) => {
        setLikedRes([...res.data.data.likes]);
      })
      .catch((err) => {
        // console.log({ err });
      });
  };
  const showComments = () => {
    setComments({
      ...comments,
      show: !comments.show,
    });
  };
  const addToCollection = () => {
    userApi
      .addToCollections({ itemid: post._id, token: token })
      .then((res) => {
        setCollection({
          type: "success",
          msg: res.data.message || "Added to collections",
          isOpen: true,
          result: true,
        });
      })
      .catch((err) => {
        setCollection({
          type: "error",
          msg: err.response?.data?.message || "Unable to add in collection",
          isOpen: true,
          result: false,
        });
      });
  };

  const submitComment = (cmt) => {
    postApi
      .addComment({
        postid: post._id,
        data: cmt,
        token,
      })
      .then((res) => {
        console.log({ res });
        setComments({
          ...comments,
          data: res.data?.comments,
        });
      })
      .catch((err) => {
        setCollection({
          type: "error",
          msg: err.response?.data?.message || "Unable to add in comment",
          isOpen: true,
          result: false,
        });
      });
  };

  return (
    <div className={styles.root}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={collection.isOpen}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert variant='filled' severity={collection.type} onClose={handleSnackBarClose}>
          {collection.msg}
        </Alert>
      </Snackbar>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Avatar sizes='lg' className={styles.avatar}>
          <UserAvatar name={post?.userid?.username} />
        </Avatar>
        <div>
          <h3 className={styles.title}>{post?.userid?.name}</h3>
          <p className={styles.dateText}>{formateDate(post?.createdAt)}</p>
        </div>
      </Box>
      <Box className={styles.imgContainer}>
        {post?.img && (
          <img
            loading='lazy'
            className={styles.img}
            src='https://loremflickr.com/320/240?lock=1'
            alt='placeholder'
            async='true'
          />
        )}
      </Box>
      <Box>
        <p className={styles.content}>{post?.content || post?.title}</p>
      </Box>
      <Box
        className={styles.actions}
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <div onClick={addLikes} className={styles.iconButton}>
          {isLiked || isLikedNow ? (
            <i className='ri-heart-3-fill ri-22px ri-liked '></i>
          ) : (
            <i className='ri-heart-3-line ri-22px'></i>
          )}

          <p className={styles.buttonText}>Like</p>
        </div>
        <div className={styles.iconButton} onClick={showComments}>
          <i className='ri-chat-smile-2-line ri-22px'></i>
          <p className={styles.buttonText}>Comment</p>
        </div>
        <div className={styles.iconButton} onClick={addToCollection}>
          {collection.result ? (
            <i className='ri-bookmark-fill ri-22px ri-added'></i>
          ) : (
            <i className='ri-bookmark-line ri-22px'></i>
          )}
          <p className={styles.buttonText}>Save</p>
        </div>
      </Box>
      {comments.show && (
        <>
          <AddComment avatar={loggedUser?.username} onCommentPost={submitComment} />
          <div className={styles.commentBox}>
            {comments.data?.map((comment) => {
              return <Comment comment={comment} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;

const Comment = ({ comment }) => {
  const styles = useStyles();
  console.log({ comment });
  return (
    <div className={styles.comment}>
      <Avatar sizes='lg' className={styles.avatar}>
        <UserAvatar name={comment?._id} />
      </Avatar>
      <div className={styles.commentArea}>
        <p className={styles.user}>{comment?.id?.name || "NA"}</p>
        <p className={styles.userComment}>{comment?.body}</p>
      </div>
    </div>
  );
};

const AddComment = ({ avatar, onCommentPost }) => {
  const styles = useStyles();
  const [comment, setComment] = useState("");
  const handleValue = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentPost(comment);
    setComment("");
  };
  return (
    <Box display='flex' flexDirection='row' alignItems='center' paddingX={1}>
      <Avatar sizes='sm' className={styles.avatar}>
        <UserAvatar name={avatar} />
      </Avatar>
      <form className={styles.row} onSubmit={handleSubmit}>
        <textarea
          className={styles.input}
          required
          onChange={handleValue}
          value={comment}
        />
        <Button type='submit' size='small' color='primary' variant='contained'>
          Post
        </Button>
      </form>
    </Box>
  );
};
