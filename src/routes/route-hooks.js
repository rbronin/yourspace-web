import React from "react";
import { useSelector } from "react-redux";

const useAuthentication = () => {
  const authValue = useSelector((state) => state.AuthReducer);

  let isAuthenticated = React.useMemo(() => {
    if (authValue.isDone && !authValue.isError && authValue.data !== null) {
      return authValue.data.isValid;
    } else {
      return false;
    }
  }, [authValue]);

  return isAuthenticated;
};

export { useAuthentication };
