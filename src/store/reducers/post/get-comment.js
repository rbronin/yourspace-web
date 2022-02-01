import { getComment as ACTION } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearGetComment = () => {
  return initialState;
};

const getCommentStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const getCommentSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const getCommentFaild = (state, action) => {
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
    case ACTION.GET_COMMENT_START:
      return getCommentStart(state);
    case ACTION.GET_COMMENT_SUCCESS:
      return getCommentSuccess(state, action);
    case ACTION.GET_COMMENT_FAILD:
      return getCommentFaild(state, action);
    case ACTION.CLEAR_GET_COMMENT:
      return clearGetComment();
    default:
      return state;
  }
};

export default reducer;
