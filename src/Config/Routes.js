import { Route, Redirect } from "react-router-dom";
import React, { useContext } from "react";

import { UserCxt, AuthCxt } from "./UserContext";

function PrivateRoute({ children, ...rest }) {
  let { isAuthenticated } = useContext(AuthCxt);
  let { user } = useContext(UserCxt);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated && user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
