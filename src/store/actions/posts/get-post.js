import { getPost as ACTIONS } from "../index";
import { post } from "../../../apis/post";

export const clearPost = () => {
  return {
    type: ACTIONS.CLEAR_POST,
  };
};

export const getPost = (payload) => {
  return (dispatch) => {
    dispatch(getPostStart());
    post
      .getPosts(payload)
      .then((response) => {
        dispatch(getPostSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getPostFaild(err));
      });
  };
};

const getPostStart = () => {
  return {
    type: ACTIONS.GET_POST_START,
  };
};
const getPostSuccess = (data) => {
  return {
    type: ACTIONS.GET_POST_SUCCESS,
    data: data,
  };
};
const getPostFaild = (err) => {
  return {
    type: ACTIONS.GET_POST_FAILD,
    data: err,
  };
};
