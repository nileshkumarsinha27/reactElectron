import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import icnBlog from '../../assets/images/blogImage.svg';
import './noDataFound.scss';

const NO_DATA_CONTAINER_CLASS = 'no-data-container';

const NoDataFound = ({ message, customClass, ...props }) => {
  const getContainerClass = () => cx([NO_DATA_CONTAINER_CLASS, customClass]);
  return (
    <div className={getContainerClass()} {...props}>
      <img src={icnBlog} alt="blog" />
      <p>{message}</p>
    </div>
  );
};

NoDataFound.propTypes = {
  customClass: PropTypes.string,
  message: PropTypes.string
};
NoDataFound.defaultProps = {
  customClass: '',
  message: ''
};
export default NoDataFound;
