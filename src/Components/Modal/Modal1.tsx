import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const TRANSITION_CLASS_NAME = 'modal-transition';

const StyledModal = styled.div`
  .overlay {
    z-index: 98;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .modal {
    position: relative;
    z-index: 99;
    width: 100%;
    max-width: 320px;
  }
  .modal-close {
    position: absolute;
    top: -24px;
    right: 0;
    padding: 5px;
    border: 0;
    -webkit-appearance: none;
    background: none;
    color: white;
    cursor: pointer;
  }
  .modal-body {
    padding: 20px 24px;
    border-radius: 4px;
    background-color: white;
  }
  .${TRANSITION_CLASS_NAME} .overlay {
    opacity: 0;
  }
  .${TRANSITION_CLASS_NAME}-enter-active .overlay {
    opacity: 1;
    transition: opacity 300ms;
  }
  .${TRANSITION_CLASS_NAME}-exit-active .overlay {
    opacity: 1;
  }
  .${TRANSITION_CLASS_NAME}-exit-active .overlay {
    opacity: 0;
    transition: opacity 300ms;
  }

  &.${TRANSITION_CLASS_NAME}-enter .modal {
    opacity: 0;
    transform: scale(0.9);
  }

  &.${TRANSITION_CLASS_NAME}-enter-active .modal {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  &.${TRANSITION_CLASS_NAME}-exit .modal {
    opacity: 1;
  }

  &.${TRANSITION_CLASS_NAME}-exit-active .modal {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

type Props = {
  activator: (setShow: (isShow: boolean) => void) => ReactNode;
};

const Modal1: React.FC<Props> = ({ activator, children }) => {
  const [show, setShow] = useState(false);

  const content = show && (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );

  return (
    <StyledModal>
      {activator(setShow)}
      {createPortal(
        <CSSTransition
          in={show}
          timeout={300}
          classNames={TRANSITION_CLASS_NAME}
          unmountOnExit
        >
          {() => <StyledModal>{content}</StyledModal>}
        </CSSTransition>,
        document.body,
      )}
    </StyledModal>
  );
};

export default Modal1;
