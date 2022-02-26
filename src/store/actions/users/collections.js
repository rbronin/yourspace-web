import { getCollections as ACTIONS } from "../index";
import { user } from "../../../apis/user";

export const clearCollections = () => {
  return {
    type: ACTIONS.CLEAR_GET_COLLECTIONS,
  };
};

export const getCollections = (payload) => {
  return (dispatch) => {
    dispatch(getCollectionsStart());
    user
      .getUserCollections(payload)
      .then((response) => {
        dispatch(getCollectionsSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getCollectionsFaild(err));
      });
  };
};

const getCollectionsStart = () => {
  return {
    type: ACTIONS.GET_COLLECTIONS_START,
  };
};
const getCollectionsSuccess = (data) => {
  return {
    type: ACTIONS.GET_COLLECTIONS_SUCCESS,
    data: data,
  };
};
const getCollectionsFaild = (err) => {
  return {
    type: ACTIONS.GET_COLLECTIONS_FAILD,
    data: err,
  };
};
