import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Home from "./Core/Home";
import Feed from "./Core/Feed";
import CreatePost from "./Components/Post/CreatePost";
import Profile from "./Components/Users/Profile";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/feed" exact>
          <Feed />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/posts" exact></Route>
        <Route path="/create/post" exact>
          <CreatePost />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
