import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import App from './TodoListApp/TodoApp';

const root = document.querySelector('#root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
);
