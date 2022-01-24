import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Authentication } from "../store/actions/auth";
import PrivateRoute from "./PrivateRoute";
import { useToken } from "../Config";
import About from "../pages/common/About";
import Home from "../pages/common/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/SignUp";
import Feeds from "../pages/feed";
import $NotFound from "../pages/Error";
import Profile from "../pages/profile";
import Search from "../pages/search";

const Routes = ({ authState }) => {
  const dispatch = useDispatch();
  const token = useToken();
  useEffect(() => {
    if (token && !authState.data) {
      dispatch(Authentication({ token }));
    } else {
      //do something
    }
  }, []); //eslint-disable-line
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/signin' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <PrivateRoute exact path='/feed'>
          <Feeds />
        </PrivateRoute>
        <PrivateRoute exact path='/profile'>
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path='/search'>
          <Search />
        </PrivateRoute>
        <Route path='/*' component={$NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    authState: state.AuthReducer,
  };
};
export default connect(mapStateToProps)(Routes);
