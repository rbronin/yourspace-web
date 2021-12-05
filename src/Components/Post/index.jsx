import { Avatar, Box } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./style/index.css";

const Post = ({ post = {} }) => {
  const styles = useStyles();
  const [comments, setComments] = useState({
    show: false,
    lists: [],
  });
  const addLikes = () => {};
  const showComments = () => {
    setComments({
      ...comments,
      show: !comments.show,
    });
  };
  const addToCollection = () => {};

  let avatar = post.author?.slice(0, 1)?.toUpperCase() || "N";

  return (
    <div className={styles.root}>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Avatar sizes='lg' className={styles.avatar}>
          {avatar}
        </Avatar>
        <div>
          <h3 className={styles.title}>{post?.author}</h3>
          <p className={styles.dateText}>{post?.createdAt}</p>
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
        <p className={styles.content}>{post?.content}</p>
      </Box>
      <Box
        className={styles.actions}
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <div onClick={addLikes} className={styles.iconButton}>
          <i className='ri-heart-3-line ri-22px'></i>
          <p className={styles.buttonText}>Like</p>
        </div>
        <div className={styles.iconButton} onClick={showComments}>
          <i className='ri-chat-smile-2-line ri-22px'></i>
          <p className={styles.buttonText}>Comment</p>
        </div>
        <div className={styles.iconButton} onClick={addToCollection}>
          <i className='ri-bookmark-line ri-22px'></i>
          <p className={styles.buttonText}>Save</p>
        </div>
      </Box>
      {comments.show && (
        <div className={styles.commentBox}>
          <>
            <Comment />
            <Comment />
            <Comment />
          </>
        </div>
      )}
    </div>
  );
};

export default Post;

const Comment = ({ avatar, name, comment }) => {
  const styles = useStyles();
  return (
    <div className={styles.comment}>
      <div className={styles.commentAvatar}>{avatar || "A"}</div>
      <div className={styles.commentArea}>
        <p className={styles.user}>{name || "Ravi"}</p>
        <p className={styles.userComment}>
          {comment || "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
        </p>
      </div>
    </div>
  );
};
