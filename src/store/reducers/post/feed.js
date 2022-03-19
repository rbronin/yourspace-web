import { getFeed as ACTION } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearFeed = () => {
  return initialState;
};

const getFeedStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const getFeedSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const getFeedFaild = (state, action) => {
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
    case ACTION.GET_FEED_START:
      return getFeedStart(state);
    case ACTION.GET_FEED_SUCCESS:
      return getFeedSuccess(state, action);
    case ACTION.GET_FEED_FAILD:
      return getFeedFaild(state, action);
    case ACTION.CLEAR_FEED:
      return clearFeed();
    default:
      return state;
  }
};

export default reducer;
