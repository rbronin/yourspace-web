import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { useAuthentication } from "./route-hooks";

const PrivateRoute = ({ authState, loginData, children, ...rest }) => {
  const isAuthenticated = useAuthentication();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    authState: state.AuthReducer,
    loginData: state.LoginReducer,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
