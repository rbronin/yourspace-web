import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FormControl, InputAdornment } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { RouteLink } from "../../Config/HelperComponents";
import { LoginUser } from "../../Config/server";
import { AuthCxt, UserCxt } from "../../Config/UserContext";
import Messages from "../Messages";
import { useHistory } from "react-router-dom";

function Login() {
  const { setUser } = React.useContext(UserCxt);
  const { setIsAuthenticated } = React.useContext(AuthCxt);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = React.useState("");

  const logUser = {
    email,
    password,
  };

  function handleLogin(e) {
    e.preventDefault();
    LoginUser(logUser)
      .then((res) => {
        if (res.user) {
          setUser(res);
          localStorage.setItem("auth-token", res.token);
          setIsAuthenticated(true);
          history.push("/feed");
        } else {
          setMessage("Invalid credential!");
          setEmail("");
          setPassword("");
          return -1;
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Box>
      <Box marginTop={2} marginLeft={2}>
        <RouteLink to="/" children={<i class="ri-arrow-left-line ri-2x"></i>} />
      </Box>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} lg={6}>
          <Box marginTop={2}></Box>
          <Typography
            style={{ fontWeight: "bold" }}
            variant="h4"
            color="secondary"
          >
            Login to mysatck
          </Typography>
        </Grid>
        <Grid item xs={8} lg={6}>
          <Box marginTop={5}></Box>
          <img height={200} src="./assets/mobilelogin.svg" alt="login-banner" />
        </Grid>
        <Grid item xs={8} lg={4}>
          <Box marginTop={2}></Box>
          <form onSubmit={handleLogin}>
            <FormControl margin="dense" size="small" fullWidth={true}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                variant="outlined"
                size="small"
                type="email"
                required={true}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="ri-mail-line"></i>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl margin="dense" size="small" fullWidth={true}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                variant="outlined"
                size="small"
                type="password"
                required={true}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i class="ri-key-2-line"></i>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl margin="dense" fullWidth={true}>
              <Button
                size="medium"
                type="submit"
                variant="outlined"
                color="secondary"
              >
                Login
              </Button>
            </FormControl>
          </form>
          {message && <Messages error={message} />}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
