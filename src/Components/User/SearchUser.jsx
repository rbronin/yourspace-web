import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IconButton, Card, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { searchUserByName } from "../../Config/server";
import { UserCxt } from "../../Config/UserContext";
import { RouteLink } from "../../Config/HelperComponents";
import UserCard from "./UserCard";
import Messages from "../Messages";

function SearchUser() {
  const [u_name, setU_name] = useState("");
  const [users, setUsers] = useState([]);
  const { user } = useContext(UserCxt);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setU_name(e.target.value);
  }

  function searchUser(e) {
    e.preventDefault();
    searchUserByName(u_name, user.token)
      .then((res) => {
        if (res.message) {
          console.log(true);
          setMessage(res.message);
        } else {
          setUsers(res);
          setMessage("");
        }
        // console.log(false);
        // if (users.length === 0) {
        // } //Todo: remove me;
      })
      .catch((e) => console.log(e));
  }

  return (
    <Grid item xs={12} lg={12}>
      <SearchField onchange={handleChange} submit={searchUser} />
      <Grid container direction="column" justify="center" alignItems="center">
        {users &&
          users.length > 0 &&
          users.map((user, index) => {
            return (
              <UserCard key={index} name={user.name} username={user.username} />
            );
          })}
        {message && <Messages info={message} />}
      </Grid>
    </Grid>
  );
}

export default SearchUser;

//search fields
function SearchField(props) {
  const classes = createStyle();
  return (
    <Container maxWidth="md">
      <Card style={{ backgroundColor: "#253240" }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Box paddingTop={2}>
            <RouteLink
              to="/feed"
              children={
                <i
                  style={{ color: "grey" }}
                  class="ri-arrow-left-circle-fill ri-2x"
                ></i>
              }
            />
          </Box>
          <Box marginLeft={-5}>
            <Typography variant="h6" className={classes.title}>
              Search user by name..
            </Typography>
          </Box>
          <Box marginRight={2}>
            <RouteLink
              to="/user/profile"
              children={
                <i style={{ color: "grey" }} class="ri-user-2-fill ri-2x"></i>
              }
            />
          </Box>
        </Grid>

        <form onSubmit={props.submit}>
          <Grid container direction="row" justify="center" alignItems="center">
            <input
              type="text"
              className={classes.input}
              onChange={props.onchange}
              placeholder=" Search by name.."
              id="name"
              autoComplete="false"
            />
            <IconButton type="submit">
              <i style={{ color: "grey" }} class="ri-search-eye-line"></i>
            </IconButton>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}

const createStyle = makeStyles({
  icon: {
    color: "blue",
  },
  input: {
    color: "white",
    border: "none",
    width: "13rem",
    padding: "0.5rem",
    backgroundColor: "grey",
    borderRadius: "2px",
  },
  title: {
    color: "#fefefe",
  },
});
