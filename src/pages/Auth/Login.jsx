import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, FormControl, TextField, Link, Typography } from "@material-ui/core";
// import { Alert } from "@material-ui/lab";
import useStyles from "./style/login.css";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { emailLogin, clearLogin } from "../../store/actions/auth/auth";

function Login({ emailLogin, clearLogin, loginData }) {
  const styles = useStyles();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const getValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className={styles.root}>
      <Grid
        className={styles.grid}
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <div className={styles.form}>
          <h2>Login to codespace</h2>
          {/* <Alert severity='error'>This is error message</Alert> */}
          <form onSubmit={handleLogin}>
            <FormControl margin='dense' fullWidth>
              <TextField
                type='email'
                name='email'
                variant='outlined'
                size='small'
                placeholder='Email'
                fullWidth
                required={true}
                onChange={getValue}
              />
            </FormControl>
            <FormControl margin='dense' fullWidth>
              <TextField
                type='password'
                name='password'
                variant='outlined'
                size='small'
                placeholder='Password'
                fullWidth
                required={true}
                onChange={getValue}
              />
            </FormControl>
            <FormControl margin='dense' fullWidth>
              <Button type='submit' variant='contained' color='primary'>
                Signin
              </Button>
            </FormControl>
            <FormControl margin='dense' fullWidth>
              <Typography align='center' variant='body1'>
                Doesn't have an account?
              </Typography>
            </FormControl>
            <FormControl margin='dense' fullWidth>
              <Link href='/signup' style={{ textAlign: "center" }}>
                Signup
              </Link>
            </FormControl>
          </form>
        </div>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    loginData: state.LoginReducer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    login: (payload) => {
      dispatch(emailLogin(payload));
    },
    clearLogin: () => {
      dispatch(clearLogin());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Login));
