import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatars from "boring-avatars";

export function Footer() {
  const date = new Date();
  return (
    <Grid container direction='row' justify='center' alignItems='flex-end'>
      <Grid item>
        <Typography variant='caption' component='p'>
          &copy; {date.getFullYear()} by Ravi Bhart
          <a
            href='https://github.com/ravics1721'
            target='_blank'
            rel='noopener noreferrer'
            style={{ textDecoration: "none", marginLeft: 5 }}
          >
            <i className='ri-link'></i>
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}

export const UserAvatar = ({ size = 40, name = "" }) => {
  let colors = ["#bbdefb", "#64b5f6", "#2196f3", "#1976d2", "#0d47a1"];
  return (
    <Avatars size={size} square={false} name={name} variant='beam' colors={colors} />
  );
};
