import { authenticate as Actions } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearAuthentication = () => {
  return initialState;
};

const authenticationStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const authenticationSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const authenticationFaild = (state, action) => {
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
    case Actions.AUTHENTICATION_START:
      return authenticationStart(state);
    case Actions.AUTHENTICATION_SUCEESS:
      return authenticationSuccess(state, action);
    case Actions.AUTHENTICATION_FAILD:
      return authenticationFaild(state, action);
    case Actions.CLEAR_AUTHENTICATION:
      return clearAuthentication();
    default:
      return state;
  }
};

export default reducer;
