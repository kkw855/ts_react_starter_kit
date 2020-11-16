import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import {
  decreaseAsync,
  increaseAsync,
  setDiff,
} from '../../../modules/counter';
import Counter from './Counter';

const CounterContainer = () => {
  const { number, diff } = useSelector((state: RootState) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();
  // const onIncrease = () => dispatch(increase());
  // const onDecrease = () => dispatch(decrease());
  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());
  const onSetDiff = (diff: number) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
