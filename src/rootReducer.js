import { combineReducers } from 'redux';
import movieReviews from './containers/movieReviews/MovieReviews.reducer';

const rootReducer = combineReducers({
  movieReviews
});
export default rootReducer;
