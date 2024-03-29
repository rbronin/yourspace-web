import { login, signup } from "../index"; //actions
import { auth } from "../../../apis"; //auth api
import { storeToken } from "../../../Config";
import { Authentication } from ".";

export const clearLogin = () => {
  return {
    type: login.CLEAR_LOGIN,
  };
};
export const clearSignup = () => {
  return {
    type: signup.CLEAR_SIGNUP,
  };
};

export const emailLogin = (payload) => {
  return (dispatch) => {
    dispatch(loginStart());
    auth
      .login(payload)
      .then((response) => {
        dispatch(loginSuccess(response.data));
        storeToken(response.data.data.auth_token);
        dispatch(Authentication({ token: response.data.data.auth_token }));
      })
      .catch((err) => {
        dispatch(loginFailed(err));
      });
  };
};
const loginStart = () => {
  return {
    type: login.LOGIN_START,
  };
};
const loginSuccess = (data) => {
  return {
    type: login.LOGIN_SUCEESS,
    data: data,
  };
};
const loginFailed = (err) => {
  return {
    type: login.LOGIN_FAILD,
    data: err,
  };
};

//signup
export const emailSignup = (payload) => {
  return (dispatch) => {
    dispatch(signupStart());
    auth
      .signup(payload)
      .then((response) => {
        dispatch(signupSuccess(response.data));
      })
      .catch((err) => {
        dispatch(signupFailed(err));
      });
  };
};
const signupStart = () => {
  return {
    type: signup.SIGNUP_START,
  };
};
const signupSuccess = (data) => {
  return {
    type: signup.SIGNUP_SUCEESS,
    data: data,
  };
};
const signupFailed = (err) => {
  return {
    type: signup.CLEAR_SIGNUP,
    data: err,
  };
};
