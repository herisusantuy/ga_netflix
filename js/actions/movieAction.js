import * as types from '../constant/actionTypes';
import {API_URL, API_KEY} from '../constant/general';
import axios from 'axios';

const getRequest = () => ({
  type: types.GET_REQUEST,
});

const getGenresSuccess = genres => ({
  type: types.GET_GENRES_SUCCESS,
  payload: genres,
});

const getGenresFailure = error => ({
  type: types.GET_GENRES_FAILURE,
  error,
});

const getPopularSuccess = popular => ({
  type: types.GET_POPULAR_SUCCESS,
  payload: popular,
});

const getPopularFailure = error => ({
  type: types.GET_POPULAR_FAILURE,
  error,
});

const getUpcomingSuccess = upcoming => ({
  type: types.GET_UPCOMING_SUCCESS,
  payload: upcoming,
});

const getUpcomingFailure = error => ({
  type: types.GET_UPCOMING_FAILURE,
  error,
});

const getNowPlayingSuccess = nowPlaying => ({
  type: types.GET_NOW_PLAYING_SUCCESS,
  payload: nowPlaying,
});

const getNowPlayingFailure = error => ({
  type: types.GET_NOW_PLAYING_FAILURE,
  error,
});

const getTopRatedSuccess = topRated => ({
  type: types.GET_TOP_RATED_SUCCESS,
  payload: topRated,
});

const getTopRatedFailure = error => ({
  type: types.GET_TOP_RATED_FAILURE,
  error,
});

const getMovieSuccess = movie => ({
  type: types.GET_MOVIE_SUCCESS,
  payload: movie,
});

const getMovieFailure = error => ({
  type: types.GET_MOVIE_FAILURE,
  error,
});

const getMovieReviewSuccess = reviews => ({
  type: types.GET_MOVIE_REVIEW_SUCCESS,
  payload: reviews,
});

const getMovieReviewFailure = error => ({
  type: types.GET_MOVIE_REVIEW_FAILURE,
  error,
});

const getVideosSuccess = videos => ({
  type: types.GET_VIDEOS_SUCCESS,
  payload: videos,
});

const getVideosFailure = error => ({
  type: types.GET_VIDEOS_FAILURE,
  error,
});

const getImagesSuccess = images => ({
  type: types.GET_IMAGES_SUCCESS,
  payload: images,
});

const getImagesFailure = error => ({
  type: types.GET_IMAGES_FAILURE,
  error,
});

export const getPopularAction = () => {
  let url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(getPopularSuccess(response.data.results));
    } catch (error) {
      console.log('error', error);
      dispatch(getPopularFailure(error));
    }
  };
};

export const getGenresAction = () => {
  let url = `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(
        getGenresSuccess(
          response.data.genres?.map(genre => {
            let obj = genre;
            obj.isActive = false;
            return obj;
          }),
        ),
      );
    } catch (error) {
      console.log('error', error);
      dispatch(getGenresFailure(error));
    }
  };
};

export const getUpcomingAction = () => {
  let url = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(getUpcomingSuccess(response.data.results));
    } catch (error) {
      console.log('error', error);
      dispatch(getUpcomingFailure(error));
    }
  };
};

export const getNowPlayingAction = () => {
  let url = `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(getNowPlayingSuccess(response.data.results));
    } catch (error) {
      console.log('error', error);
      dispatch(getNowPlayingFailure(error));
    }
  };
};

export const getTopRatedAction = () => {
  let url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(getTopRatedSuccess(response.data.results));
    } catch (error) {
      console.log('error', error);
      dispatch(getTopRatedFailure(error));
    }
  };
};

export const getMovieAction = movieId => {
  let url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(getMovieSuccess(response.data));
    } catch (error) {
      console.log('error', error);
      dispatch(getMovieFailure(error));
    }
  };
};

export const getMovieReviewAction = movieId => {
  let url = `${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(getMovieReviewSuccess(response.data.results));
    } catch (error) {
      console.log('error', error);
      dispatch(getMovieReviewFailure(error));
    }
  };
};

export const getVideosAction = movieId => {
  let url = `${API_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(getVideosSuccess(response.data.results));
    } catch (error) {
      console.log('error', error);
      dispatch(getVideosFailure(error));
    }
  };
};

export const getImagesAction = movieId => {
  let url = `${API_URL}/movie/${movieId}/images?api_key=${API_KEY}`;
  return async dispatch => {
    dispatch(getRequest());
    try {
      const response = await axios.get(url);
      dispatch(getImagesSuccess(response.data.backdrops));
    } catch (error) {
      console.log('error', error);
      dispatch(getImagesFailure(error));
    }
  };
};
