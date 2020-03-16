import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducers from './rootReducer';
import RootSaga from './rootSaga';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CONSTANTS from './constants';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension &&
      process.env.NODE_ENV !== CONSTANTS.NODE_ENVIRONMENT.PROD
      ? window.devToolsExtension()
      : f => f
  )
);

sagaMiddleware.run(function*() {
  yield RootSaga();
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
