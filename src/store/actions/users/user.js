import { getUser as ACTIONS } from "../index";
import { user } from "../../../apis/user";

export const clearUser = () => {
  return {
    type: ACTIONS.CLEAR_USER,
  };
};

export const getUser = (payload) => {
  return (dispatch) => {
    dispatch(getUserStart());
    user
      .getUser(payload)
      .then((response) => {
        dispatch(getUserSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getUserFaild(err));
      });
  };
};

const getUserStart = () => {
  return {
    type: ACTIONS.GET_USER_START,
  };
};
const getUserSuccess = (data) => {
  return {
    type: ACTIONS.GET_USER_SUCCESS,
    data: data,
  };
};
const getUserFaild = (err) => {
  return {
    type: ACTIONS.GET_USER_FAILD,
    data: err,
  };
};
