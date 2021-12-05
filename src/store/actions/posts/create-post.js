import { createPost } from "../index";
import { post } from "../../../apis";

export const clearCreatePost = () => {
  return {
    type: createPost.CLEAR_POST_CREATE,
  };
};

export const createNewPost = (payload) => {
  return (dispatch) => {
    dispatch(createPostStart());
    post
      .create(payload)
      .then((response) => {
        dispatch(createPostSuccess(response.data));
      })
      .catch((err) => {
        dispatch(createPostFaild(err));
      });
  };
};

const createPostStart = () => {
  return {
    type: createPost.POST_CREATE_START,
  };
};
const createPostSuccess = (data) => {
  return {
    type: createPost.POST_CREATE_SUCEESS,
    data: data,
  };
};
const createPostFaild = (err) => {
  return {
    type: createPost.POST_CREATE_FAILD,
    data: err,
  };
};
