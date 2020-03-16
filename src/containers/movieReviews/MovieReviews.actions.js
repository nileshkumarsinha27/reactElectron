import ACTIONS from '../../api-config/actions.constants';

export const getMovieReviews = data => ({
  type: ACTIONS.MOVIE_REVIEWS.GET_MOVIE_REVIEWS,
  data
});

export const getMovieReviewsSuccess = response => ({
  type: ACTIONS.MOVIE_REVIEWS.GET_MOVIE_REVIEWS_SUCCESS,
  response
});

export const getMovieReviewsFail = response => ({
  type: ACTIONS.MOVIE_REVIEWS.GET_MORE_MOVIE_REVIEWS,
  response
});

export const getMoreMovieReviews = data => ({
  type: ACTIONS.MOVIE_REVIEWS.GET_MORE_MOVIE_REVIEWS,
  data
});

export const getMoreMovieReviewsSuccess = response => ({
  type: ACTIONS.MOVIE_REVIEWS.GET_MORE_MOVIE_REVIEWS_SUCCESS,
  response
});

export const getMoreMovieReviewsFail = response => ({
  type: ACTIONS.MOVIE_REVIEWS.GET_MORE_MOVIE_REVIEWS_FAIL,
  response
});

export const updateQyeryStringReview = queryString => ({
  type: ACTIONS.MOVIE_REVIEWS.UPDATE_REVIEW_QUERRY,
  data: queryString
});
