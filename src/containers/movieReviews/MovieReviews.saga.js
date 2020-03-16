import { call, put } from 'redux-saga/effects';
import { getData } from '../../utils/axios';

import API from '../../api-config/api.config';
import CONSTANTS from '../../constants';
import {
  getMovieReviewsSuccess,
  getMovieReviewsFail,
  getMoreMovieReviewsSuccess,
  getMoreMovieReviewsFail
} from './MovieReviews.actions';

const getUrl = action =>
  `${API.MOVIE_REVIEWS}/${action.data.type}.json?api-key=${
    CONSTANTS.REACT_APP_REQUEST_API_KEY
  }&offset=${action.data.offset}&query=${action.data.queryString || ''}`;

function* getMovieReviewsSuccessSaga(response) {
  yield put(getMovieReviewsSuccess(response));
}

function* getMovieReviesFailSaga(response) {
  yield put(getMovieReviewsFail(response));
}

function* getMoreMovieReviewsSuccessSaga(response) {
  yield put(getMoreMovieReviewsSuccess(response));
}

function* getMoreMovieReviesFailSaga(response) {
  yield put(getMoreMovieReviewsFail(response));
}

function* getMovieReviewsSaga(action) {
  let response;
  let url = getUrl(action);
  response = yield call(getData, url);

  if (response.status === CONSTANTS.SUCCESS_STATUS) {
    yield call(getMovieReviewsSuccessSaga, response.data);
  } else {
    yield call(getMovieReviesFailSaga, response.data);
  }
}

function* getMoreMovieReviewSaga(action) {
  let response;
  let url = getUrl(action);
  response = yield call(getData, url);

  if (response.status === CONSTANTS.SUCCESS_STATUS) {
    yield call(getMoreMovieReviewsSuccessSaga, response.data);
  } else {
    yield call(getMoreMovieReviesFailSaga, response.data);
  }
}

export { getMovieReviewsSaga, getMoreMovieReviewSaga };
