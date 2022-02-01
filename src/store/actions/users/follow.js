import { follow as ACTIONS } from "../index";
import { user } from "../../../apis/user";

export const clearFollow = () => {
  return {
    type: ACTIONS.CLEAR_FOLLOW,
  };
};

export const getFollow = (payload) => {
  return (dispatch) => {
    dispatch(getFollowStart());
    user
      .followUser(payload)
      .then((response) => {
        dispatch(getFollowSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getFollowFaild(err));
      });
  };
};

const getFollowStart = () => {
  return {
    type: ACTIONS.GET_FOLLOW_START,
  };
};
const getFollowSuccess = (data) => {
  return {
    type: ACTIONS.GET_FOLLOW_SUCCESS,
    data: data,
  };
};
const getFollowFaild = (err) => {
  return {
    type: ACTIONS.GET_FOLLOW_FAILD,
    data: err,
  };
};
