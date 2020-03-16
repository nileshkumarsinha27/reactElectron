import React from 'react';
import CONSTANTS from '../../constants';
import { NavLink } from 'react-router-dom';
import { isDataExists } from '../../utils/utils';
import './sideNav.scss';

const ACTIVE_NAV_CLASS = 'active-nav';

const SideNav = () => {
  const renderList = list =>
    [...list].map((listItem, listIndex) => (
      <li key={listIndex} className="navigation-list-item">
        <NavLink
          to={listItem[CONSTANTS.SIDE_NAV.DATA_KEYS.PATH]}
          activeClassName={ACTIVE_NAV_CLASS}
          exact
        >
          {listItem[CONSTANTS.SIDE_NAV.DATA_KEYS.TITLE]}
        </NavLink>
      </li>
    ));
  return (
    <nav className="navigation-container">
      <p>{CONSTANTS.APP_HEADER}</p>
      {isDataExists(CONSTANTS.SIDE_NAV.NAV_DATA) && (
        <ul className="navigation-list">
          {renderList(CONSTANTS.SIDE_NAV.NAV_DATA)}
        </ul>
      )}
    </nav>
  );
};
export default SideNav;
