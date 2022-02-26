import { getCollections as ACTION } from "../../actions";

const initialState = {
  isLoading: false,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearCollections = () => {
  return initialState;
};

const getCollectionsStart = (state) => {
  return {
    ...state,
    isLoading: true,
    error: null,
    isError: false,
    isDone: false,
  };
};

const getCollectionsSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const getCollectionsFaild = (state, action) => {
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
    case ACTION.GET_COLLECTIONS_START:
      return getCollectionsStart(state);
    case ACTION.GET_COLLECTIONS_SUCCESS:
      return getCollectionsSuccess(state, action);
    case ACTION.GET_COLLECTIONS_FAILD:
      return getCollectionsFaild(state, action);
    case ACTION.CLEAR_GET_COLLECTIONS:
      return clearCollections();
    default:
      return state;
  }
};

export default reducer;
