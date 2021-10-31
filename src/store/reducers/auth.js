import { login as Actions } from "../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearLogin = () => {
  return initialState;
};

const loginStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const loginSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const loginFaild = (state, action) => {
  return {
    ...state,
    error: action.data,
    isLoading: false,
    isError: true,
    isDone: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_START:
      return loginStart(state);
    case Actions.LOGIN_SUCEESS:
      return loginSuccess(state, action);
    case Actions.LOGIN_FAILD:
      return loginFaild(state, action);
    case Actions.CLEAR_LOGIN:
      return clearLogin();
    default:
      return state;
  }
};

export default reducer;
