import { getRecommendation as ACTION } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearRecommend = () => {
  return initialState;
};

const getRecommendStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const getRecommendSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const getRecommendFaild = (state, action) => {
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
    case ACTION.GET_RECOMMENDATION_START:
      return getRecommendStart(state);
    case ACTION.GET_RECOMMENDATION_SUCCESS:
      return getRecommendSuccess(state, action);
    case ACTION.GET_RECOMMENDATION_FAILD:
      return getRecommendFaild(state, action);
    case ACTION.CLEAR_RECOMMENDATION:
      return clearRecommend();
    default:
      return state;
  }
};

export default reducer;
