import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { ReactElement } from 'react';
import Counter from './Counter';

function App(): ReactElement {
  return (
    <div>
      <h1>Hello, world.</h1>
      <Counter />
    </div>
  );
}

export default hot(App);
