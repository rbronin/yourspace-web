import { getFriends as ACTION } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearFriends = () => {
  return initialState;
};

const getFriendsStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const getFriendsSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const getFriendsFaild = (state, action) => {
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
    case ACTION.GET_FRIENDS_START:
      return getFriendsStart(state);
    case ACTION.GET_FRIENDS_SUCCESS:
      return getFriendsSuccess(state, action);
    case ACTION.GET_FRIENDS_FAILD:
      return getFriendsFaild(state, action);
    case ACTION.CLEAR_GET_FRIENDS:
      return clearFriends();
    default:
      return state;
  }
};

export default reducer;
