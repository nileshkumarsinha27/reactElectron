import ACTIONS from '../../api-config/actions.constants';
import CONSTANTS from '../../constants';
const initialState = {
  reviews: [],
  totalCount: 0,
  hasMore: true,
  offset: 0,
  queryString: ''
};
const MovieReviews = (state = initialState, action) => {
  let tempState = { ...state };
  switch (action.type) {
    case ACTIONS.MOVIE_REVIEWS.GET_MOVIE_REVIEWS_SUCCESS:
      tempState = {
        ...tempState,
        reviews: action.response.results,
        hasMore: action.response.has_more,
        offset: tempState.offset + CONSTANTS.REVIEW_OFFSET_VALUE
      };
      return tempState;
    case ACTIONS.MOVIE_REVIEWS.GET_MORE_MOVIE_REVIEWS_SUCCESS:
      tempState = {
        ...tempState,
        reviews: [...tempState.reviews, ...action.response.results],
        hasMore: action.response.has_more,
        offset: tempState.offset + CONSTANTS.REVIEW_OFFSET_VALUE
      };
      return tempState;
    case ACTIONS.MOVIE_REVIEWS.UPDATE_REVIEW_QUERRY:
      tempState = {
        ...tempState,
        queryString: action.data
      };
      return tempState;
    case ACTIONS.MOVIE_REVIEWS.GET_MOVIE_REVIEWS_FAIL:
    case ACTIONS.MOVIE_REVIEWS.GET_MORE_MOVIE_REVIEWS_FAIL:
    default:
      return tempState;
  }
};

export default MovieReviews;
