import React from "react";
import {
  Grid,
  FormGroup,
  FormControl,
  Box,
  Typography,
  TextField,
  Button,
  InputLabel,
  InputAdornment,
  Container,
} from "@material-ui/core";
import {
  PersonOutlined,
  MailOutlineOutlined,
  SecurityOutlined,
  FaceOutlined,
} from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";

import FormSide from "../Components/Form/FormSide";
import FormMainTop from "../Components/Form/FormMainTop";

export default function Register() {
  //   Todo: build page
  return (
    <Grid
      xs="12"
      sm="12"
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {/* left section component*/}
      <FormSide logo="true" route="/login" />
      {/* right section */}
      <Grid container item xs="8" sm="8" alignItems="center" justify="center">
        <Container maxWidth="md">
          {/*top right section  social compnent */}
          <FormMainTop />
          {/*  registration from  */}

          <Container maxWidth="xs">
            <Grid
              xs="12"
              sm="12"
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <FormGroup>
                <FormControl size="small" margin="normal">
                  <TextField
                    variant="filled"
                    size="small"
                    id="name"
                    placeholder="Name"
                    type="text"
                    className="input-dec"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment className="input-dec" position="start">
                          <PersonOutlined color={grey[400]} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <TextField
                    variant="filled"
                    size="small"
                    id="username"
                    placeholder="Username"
                    type="text"
                    className="input-dec"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment className="input-dec" position="start">
                          <FaceOutlined color={grey[400]} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <TextField
                    variant="filled"
                    size="small"
                    id="email"
                    placeholder="Email"
                    type="email"
                    className="input-dec"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment className="input-dec" position="start">
                          <MailOutlineOutlined color={grey[400]} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <TextField
                    variant="filled"
                    size="small"
                    id="password"
                    placeholder="Password"
                    type="password"
                    className="input-dec"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment className="input-dec" position="start">
                          <SecurityOutlined color={grey[400]} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <button className="btn-primary">SIGN UP</button>
              </FormGroup>
            </Grid>
          </Container>
        </Container>
      </Grid>
    </Grid>
  );
}
