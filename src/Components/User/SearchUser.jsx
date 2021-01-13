import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import {} from "../../Config/server";
import {} from "../../Config/UserContext";

function SearchUser() {
  const [u_name, setU_name] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setU_name(e.target.value);
  }

  function searchUser(e) {
    e.preventDefault();
    console.log(u_name);
  }

  return (
    <Grid>
      <SearchField onchange={handleChange} submit={searchUser} />
    </Grid>
  );
}

export default SearchUser;

function SearchField(props) {
  return (
    <form onSubmit={props.submit}>
      <Grid container direction="row" justify="center" alignItems="center">
        <TextField
          variant="standard"
          required={true}
          type="text"
          onChange={props.onchange}
          placeholder="Search by name..."
        />
        <IconButton type="submit">
          <i class="ri-search-eye-line"></i>
        </IconButton>
      </Grid>
    </form>
  );
}
