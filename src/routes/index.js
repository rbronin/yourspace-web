import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../pages/common/About";
import Home from "../pages/common/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/SignUp";
import Feeds from "../pages/feed";
import $NotFound from "../pages/Error";
import Profile from "../pages/profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/signin' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/feed' component={Feeds} />
        <Route exact path='/profile' component={Profile} />
        <Route path='/*' component={$NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
