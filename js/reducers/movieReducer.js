import * as types from '../constant/actionTypes';

const initialState = {
  loading: false,
  popular: [],
  error: null,
};

const movieReducer = (state = initialState, action) => {
  console.log('action.type', action.type);
  console.log('action.payload', action.payload);
  switch (action.type) {
    case types.GET_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
    case types.GET_POPULAR_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        popular: action.payload,
      });
    case types.GET_POPULAR_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default movieReducer;
