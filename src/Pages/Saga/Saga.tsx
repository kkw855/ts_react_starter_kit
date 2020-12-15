import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function weirdFunction() {
  return 1;
  return 2;
}

function* generatorFunction() {
  console.log('안녕하세요?');
  yield 1;
  console.log('제너레이터 함수');
  yield 2;
  console.log('function*');
  yield 3;
  return 4;
}

const generator = generatorFunction();

// { value: , done: }
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* sumGenerator() {
  console.log('sumGenerator이 시작됐습니다.');
  const a = yield;
  console.log('a값을 받았습니다.');
  const b = yield;
  console.log('b값을 받았습니다.');
  yield a + b;
}

function* watchGenerator() {
  console.log('모니터링을 시작합니다.');

  while (true) {
    const action = yield;

    if (action.type === 'HELLO') {
      console.log('안녕하세요?');
    }

    if (action.type === 'BYE') {
      console.log('안녕히가세요.');
    }
  }
}

const sum = sumGenerator();
console.log(sum.next());
console.log(sum.next(1));
console.log(sum.next(2));
console.log(sum.next());

type CounterProps = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementAsync: () => void;
};
const Counter: React.FC<CounterProps> = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
}) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>{' '}
    <button onClick={onIncrement}>Increment</button>{' '}
    <button onClick={onDecrement}>Decrement</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);
const CounterContainer = () => {
  const dispatch = useDispatch();
  const value = useSelector(state);

  return <Counter value={} onIncrement={} onDecrement={} onIncrementAsync={} />;
};

const Saga: React.FC = () => {
  return (
    <>
      <Counter value={} onIncrement={} onDecrement={} onIncrementAsync={} />
    </>
  );
};

export default Saga;
