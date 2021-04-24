import * as types from '../constant/actionTypes';
import axios from 'axios';
import {BASE_URL} from '../constant/general';
import FormData from 'form-data';

const getRequest = () => ({
  type: types.GET_REQUEST,
});

const loginSuccess = auth => ({
  type: types.LOGIN_SUCCESS,
  payload: auth,
});

const loginFailure = error => ({
  type: types.LOGIN_FAILURE,
  error,
});

const getUserSucees = user => ({
  type: types.GET_USER_SUCCESS,
  payload: user,
});

const getUserFailure = error => ({
  error,
});

export const loginAction = user => {
  let url = `${BASE_URL}/login`;
  let headers = {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  };
  let data = new FormData();
  data.append('email', user.email);
  data.append('password', user.password);
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.post(url, data, {
        headers,
      });
      dispatch(loginSuccess(response.data));
      return response.data;
    } catch (error) {
      console.log('error', error);
      dispatch(loginFailure(error));
    }
  };
};

export const getUserAction = userId => {
  let url = `${BASE_URL}/user/${userId}`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(getUserSucees(response.data.data));
    } catch (error) {
      dispatch(getUserFailure(error));
    }
  };
};
