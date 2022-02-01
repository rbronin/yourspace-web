import { getComment as ACTIONS } from "../index";
import { post } from "../../../apis/post";

export const clearGetComment = () => {
  return {
    type: ACTIONS.CLEAR_GET_COMMENT,
  };
};

export const getComment = (payload) => {
  return (dispatch) => {
    dispatch(getCommentStart());
    post
      .getComments(payload)
      .then((response) => {
        dispatch(getCommentSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getCommentFaild(err));
      });
  };
};

const getCommentStart = () => {
  return {
    type: ACTIONS.GET_COMMENT_START,
  };
};
const getCommentSuccess = (data) => {
  return {
    type: ACTIONS.GET_COMMENT_SUCCESS,
    data: data,
  };
};
const getCommentFaild = (err) => {
  return {
    type: ACTIONS.GET_COMMENT_FAILD,
    data: err,
  };
};
