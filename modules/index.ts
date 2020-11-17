import { combineReducers } from 'redux';
import counter, { CounterAction } from './counter';
import todos, { TodoAction } from './todos';
import { PostAction } from './posts';

const rootReducer = combineReducers({ counter, todos });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export type RootAction = CounterAction | TodoAction | PostAction;
