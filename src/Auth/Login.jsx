import React from "react";
import {
  Grid,
  FormGroup,
  FormControl,
  Box,
  Typography,
  Input,
  Button,
  FormLabel,
  InputAdornment,
  Container,
  TextField,
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
import { Link } from "react-router-dom";
// Todo: add feature
export default function Login() {
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
      <Grid container item xs="8" sm="8" alignItems="center" justify="center">
        <Container maxWidth="md">
          {/*top-left section  social compnent */}
          <FormMainTop
            heading="Sign in to YourSpace"
            subHeading="or use your email account:"
          />
          {/*  login from  */}

          <Container maxWidth="xs">
            <Grid
              xs="12"
              sm="12"
              direction="column"
              justify="space-between"
              alignItems="center"
            >
              <FormGroup>
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
                          <SecurityOutlined />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl margin="normal">
                  <Typography align="center" variant="subtitle2">
                    Forgot Password?
                  </Typography>
                </FormControl>
                <Link className="center" to="/feed">
                  <button className="btn-primary">SIGN IN</button>
                </Link>
              </FormGroup>
            </Grid>
          </Container>
        </Container>
      </Grid>
      {/* right setion */}
      <FormSide
        route="/register"
        heading="Hello, Friend!"
        subHeading="Enter your persnal deatils and start journey with us"
        btn="SIGN UP"
      />
      {/* right section */}
    </Grid>
  );
}
