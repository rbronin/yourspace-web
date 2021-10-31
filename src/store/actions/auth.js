import { login, signup } from "./index"; //actions
import { auth } from "../../apis"; //auth api

export const clearLogin = () => {
  return {
    type: login.CLEAR_LOGIN,
  };
};

export const loginToGithub = (payload) => {
  return (dispatch) => {
    dispatch(loginToGithubStart());
    auth
      .login()
      .then((response) => {
        console.log({ response });
        loginToGithubSuccess(response.data);
      })
      .catch((err) => {
        loginToGithubFailed(err);
      });
  };
};
const loginToGithubStart = () => {
  return {
    type: login.LOGIN_START,
  };
};
const loginToGithubSuccess = (data) => {
  return {
    type: login.LOGIN_SUCEESS,
    data: data,
  };
};
const loginToGithubFailed = (err) => {
  return {
    type: login.LOGIN_FAILD,
    data: err,
  };
};

//signup
export const signupToGithub = (payload) => {
  return (dispatch) => {
    dispatch(signupToGithubStart());
    auth
      .signup(payload)
      .then((response) => {
        signupToGithubSuccess(response.data);
      })
      .catch((err) => {
        signupToGithubFailed(err);
      });
  };
};
const signupToGithubStart = () => {
  return {
    type: signup.SIGNUP_START,
  };
};
const signupToGithubSuccess = (data) => {
  return {
    type: signup.SIGNUP_SUCEESS,
    data: data,
  };
};
const signupToGithubFailed = (err) => {
  return {
    type: signup.CLEAR_SIGNUP,
    data: err,
  };
};
