import { getFriends as ACTIONS } from "../index";
import { user } from "../../../apis/user";

export const clearFriends = () => {
  return {
    type: ACTIONS.CLEAR_GET_FRIENDS,
  };
};

export const getFriends = (payload) => {
  return (dispatch) => {
    dispatch(getFriendsStart());
    user
      .getUserFriends(payload)
      .then((response) => {
        dispatch(getFriendsSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getFriendsFaild(err));
      });
  };
};

const getFriendsStart = () => {
  return {
    type: ACTIONS.GET_FRIENDS_START,
  };
};
const getFriendsSuccess = (data) => {
  return {
    type: ACTIONS.GET_FRIENDS_SUCCESS,
    data: data,
  };
};
const getFriendsFaild = (err) => {
  return {
    type: ACTIONS.GET_FRIENDS_FAILD,
    data: err,
  };
};
