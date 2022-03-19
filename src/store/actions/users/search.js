import { serachUser as ACTIONS } from "../index";
import { user } from "../../../apis/user";

export const clearSearchUser = () => {
  return {
    type: ACTIONS.CLEAR_SEARCH_USER,
  };
};

export const searchUser = (payload) => {
  return (dispatch) => {
    dispatch(searchUserStart());
    user
      .searchUser(payload)
      .then((response) => {
        dispatch(searchUserSuccess(response.data));
      })
      .catch((err) => {
        dispatch(searchUserFaild(err));
      });
  };
};

const searchUserStart = () => {
  return {
    type: ACTIONS.SEARCH_USER_START,
  };
};
const searchUserSuccess = (data) => {
  return {
    type: ACTIONS.SEARCH_USER_SUCCESS,
    data: data,
  };
};
const searchUserFaild = (err) => {
  return {
    type: ACTIONS.SEARCH_USER_FAILD,
    data: err,
  };
};
