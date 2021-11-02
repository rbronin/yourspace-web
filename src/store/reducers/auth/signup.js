import { signup as Actions } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearSignup = () => {
  return initialState;
};

const signupStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const signupSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const signupFaild = (state, action) => {
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
    case Actions.SIGNUP_START:
      return signupStart(state);
    case Actions.SIGNUP_SUCEESS:
      return signupSuccess(state, action);
    case Actions.SIGNUP_FAILD:
      return signupFaild(state, action);
    case Actions.CLEAR_SIGNUP:
      return clearSignup();
    default:
      return state;
  }
};

export default reducer;
