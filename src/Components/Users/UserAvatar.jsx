import React from "react";
import { Grid, Card, Container, Typography, Avatar } from "@material-ui/core";

export default function UserAvatar(props) {
  return (
    <Card>
      <Avatar src={props.img || ""} alt="user avatar" />
      <Typography>{props.username || ""}</Typography>
    </Card>
  );
}
