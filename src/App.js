import React from 'react';
import Layout from './containers/layout/Layout';
import Home from './containers/home/Home';
import MovieReviews from './containers/movieReviews/MovieReviews';
import './styles/main.scss';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import URL_CONSTANTS from './url.constants';

const renderChildren = route => {
  switch (route) {
    case URL_CONSTANTS.DEFAULT:
      return <Home />;
    case URL_CONSTANTS.MOVIE_REVIEWS:
      return <MovieReviews />;
    default:
      return <div />;
  }
};

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path={URL_CONSTANTS.DEFAULT}
        render={() => <Layout>{renderChildren(URL_CONSTANTS.DEFAULT)}</Layout>}
      />
      <Route
        path={URL_CONSTANTS.MOVIE_REVIEWS}
        render={() => (
          <Layout>{renderChildren(URL_CONSTANTS.MOVIE_REVIEWS)}</Layout>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
