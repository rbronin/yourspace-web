import React from "react";
import {
  Container,
  TextField,
  TextareaAutosize,
  Typography,
  FormControl,
  FormGroup,
  Grid,
  Button,
} from "@material-ui/core";

export default function CreatePost() {
  return (
    <Grid xl="12" lg="12" sm="12">
      <Container maxWidth="md">
        <Typography variant="h4">Create New Post!</Typography>
        <FormGroup>
          <FormControl margin="normal">
            <TextField type="file" placeholder="Add picture" />
          </FormControl>

          <FormControl>
            <TextareaAutosize
              rowsMin="5"
              rowsMax="10"
              placeholder="Post details"
            />
          </FormControl>
          <FormControl margin="normal">
            <Button size="small" variant="outlined" color="primary">
              CREATE POST
            </Button>
          </FormControl>
        </FormGroup>
      </Container>
    </Grid>
  );
}
