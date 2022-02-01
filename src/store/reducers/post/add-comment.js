import { addComment as ACTION } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearAddComment = () => {
  return initialState;
};

const addCommentStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const addCommentSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const addCommentFaild = (state, action) => {
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
    case ACTION.ADD_COMMENT_START:
      return addCommentStart(state);
    case ACTION.ADD_COMMENT_SUCCESS:
      return addCommentSuccess(state, action);
    case ACTION.ADD_COMMENT_FAILD:
      return addCommentFaild(state, action);
    case ACTION.CLEAR_ADD_COMMENT:
      return clearAddComment();
    default:
      return state;
  }
};

export default reducer;
