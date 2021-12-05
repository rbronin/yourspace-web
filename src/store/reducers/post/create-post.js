import { createPost as Actions } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearCreatePost = () => {
  return initialState;
};

const createPostStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const createPostSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const createPostFaild = (state, action) => {
  return {
    ...state,
    error: action.data,
    isLoading: false,
    isError: true,
    isDone: true,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.POST_CREATE_START:
      return createPostStart(state);
    case Actions.POST_CREATE_SUCEESS:
      return createPostSuccess(state, action);
    case Actions.POST_CREATE_FAILD:
      return createPostFaild(state, action);
    case Actions.CLEAR_POST_CREATE:
      return clearCreatePost();
    default:
      return state;
  }
};

export default reducer;
