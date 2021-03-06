import 'core-js/stable';
import 'regenerator-runtime/runtime';
// Only for development mode
import './wdyr';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
// import rootReducer from '../modules';
import App from './App';

const sagaMiddleware = createSagaMiddleware();

let middlewares;

if (process.env.NODE_ENV === 'development') {
  middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
} else {
  middlewares = applyMiddleware(sagaMiddleware);
}

// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }
//
// const store = createStore(rootReducer, middlewares);
//
// sagaMiddleware.run(rootSaga);
//
// const action = (type: string) => store.dispatch({ type });
//

const root = document.querySelector('#root');

render(
  <React.StrictMode>
    {/*<Provider store={store}>*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/*</Provider>*/}
  </React.StrictMode>,
  root,
);
