/* eslint-disable no-unused-expressions */
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ authState, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        authState.data !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
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
  };
};
export default connect(mapStateToProps)(ProtectedRoute);
