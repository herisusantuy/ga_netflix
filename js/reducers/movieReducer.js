import * as types from '../constant/actionTypes';

const initialState = {
  loading: false,
  popular: [],
  upcoming: [],
  nowPlaying: [],
  topRated: [],
  genres: [],
  error: null,
  movie: {},
  reviews: [],
  videos: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        movie: {},
      });
    case types.GET_GENRES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        genres: action.payload,
      });
    case types.GET_GENRES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
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
    case types.GET_UPCOMING_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        upcoming: action.payload,
      });
    case types.GET_UPCOMING_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    case types.GET_NOW_PLAYING_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        nowPlaying: action.payload,
      });
    case types.GET_NOW_PLAYING_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    case types.GET_TOP_RATED_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        topRated: action.payload,
      });
    case types.GET_TOP_RATED_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    case types.GET_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        movie: action.payload,
      });
    case types.GET_MOVIE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    case types.GET_MOVIE_REVIEW_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        reviews: action.payload,
      });
    case types.GET_MOVIE_REVIEW_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    case types.GET_VIDEOS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        videos: action.payload,
      });
    case types.GET_VIDEOS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default movieReducer;
