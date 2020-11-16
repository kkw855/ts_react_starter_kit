import { Dispatch } from 'react';
import { RootAction } from './index';

const SET_DIFF = 'SET_DIFF' as const;
const INCREASE = 'INCREASE' as const;
const DECREASE = 'DECREASE' as const;

export const setDiff = (diff: number) => ({
  type: SET_DIFF,
  diff,
});

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseAsync = () => (dispatch: Dispatch<RootAction>) => {
  setTimeout(() => dispatch(increase()), 2000);
};

export const decreaseAsync = () => (dispatch: Dispatch<RootAction>) => {
  setTimeout(() => dispatch(decrease()), 2000);
};

const initialState = {
  number: 0,
  diff: 1,
};

export type CounterAction =
  | ReturnType<typeof setDiff>
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>;

export default function counter(state = initialState, action: CounterAction) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
