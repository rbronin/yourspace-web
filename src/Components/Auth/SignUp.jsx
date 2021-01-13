import React, { useState } from "react";
import { Grid, Typography, TextField, InputAdornment } from "@material-ui/core";
import { FormControl, Box, Button } from "@material-ui/core";
import { RouteLink } from "../../Config/HelperComponents";
import { SignUpUser } from "../../Config/server";
import Messages from "../Messages";
import { useHistory } from "react-router-dom";

function SignUp() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const user = {
    name,
    username,
    email,
    password,
  };

  function handleSignUp(e) {
    e.preventDefault();
    SignUpUser(user)
      .then((res) => {
        setMessage(res.message);
        setEmail("");
        setName("");
        setUsername("");
        setPassword("");
        setTimeout(() => {
          history.push("/login");
        }, 4000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Box>
      <Box marginTop={2} marginLeft={2}>
        <RouteLink
          to="/"
          children={<i className="ri-arrow-left-line ri-2x"></i>}
        />
      </Box>

      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} lg={8}>
          <Box marginTop={1}>
            <Typography
              variant="h4"
              color="secondary"
              style={{ fontWeight: "bold" }}
              align="center"
            >
              Welcome to mysatck!
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Box marginTop={1}>
            <img
              height="150"
              src="./assets/welcomecat.svg"
              alt="welcome-banner"
            />
          </Box>
        </Grid>
        <Grid item xs={8} lg={4}>
          <Box marginTop={2}>
            <form onSubmit={handleSignUp}>
              <FormControl margin="dense" fullWidth={true}>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full-Name"
                  type="text"
                  required={true}
                  size="small"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i className="ri-user-line"></i>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth={true}>
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  type="text"
                  required={true}
                  size="small"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i className="ri-user-star-line"></i>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth={true}>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  required={true}
                  size="small"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i className="ri-at-line"></i>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth={true}>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  type="password"
                  required={true}
                  size="small"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i className="ri-key-2-line"></i>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl margin="dense" fullWidth={true}>
                <Button type="submit" variant="outlined" color="secondary">
                  SignUp
                </Button>
              </FormControl>
            </form>
            {message && <Messages success={message} />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignUp;
