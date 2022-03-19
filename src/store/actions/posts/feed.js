import { getFeed as ACTIONS } from "../index";
import { user } from "../../../apis/user";

export const clearFeed = () => {
  return {
    type: ACTIONS.CLEAR_FEED,
  };
};

export const getFeed = (payload) => {
  return (dispatch) => {
    dispatch(getFeedStart());
    user
      .feed(payload)
      .then((response) => {
        dispatch(getFeedSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getFeedFaild(err));
      });
  };
};

const getFeedStart = () => {
  return {
    type: ACTIONS.GET_FEED_START,
  };
};
const getFeedSuccess = (data) => {
  return {
    type: ACTIONS.GET_FEED_SUCCESS,
    data: data,
  };
};
const getFeedFaild = (err) => {
  return {
    type: ACTIONS.GET_FEED_FAILD,
    data: err,
  };
};
