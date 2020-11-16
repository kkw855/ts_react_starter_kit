import { AnyAction, Dispatch, MiddlewareAPI, Middleware } from 'redux';
import { RootAction, RootState } from '../index';

const myLogger = (state: MiddlewareAPI) => (next: Dispatch<RootAction>) => (
  action: RootAction,
) => {
  console.log(action);
  const result = next(action);
  return result;
};

export default myLogger;
