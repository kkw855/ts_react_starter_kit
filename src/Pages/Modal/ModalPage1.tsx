import React from 'react';
import Modal1 from '../../components/Modal/Modal1';

const Width: React.FC<{ children: (width: number) => JSX.Element | null }> = ({
  children,
}) => children(700);

const ModalPage1: React.FC = () => {
  return (
    <>
      <Width>
        {(width) =>
          width > 600 ? <div>min-width requirement met!</div> : null
        }
      </Width>
      <Modal1
        activator={(setShow) => (
          <button onClick={() => setShow(true)}>Show Modal</button>
        )}
      >
        모달 바디
      </Modal1>
    </>
  );
};

export default ModalPage1;
