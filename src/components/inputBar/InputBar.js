import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CONSTANTS from '../../constants.js';
import './inputBar.scss';
import icnSearch from '../../assets/images/icn_search.svg';

const INPUT_BAR_CLASSES = {
  CONTAINER: 'input-bar-container'
};

const InputBar = ({
  handleChange,
  customClass,
  placeHolder,
  labelValue,
  showIcon,
  resetInputValue,
  ...props
}) => {
  const [inputValue, chnageHandler] = useState('');

  useEffect(() => {
    const { length } = inputValue;
    if (length >= CONSTANTS.TYPE_AHEAD_CHAR_LENGTH) {
      handleChange(inputValue);
    } else if (length === 0) {
      resetInputValue();
    }
  }, [inputValue, handleChange, resetInputValue]);

  const getContainerClass = () =>
    cx([INPUT_BAR_CLASSES.CONTAINER, customClass]);

  return (
    <div className={getContainerClass()} {...props}>
      {showIcon && <img src={icnSearch} alt="search" />}
      <label>
        <input
          placeholder={placeHolder}
          value={inputValue}
          onChange={({ target: { value } }) => chnageHandler(value)}
        />
        {labelValue}
      </label>
    </div>
  );
};

InputBar.propTypes = {
  handleChange: PropTypes.func,
  customClass: PropTypes.string,
  placeHolder: PropTypes.string,
  labelValue: PropTypes.string,
  showIcon: PropTypes.bool,
  resetInputValue: PropTypes.func
};

InputBar.defaultProps = {
  handleChange: () => {},
  customClass: '',
  placeHolder: '',
  labelValue: '',
  showIcon: false,
  resetInputValue: () => {}
};

export default InputBar;
