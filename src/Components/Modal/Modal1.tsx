import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

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
    border: 3px solid #73ad21;
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
`;

type Props = {
  activator: (setShow: (isShow: boolean) => void) => ReactNode;
};

const Modal1: React.FC<Props> = ({ activator, children }) => {
  const [show, setShow] = useState(false);

  const content = show && (
    <StyledModal>
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
    </StyledModal>
  );

  return (
    <>
      {activator(setShow)}
      {createPortal(content, document.body)}
    </>
  );
};

export default Modal1;
