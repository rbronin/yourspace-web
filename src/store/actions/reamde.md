import * as actionTypes from '../index';
import API from '../../../api';
import { getStoreClient } from './get-store-client';

export const clearAddClient = () => {
  return {
    type: actionTypes.CLEAR_ADD_CLIENT,
  };
};

export const addClient = (payload) => {
  return (dispatch) => {
    dispatch(addClientInitiate());
    API.addStoreClient(payload)
      .then((response) => {
        dispatch(addClientSuccess(response.data));
        dispatch(
          getStoreClient({
            store_id: 'S1',
          }),
        );
      })
      .catch((error) => {
        dispatch(addClientFailure(error));
      });
  };
};

const addClientInitiate = () => {
  return {
    type: actionTypes.ADD_CLIENT_START,
  };
};

const addClientSuccess = (data) => {
  return {
    type: actionTypes.ADD_CLIENT_SUCCESS,
    data: data,
  };
};

const addClientFailure = (err) => {
  return {
    type: actionTypes.ADD_CLIENT_FAIL,
    data: err,
  };
};


<!-- Action types -->

export const OPEN_ADD_SERVICE_FORM = 'OPEN_ADD_SERVICE_FORM';
export const CLOSE_ADD_SERVICE_FORM = 'CLOSE_ADD_SERVICE_FORM';
export const OPEN_EDIT_SERVICE_FORM = 'OPEN_EDIT_SERVICE_FORM';
export const CLOSE_EDIT_SERVICE_FORM = 'CLOSE_EDIT_SERVICE_FORM';
export const OPEN_EDIT_TIMINGS_FORM = 'OPEN_EDIT_TIMINGS_FORM';
export const CLOSE_EDIT_TIMINGS_FORM = 'CLOSE_EDIT_TIMINGS_FORM';