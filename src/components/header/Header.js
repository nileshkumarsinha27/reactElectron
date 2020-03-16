import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './header.scss';
import InputBar from '../inputBar/InputBar';
import CONSTANTS from '../../constants';
import {
  getMovieReviews,
  updateQyeryStringReview
} from '../../containers/movieReviews/MovieReviews.actions';

const getObjectKeyValue = key =>
  [...CONSTANTS.SIDE_NAV.NAV_DATA].find(
    navData =>
      navData[CONSTANTS.SIDE_NAV.DATA_KEYS.PATH] === window.location.pathname
  )[key];

const OBJECT_KEYS = {
  INPUT: {
    PLACEHOLDER: 'PLACEHOLDER',
    CUSTOMCLASS: 'CUSTOMCLASS'
  }
};

const MOVIE_REVIEW_TYPE = 'all';

const HEADER_CONSATNTS = {
  INPUT: {
    [OBJECT_KEYS.INPUT.PLACEHOLDER]:
      getObjectKeyValue(CONSTANTS.SIDE_NAV.DATA_KEYS.PLACEHOLDER) || '',
    [OBJECT_KEYS.INPUT.CUSTOMCLASS]: 'header-search-bar'
  }
};
const Header = ({
  resetReviewListing,
  getSearchResultsReviews,
  updateQyeryStringReviews,
  ...props
}) => {
  const changeHandler = value => {
    const navSelected = getObjectKeyValue(CONSTANTS.SIDE_NAV.DATA_KEYS.TITLE);
    switch (navSelected) {
      case CONSTANTS.SIDE_NAV.NAV_TITLES.REVIEWS:
        getSearchResultsReviews(value);
        updateQyeryStringReviews(value);
        break;
      case CONSTANTS.SIDE_NAV.NAV_TITLES.HOME:
      case CONSTANTS.SIDE_NAV.NAV_TITLES.BLOGS:
      default:
        break;
    }
  };
  const resetInputValue = () => {
    const navSelected = getObjectKeyValue(CONSTANTS.SIDE_NAV.DATA_KEYS.TITLE);
    switch (navSelected) {
      case CONSTANTS.SIDE_NAV.NAV_TITLES.REVIEWS:
        getSearchResultsReviews('');
        updateQyeryStringReviews('');
        break;
      case CONSTANTS.SIDE_NAV.NAV_TITLES.HOME:
      case CONSTANTS.SIDE_NAV.NAV_TITLES.BLOGS:
      default:
        break;
    }
  };
  return (
    <header className="header-container" {...props}>
      <InputBar
        placeHolder={HEADER_CONSATNTS.INPUT[OBJECT_KEYS.INPUT.PLACEHOLDER]}
        customClass={HEADER_CONSATNTS.INPUT[OBJECT_KEYS.INPUT.CUSTOMCLASS]}
        showIcon
        handleChange={changeHandler}
        resetInputValue={resetInputValue}
      />
    </header>
  );
};

Header.propTypes = {
  getSearchResultsReviews: PropTypes.func.isRequired,
  updateQyeryStringReviews: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  getSearchResultsReviews: queryString =>
    dispatch(
      getMovieReviews({ queryString, type: MOVIE_REVIEW_TYPE, offset: 0 })
    ),
  updateQyeryStringReviews: queryString =>
    dispatch(updateQyeryStringReview(queryString))
});

export default connect(null, mapDispatchToProps)(Header);
