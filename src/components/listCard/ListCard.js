import React from 'react';
import PropTypes from 'prop-types';
import './listCard.scss';
import defaultImg from '../../assets/images/gray_scale.png';

const LIST_CARD_CONSTANTS = {
  DATA_KEYS: {
    BY_LINE: 'byline',
    UPDATED: 'date_updated',
    TITLE: 'display_title',
    HEADLINE: 'headline',
    SUMMARY: 'summary_short',
    MULTIMEDIA: 'multimedia',
    SRC: 'src'
  }
};

const ListCard = ({ cardData, customClass, ...props }) => {
  const getCardSrc = () =>
    cardData[LIST_CARD_CONSTANTS.DATA_KEYS.MULTIMEDIA]
      ? cardData[LIST_CARD_CONSTANTS.DATA_KEYS.MULTIMEDIA][
          LIST_CARD_CONSTANTS.DATA_KEYS.SRC
        ]
      : defaultImg;
  return (
    <div className="list-card-container" {...props}>
      <p className="card-title">
        <span className="title-span">
          {cardData[LIST_CARD_CONSTANTS.DATA_KEYS.TITLE]}
        </span>
        <span className="updated-span">
          {cardData[LIST_CARD_CONSTANTS.DATA_KEYS.UPDATED]}
        </span>
      </p>
      <p className="card-headline">
        {cardData[LIST_CARD_CONSTANTS.DATA_KEYS.HEADLINE]}
      </p>
      <div className="card-description">
        <img src={getCardSrc()} alt="media" />
        <p className="description">
          <span className="summary">
            {cardData[LIST_CARD_CONSTANTS.DATA_KEYS.SUMMARY]}
          </span>
          <span className="by-line">
            {cardData[LIST_CARD_CONSTANTS.DATA_KEYS.BY_LINE]}
          </span>
        </p>
      </div>
    </div>
  );
};

ListCard.propTypes = {
  cardData: PropTypes.object,
  customClass: PropTypes.string
};

ListCard.defaultProps = {
  cardData: {},
  customClass: ''
};
export default ListCard;
