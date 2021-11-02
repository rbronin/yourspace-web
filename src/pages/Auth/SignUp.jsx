import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, FormControl, TextField, Typography, Link } from "@material-ui/core";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import useStyles from "./style/login.css";

function Signup() {
  const styles = useStyles();

  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const getValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(e.target[1]);
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
          <h2>Signup to codespace</h2>
          <form onSubmit={handleSignup}>
            <FormControl margin='dense' fullWidth>
              <TextField
                type='text'
                name='name'
                variant='outlined'
                size='small'
                placeholder='Name'
                fullWidth
                required={true}
                onChange={getValue}
              />
            </FormControl>
            <FormControl margin='dense' fullWidth>
              <TextField
                type='text'
                name='username'
                variant='outlined'
                size='small'
                placeholder='Username'
                fullWidth
                required={true}
                onChange={getValue}
              />
            </FormControl>
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
                Signup
              </Button>
            </FormControl>
            <FormControl margin='dense' fullWidth>
              <Typography align='center' variant='body1'>
                Already have an account?
              </Typography>
            </FormControl>
            <FormControl margin='dense' fullWidth>
              <Link href='/signin' style={{ textAlign: "center" }}>
                Signin
              </Link>
            </FormControl>
          </form>
        </div>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const mapStateToProps = (state, ownProps) => {
  return {
    signupData: state.signup,
  };
};
export default connect(mapDispatchToProps, mapStateToProps)(withCookies(Signup));
