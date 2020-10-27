import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./Auth/Register";
import Home from "./Core/Home";
import Login from "./Auth/Login";
import Feed from "./Core/Feed";
import CreatePost from "./Components/Post/CreatePost";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* TODO: add components */}
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          {/* TODO: add components\ */}
          <Login />
        </Route>
        <Route path="/feed" exact>
          <Feed />
        </Route>
        <Route path="/profile" exact>
          //TODO: add components
        </Route>
        <Route path="/posts" exact>
          //TODO: add components
        </Route>
        <Route path="/create/post" exact>
          <CreatePost />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
