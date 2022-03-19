import { getRecommendation as ACTIONS } from "../index";
import { user } from "../../../apis/user";

export const clearRecommendation = () => {
  return {
    type: ACTIONS.CLEAR_RECOMMENDATION,
  };
};

export const getRecommendation = (payload) => {
  return (dispatch) => {
    dispatch(getRecommendationStart());
    user
      .getRecommendation(payload)
      .then((response) => {
        dispatch(getRecommendationSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getRecommendationFaild(err));
      });
  };
};

const getRecommendationStart = () => {
  return {
    type: ACTIONS.GET_RECOMMENDATION_START,
  };
};
const getRecommendationSuccess = (data) => {
  return {
    type: ACTIONS.GET_RECOMMENDATION_SUCCESS,
    data: data,
  };
};
const getRecommendationFaild = (err) => {
  return {
    type: ACTIONS.GET_RECOMMENDATION_FAILD,
    data: err,
  };
};
