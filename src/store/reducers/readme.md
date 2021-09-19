import * as actionTypes from '../../actions';

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearAddCheckout = () => {
  return initialState;
};

const addCheckoutStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const addCheckoutSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const addCheckoutFailure = (state, action) => {
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
    case actionTypes.ADD_CHECKOUT_START:
      return addCheckoutStart(state);
    case actionTypes.ADD_CHECKOUT_SUCCESS:
      return addCheckoutSuccess(state, action);
    case actionTypes.ADD_CHECKOUT_FAIL:
      return addCheckoutFailure(state, action);
    case actionTypes.CLEAR_ADD_CHECKOUT:
      return clearAddCheckout();
    default:
      return state;
  }
};

export default reducer;
