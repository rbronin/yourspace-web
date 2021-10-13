import { Avatar, Box, IconButton } from "@material-ui/core";
import React from "react";
import useStyles from "./style/index.css";

const Post = ({ post = {} }) => {
  const styles = useStyles();

  const addLikes = () => {};
  const showComments = () => {};
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
      >
        <IconButton onClick={addLikes}>
          <i className='ri-heart-3-line'></i>
        </IconButton>
        <IconButton onClick={showComments}>
          <i className='ri-chat-smile-2-line'></i>
        </IconButton>
        <IconButton onClick={addToCollection}>
          <i className='ri-bookmark-line'></i>
        </IconButton>
      </Box>
    </div>
  );
};

export default Post;
