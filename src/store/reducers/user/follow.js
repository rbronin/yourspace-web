import { follow as ACTION } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearFollow = () => {
  return initialState;
};

const getFollowStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const getFollowSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const getFollowFaild = (state, action) => {
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
    case ACTION.GET_FOLLOW_START:
      return getFollowStart(state);
    case ACTION.GET_FOLLOW_SUCCESS:
      return getFollowSuccess(state, action);
    case ACTION.GET_FOLLOW_FAILD:
      return getFollowFaild(state, action);
    case ACTION.CLEAR_FOLLOW:
      return clearFollow();
    default:
      return state;
  }
};

export default reducer;
