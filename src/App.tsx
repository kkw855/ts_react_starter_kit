import { hot } from 'react-hot-loader/root';
import React, { ReactElement } from 'react';
import TodoApp from './TodoListApp/TodoApp';

function App(): ReactElement {
  return <TodoApp />;
}

export default hot(App);
