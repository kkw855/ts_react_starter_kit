import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '../modules';
import App from './App';

// let store = null;
let middlewares;

if (process.env.NODE_ENV === 'development') {
  middlewares = composeWithDevTools(applyMiddleware(ReduxThunk, logger));
} else {
  middlewares = applyMiddleware(ReduxThunk);
}

const store = createStore(rootReducer, middlewares);

const root = document.querySelector('#root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  root,
);
