import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, FormControl, TextField, Typography, useTheme } from "@material-ui/core";
import { connect } from "react-redux";
import { emailSignup, clearSignup } from "../../store/actions/auth/auth";
import useStyles from "./style/login.css";
import { Alert } from "@material-ui/lab";
import { useHistory, Link } from "react-router-dom";
import { Loading } from "../../Components";
function Signup({ signupByEmail, signupData }) {
  const styles = useStyles();
  const theme = useTheme();
  const history = useHistory();
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
    signupByEmail({
      data: newUser,
    });
  };

  useEffect(() => {
    const { data, isDone, isError } = signupData;
    if (isDone && data !== null && isError === false) {
      setTimeout(() => {
        history.push("/signin", {
          email: data?.data?.email,
        });
      }, 2000);
    }
  }, [signupData]); //eslint-disable-line

  return (
    <div className={styles.root}>
      <Grid
        className={styles.grid}
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        {signupData?.isLoading && <Loading />}
        <div className={styles.form}>
          <h2>
            Signup to{" "}
            <Link
              to='/'
              style={{
                color: theme.palette.primary.main,
              }}
            >
              yourspace
            </Link>{" "}
          </h2>
          {signupData?.data && (
            <Alert severity='success' variant='filled'>
              {signupData?.data?.message}
            </Alert>
          )}
          {signupData?.isDone && !signupData?.isError && (
            <Alert severity='warning' variant='standard'>
              You will be redirected to login page
            </Alert>
          )}
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
              <Link to='/signin' style={{ textAlign: "center" }}>
                Signin
              </Link>
            </FormControl>
          </form>
        </div>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signupByEmail: (payload) => dispatch(emailSignup(payload)),
    clearSignup: () => dispatch(clearSignup()),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    signupData: state.SignupReducer,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
