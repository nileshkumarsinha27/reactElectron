import React from 'react';
import NoDataFound from '../../components/noDataFound/NoDataFound';
import CONSTANTS from '../../constants';

const Home = () => (
  <main className="home-container">
    <NoDataFound message={CONSTANTS.NO_BLOG_FOUND} />
  </main>
);

export default Home;
