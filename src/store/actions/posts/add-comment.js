import { addComment as ACTIONS } from "../index";
import { post } from "../../../apis/post";

export const clearAddComment = () => {
  return {
    type: ACTIONS.CLEAR_ADD_COMMENT,
  };
};

export const addComment = (payload) => {
  return (dispatch) => {
    dispatch(addCommentStart());
    post
      .addComment(payload)
      .then((response) => {
        dispatch(addCommentSuccess(response.data));
      })
      .catch((err) => {
        dispatch(addCommentFaild(err));
      });
  };
};

const addCommentStart = () => {
  return {
    type: ACTIONS.ADD_COMMENT_START,
  };
};
const addCommentSuccess = (data) => {
  return {
    type: ACTIONS.ADD_COMMENT_SUCCESS,
    data: data,
  };
};
const addCommentFaild = (err) => {
  return {
    type: ACTIONS.ADD_COMMENT_FAILD,
    data: err,
  };
};
