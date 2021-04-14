import * as types from '../constant/actionTypes';
import {API_URL, API_KEY} from '../constant/general';
import axios from 'axios';

const getRequest = () => ({
  type: types.GET_REQUEST,
});

const getPopularSuccess = popular => ({
  type: types.GET_POPULAR_SUCCESS,
  payload: popular,
});

const getPopularFailure = error => ({
  type: types.GET_POPULAR_FAILURE,
  error,
});

export const getPopularAction = () => {
  let url = `${API_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      //   console.log('response.data.results', response.data.results);
      dispatch(getPopularSuccess(response.data.results));
    } catch (error) {
      console.log('error', error);
      dispatch(getPopularFailure(error));
    }
  };
};
