import { authenticate as ACTIONS } from "../index";
import { auth } from "../../../apis/auth";

export const clearAuthentication = () => {
  return {
    type: ACTIONS.CLEAR_AUTHENTICATION,
  };
};

export const Authentication = (payload) => {
  return (dispatch) => {
    dispatch(authenticationStart());
    auth
      .verify(payload)
      .then((response) => {
        dispatch(authenticationSuccess(response.data));
      })
      .catch((err) => {
        dispatch(authenticationFaild(err));
      });
  };
};

const authenticationStart = () => {
  return {
    type: ACTIONS.AUTHENTICATION_START,
  };
};
const authenticationSuccess = (data) => {
  return {
    type: ACTIONS.AUTHENTICATION_SUCEESS,
    data: data,
  };
};
const authenticationFaild = (err) => {
  return {
    type: ACTIONS.AUTHENTICATION_FAILD,
    data: err,
  };
};
