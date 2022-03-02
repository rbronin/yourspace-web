import { serachUser as ACTION } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearSearchUser = () => {
  return initialState;
};

const searchUserStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const searchUserSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const searchUserFaild = (state, action) => {
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
    case ACTION.SEARCH_USER_START:
      return searchUserStart(state);
    case ACTION.SEARCH_USER_SUCCESS:
      return searchUserSuccess(state, action);
    case ACTION.SEARCH_USER_FAILD:
      return searchUserFaild(state, action);
    case ACTION.CLEAR_SEARCH_USER:
      return clearSearchUser();
    default:
      return state;
  }
};

export default reducer;
