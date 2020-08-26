import { hot } from 'react-hot-loader/root';
import React, { ReactElement } from 'react';
import Counter from './Counter';

function App(): ReactElement {
  return (
    <div>
      <h1>고장난 시계</h1>
      <Counter />
    </div>
  );
}

export default hot(App);
