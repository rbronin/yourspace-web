import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import useStyles from "./style/login.css";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { loginToGithub, clearLogin } from "../../store/actions/auth";

const GithubIcon = <i className='ri-github-fill ri-2x'></i>;
const GitlabIcon = <i className='ri-gitlab-line ri-2x'></i>;

const githubUri =
  "https://github.com/login/oauth/authorize?client_id=a3625c42cc89b833e708";

function Login({ githubLogin, clearLogin, githubLoginData }) {
  const styles = useStyles();

  // eslint-disable-next-line no-unused-vars
  const handleGithubLogin = () => {
    githubLogin();
  };

  console.log({ githubLoginData });

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
          <div className={styles.buttonDiv}>
            <a href='http://localhost:4000/api/auth/github'>
              <Button
                className={styles.button}
                variant='outlined'
                color='default'
                // fullWidth
                startIcon={GithubIcon}
                // onClick={() => handleGithubLogin()}
              >
                Signin With Github
              </Button>
            </a>
          </div>
          <p className={styles.divider}>Comming soon...</p>
          <div className={styles.buttonDiv}>
            <Button
              className={styles.button}
              variant='outlined'
              color='default'
              // fullWidth
              startIcon={GitlabIcon}
            >
              Signin with Gitlab
            </Button>
          </div>
          <Link to='/signup' className={styles.link}>
            Or Signup
          </Link>
        </div>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    githubLoginData: state.AuthReducer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    githubLogin: () => {
      dispatch(loginToGithub());
    },
    clearLogin: () => {
      dispatch(clearLogin());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Login));
