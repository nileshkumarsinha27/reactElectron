import { all, takeLatest } from 'redux-saga/effects';
import {
  getMovieReviewsSaga,
  getMoreMovieReviewSaga
} from './containers/movieReviews/MovieReviews.saga';
import ACTIONS from './api-config/actions.constants';
export default () =>
  all([
    takeLatest(ACTIONS.MOVIE_REVIEWS.GET_MOVIE_REVIEWS, getMovieReviewsSaga),
    takeLatest(
      ACTIONS.MOVIE_REVIEWS.GET_MORE_MOVIE_REVIEWS,
      getMoreMovieReviewSaga
    )
  ]);
