import React from "react";
import { Box, Typography, Avatar } from "@material-ui/core";

const userList = [
  {
    _id: "5f8337dc52d93415ccd6ceca",
    date: "2020-10-11T16:46:58.719Z",
    name: "ravi",
    username: "ravics",
    email: "ravi@1mail.com",
    __v: 0,
  },
  {
    _id: "5f85db9ce7cacb26b4e3652a",
    date: "2020-10-13T16:52:01.330Z",
    name: "vipin",
    username: "vpncs",
    email: "vp@mail.com",
    __v: 0,
  },
  {
    _id: "5f86941920162312b04b4110",
    date: "2020-10-14T06:00:27.139Z",
    name: "vishnu",
    username: "vsg",
    email: "vsg@mail.com",
    __v: 0,
  },
  {
    _id: "5fa2fbf8b1f4c505f4aca1b7",
    date: "2020-11-04T08:41:37.863Z",
    name: "Test1",
    email: "test@g.com",
    username: "test",
    __v: 0,
  },
];

const Search = () => {
  return (
    <div style={{ padding: "20px" }}>
      {userList.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default Search;

const UserCard = ({ user = {} }) => {
  return (
    <Box
      padding='10px'
      margin='10px auto'
      border='1px solid gray'
      borderRadius={10}
      display='flex'
    >
      <Avatar sizes=''>A</Avatar>
      <div style={{ marginLeft: "10px" }}>
        <Typography color='textPrimary' variant='body1'>
          {user?.name}
        </Typography>
        <Typography u color='textSecondary' variant='body2'>
          @ {user?.username}
        </Typography>
      </div>
    </Box>
  );
};
