import { getUser as ACTION } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearUser = () => {
  return initialState;
};

const getUserStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const getUserSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const getUserFaild = (state, action) => {
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
    case ACTION.GET_USER_START:
      return getUserStart(state);
    case ACTION.GET_USER_SUCCESS:
      return getUserSuccess(state, action);
    case ACTION.GET_USER_FAILD:
      return getUserFaild(state, action);
    case ACTION.CLEAR_USER:
      return clearUser();
    default:
      return state;
  }
};

export default reducer;
