/* eslint-disable no-unused-expressions */
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import $NotFound from "../pages/Error";

const ProtectedRoute = ({ authState, component, children, ...rest }) => {
  console.log({ authState });
  // if (authState.data === null) {
  //   return (
  //    <$NotFound />
  //   );
  // } else {
  //   return <Route {...rest} component={component} children={children} />;
  // }
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authState.data !== null ? (
          component || children
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
  };
};
export default connect(mapStateToProps)(ProtectedRoute);
