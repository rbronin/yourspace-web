import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";
import { UserAvatar } from "../utils";

// <i className="ri-user-follow-line"></i>
// <i className="ri-user-unfollow-line"></i>
// <i className='ri-user-add-line'></i>;

function UserCard({ user, key }) {
  const classes = useStyles();
  const [followed, setFollowed] = useState(false);

  const handleFollow = () => {
    setFollowed((v) => !v);
  };
  return (
    <Box
      padding='5px'
      margin='5px'
      display='flex'
      justifyContent='flex-start'
      alignItems='center'
      className={classes.root}
    >
      <Avatar sizes=''>
        <UserAvatar name={user?.name} />
      </Avatar>
      <div style={{ marginLeft: "10px" }}>
        <h5 className={classes.name}>{user?.name}</h5>
        <p className={classes.uName}>@ {user?.username}</p>
      </div>
      <Box display={"flex"} width='max-parent' alignItems='center' marginLeft={"auto"}>
        {followed ? (
          <>
            <Tooltip title='following'>
              <div>
                <i
                  style={{ fontSize: "inherit" }}
                  className='ri-user-follow-fill ri-added ri-22px'
                ></i>
              </div>
            </Tooltip>
            <Tooltip title='unfollow'>
              <IconButton className={classes.unfollowBtn} onClick={handleFollow}>
                <i style={{ fontSize: "inherit" }} className='ri-user-unfollow-fill'></i>
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <Tooltip title='follow'>
            <IconButton className={classes.followBtn} onClick={handleFollow}>
              <i className='ri-user-follow-line ri-22px'></i>
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
}

export default UserCard;

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 5,
    cursor: "pointer",
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
    },
  },
  name: {
    fontSize: 17,
    fontWeight: 600,
    margin: 0,
    color: blueGrey[600],
    textTransform: "capitalize",
  },
  uName: {
    fontSize: 15,
    fontWeight: 500,
    margin: 0,
    color: blueGrey[400],
    textTransform: "lowercase",
  },
  followBtn: {
    color: theme.palette.grey[600],
  },
  followedBtn: {
    color: theme.palette.primary.main,
  },
  unfollowBtn: {
    color: theme.palette.grey[500],
  },
}));
