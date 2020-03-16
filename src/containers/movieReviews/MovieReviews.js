import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import ListCard from '../../components/listCard/ListCard';
import { getMovieReviews, getMoreMovieReviews } from './MovieReviews.actions';
import { isDataExists } from '../../utils/utils';
import './movieReviews.scss';

const MOVIE_REVIEWS_CLASSES = {
  CONTAINER: 'movie-review-container'
};
const MOVIE_REVIEW_TYPE = 'all';

const MovieReviews = ({
  movieReviews: { reviews, offset, hasMore, queryString },
  getReviews,
  getMoreReviews,
  ...props
}) => {
  const [shouldCall, updateShouldCall] = useState(true);

  const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevReviews = usePrevious(reviews);

  useEffect(() => {
    if (!isDataExists(reviews)) {
      getReviews({ type: MOVIE_REVIEW_TYPE, offset });
    }
    if (
      prevReviews &&
      reviews.length !== prevReviews.length &&
      isDataExists(prevReviews)
    ) {
      updateShouldCall(true);
    }
  }, [reviews, offset, getReviews, updateShouldCall, prevReviews]);

  const renderCards = () =>
    [...reviews].map((reviewElem, reviewIndex) => (
      <ListCard key={reviewIndex} cardData={reviewElem} />
    ));

  return (
    <div className={MOVIE_REVIEWS_CLASSES.CONTAINER} {...props}>
      {isDataExists(reviews) && (
        <InfiniteScroll
          pageStart={0}
          loadMore={() => {
            getMoreReviews({ type: MOVIE_REVIEW_TYPE, offset, queryString });
            updateShouldCall(false);
          }}
          hasMore={shouldCall && hasMore}
        >
          <div className="card-container">{renderCards()}</div>
        </InfiniteScroll>
      )}
    </div>
  );
};

MovieReviews.propTypes = {
  movieReviews: PropTypes.object.isRequired,
  getReviews: PropTypes.func.isRequired,
  getMoreReviews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movieReviews: state.movieReviews
});

const mapDispatchToProps = dispatch => ({
  getReviews: data => dispatch(getMovieReviews(data)),
  getMoreReviews: data => dispatch(getMoreMovieReviews(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);
