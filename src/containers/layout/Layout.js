import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import SideNav from '../../components/sideNav/SideNav';
import './layout.scss';

const Layout = ({ children, ...props }) => (
  <div className="layout-container" {...props}>
    <Header />
    <SideNav />
    <div className="main-content-container">{children}</div>
  </div>
);
Layout.propTypes = {
  children: PropTypes.node
};
Layout.defaultProps = {
  children: <div />
};
export default Layout;
