import { hot } from 'react-hot-loader/root';
import React, { ReactElement } from 'react';
import ImmerApp from './Immer/ImmerApp';

function App(): ReactElement {
  return <ImmerApp />;
}

export default hot(App);
