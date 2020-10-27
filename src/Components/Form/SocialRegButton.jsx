import React from "react";
import { Grid } from "@material-ui/core";
import { GitHub, Facebook, LinkedIn } from "@material-ui/icons";

export default function SocialRegButton() {
  return (
    <Grid
      xs="12"
      sm="12"
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <button className="btn-rounded">
        <GitHub />
      </button>
      <button className="btn-rounded">
        <Facebook />
      </button>
      <button className="btn-rounded">
        <LinkedIn />
      </button>
    </Grid>
  );
}
