import React from 'react';

export type CounterProps = {
  number: number;
  diff: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onSetDiff: (diff: number) => void;
};

const Counter = ({
  number,
  diff,
  onIncrease,
  onDecrease,
  onSetDiff,
}: CounterProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetDiff(parseInt(e.target.value, 10));
  };

  return (
    <>
      <h1>{number}</h1>
      <div>
        <input type="number" min={1} value={diff} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </>
  );
};

export default Counter;
