import { getPost as ACTION } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearPost = () => {
  return initialState;
};

const getPostStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const getPostSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const getPostFaild = (state, action) => {
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
    case ACTION.GET_POST_START:
      return getPostStart(state);
    case ACTION.GET_POST_SUCCESS:
      return getPostSuccess(state, action);
    case ACTION.GET_POST_FAILD:
      return getPostFaild(state, action);
    case ACTION.CLEAR_POST:
      return clearPost();
    default:
      return state;
  }
};

export default reducer;
