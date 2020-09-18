import { hot } from 'react-hot-loader/root';
import React, { ReactElement } from 'react';
import Counter from './Counter';
import './style.scss';
import MyComponent from './MyComponent';

function App(): ReactElement {
  return (
    <div>
      <MyComponent />
      <h1 style={{ fontFamily: 'Nanum Myeongjo' }}>고장난 시계</h1>
      <Counter />
    </div>
  );
}

export default hot(App);
