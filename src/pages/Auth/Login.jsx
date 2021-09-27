import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import useStyles from "./style/login.css";
import { Link } from "react-router-dom";

const GithubIcon = <i className='ri-github-fill ri-2x'></i>;
const GitlabIcon = <i class='ri-gitlab-line ri-2x'></i>;

function Login() {
  const styles = useStyles();
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
            <Button
              className={styles.button}
              variant='outlined'
              color='default'
              // fullWidth
              startIcon={GithubIcon}
            >
              Signin with Github
            </Button>
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

export default Login;
