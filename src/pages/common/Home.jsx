import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import exploreImg from "../../assets/explore.svg";
import { useStyles } from "./styles/index.css";
import { useHistory } from "react-router-dom";
import { Footer } from "../../Components/utils";

function HeadSection() {
  const styles = useStyles();
  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };
  const goToAbout = () => {
    history.push("/about");
  };
  const goToSignup = () => {
    history.push("/signup");
  };
  return (
    <Grid container>
      <Grid container direction='row' justify='flex-start' alignItems='flex-start' xs={6}>
        <Grid item>
          <i className='ri-space-ship-line ri-3x'></i>
        </Grid>
        <Grid item>
          <h2 className={styles.logo}>Yourspace</h2>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        justify='flex-end'
        alignItems='center'
        spacing={3}
        xs={6}
      >
        <Grid item>
          <Button onClick={goToAbout} variant='text' color='primary'>
            About
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={goToLogin} variant='text' color='primary'>
            Login
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={goToSignup} variant='outlined' color='primary'>
            Signup
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

function MainSection() {
  const styles = useStyles();
  const history = useHistory();

  const gotoSignup = () => {
    history.push("/signup");
  };
  return (
    <Grid
      className={styles.root}
      container
      direction='row'
      justify='flex-start'
      alignItems='center'
    >
      <Grid item xs={12} sm={6} lg={6} xl={6}>
        <h2 className={styles.mainHeading}>
          Share your life's stacks and enjoy together.
        </h2>
        <Typography variant='body1' component='p'>
          Enjoy the awesome moments with friends!
        </Typography>

        <Button
          onClick={() => gotoSignup()}
          className={styles.startedBtn}
          variant='contained'
          color='primary'
        >
          Get Started
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} lg={6} xl={6}>
        <div className={styles.imgContainer}>
          <img loading='lazy' height={300} src={exploreImg} alt='banner' />
        </div>
      </Grid>
    </Grid>
  );
}

const Home = () => {
  return (
    <Box marginTop={2} marginX={15}>
      <HeadSection />
      <MainSection />
      <Footer />
    </Box>
  );
};

export default Home;
