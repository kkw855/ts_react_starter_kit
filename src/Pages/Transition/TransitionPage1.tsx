import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const T1Wrapper = styled.div`
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 7000ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 7000ms;
  }
`;

const TransitionPage1: React.FC = () => {
  const [inProp, setInProp] = useState(false);

  return (
    <T1Wrapper>
      <CSSTransition in={inProp} timeout={1000} classNames="my-node" appear>
        <div>{"I'll receive my-node-* classes"}</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Toggle
      </button>
    </T1Wrapper>
  );
};

export default TransitionPage1;
