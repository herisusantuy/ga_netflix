import * as types from '../constant/actionTypes';

const initialState = {
  loading: false,
  auth: {},
  profile: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        auth: action.payload,
      });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    case types.GET_USER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        profile: action.payload,
      });
    case types.GET_USER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default userReducer;
