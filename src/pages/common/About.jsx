import { Grid } from "@material-ui/core";
import React from "react";
import SocialFriends from "../../assets/social_friends.svg";
import { useStyles } from "./styles/about.css";
import { Footer } from "../../Components/utils";
import { useHistory } from "react-router";

function About(props) {
  const classes = useStyles();
  const history = useHistory();
  const homeRoute = () => {
    history.push("/");
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.row}>
          <h2 onClick={homeRoute} className={classes.title}>
            Yourspace
          </h2>
        </div>
        <h3 className={classes.about}>About</h3>
        <Grid container direction='row'>
          <Grid item xs={6} sm={6} lg={6}>
            <div className={classes.imgWrapper}>
              <img className={classes.img} src={SocialFriends} alt='social_friends' />
            </div>
          </Grid>
          <Grid item xs={6} sm={6} lg={6}>
            <div className={classes.content}>
              <div>
                <h3>Yourspace - A minimal social media application</h3>
                <p>
                  This project is build as hobby for learning modern web technology . The
                  project build in MERN stack during devlopment of the project got engaged
                  with various technology and it was a fun jourany.
                </p>
                <div className={classes.techWrapper}>
                  <div>
                    <h3 className={classes.techTitle}>Frontend</h3>
                    <div className={classes.techSection}>
                      <li className={classes.techItem}>React.JS</li>
                      <li className={classes.techItem}>MaterialUI</li>
                      <li className={classes.techItem}>Redux.js</li>
                    </div>
                  </div>
                  <div>
                    <h3 className={classes.techTitle}>Backend</h3>
                    <div className={classes.techSection}>
                      <li className={classes.techItem}>Node.js</li>
                      <li className={classes.techItem}>Express.js</li>
                      <li className={classes.techItem}>MongoDB</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default About;
