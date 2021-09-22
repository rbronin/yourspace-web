import { Avatar, Box, IconButton } from "@material-ui/core";
import React from "react";
import useStyles from "./style/index.css";

const Post = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Avatar sizes='lg' className={styles.avatar}>
          {"A"}
        </Avatar>
        <div>
          <h3 className={styles.title}>Ravi Bharti</h3>
          <p className={styles.dateText}>11:000pm Monday 31</p>
        </div>
      </Box>
      <Box>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
          cupiditate?
        </p>
      </Box>
      <Box>
        <IconButton>
          <i className='ri-heart-3-line'></i>
        </IconButton>
        <IconButton>
          <i className='ri-chat-smile-2-line'></i>
        </IconButton>
        <IconButton>
          <i className='ri-bookmark-line'></i>
        </IconButton>
      </Box>
    </div>
  );
};

export default Post;
