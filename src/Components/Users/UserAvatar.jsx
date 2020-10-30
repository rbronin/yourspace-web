import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function UserAvatar(props) {
  return (
    <Container maxWidth="lg">
      <Container maxWidth="lg">
        <img
          className="avatar-img"
          src={props.img || "https://picsum.photos/400/300"}
          height="250px"
          width="250px"
          alt="user img"
        />
        <Box>
          <Typography variant="h6" color="textPrimary">
            {props.name || "Ravi Bharti"}
          </Typography>
        </Box>
        <Box marginBottom="2rem">
          <Typography variant="body1" color="primary">
            {props.email || "ravics1718@gamil.com"}
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}
