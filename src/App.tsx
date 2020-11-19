import { hot } from 'react-hot-loader/root';
import React, { ReactElement } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import TodoApp from './TodoListApp/TodoApp';
import ImmerApp from './Immer/ImmerApp';
import NewsList from './News/NewsList';
import { createStore } from 'redux';
import rootReducer from '../modules';
import { decrease, increase } from '../modules/counter';
import { addTodo, toggleTodo } from '../modules/todos';
import CounterContainer from './components/Counter/CounterContainer';

// const initialState = {
//   counter: 0,
//   text: '',
//   list: [] as { id: number; text: string }[],
// };
//
// const INCREASE = 'INCREASE' as const;
// const DECREASE = 'DECREASE' as const;
// const CHANGE_TEXT = 'CHANGE_TEXT' as const;
// const ADD_TO_LIST = 'ADD_TO_LIST' as const;
//
// const increase = () => ({
//   type: INCREASE,
// });
//
// const decrease = () => ({
//   type: DECREASE,
// });
//
// const changeText = (text: string) => ({
//   type: CHANGE_TEXT,
//   text,
// });
//
// const addToList = (item: { id: number; text: string }) => ({
//   type: ADD_TO_LIST,
//   item,
// });
//
// type ActionType =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof changeText>
//   | ReturnType<typeof addToList>;
//
// const reducer = (state = initialState, action: ActionType) => {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case DECREASE:
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case CHANGE_TEXT:
//       return {
//         ...state,
//         text: action.text,
//       };
//     case ADD_TO_LIST:
//       return {
//         ...state,
//         list: state.list.concat(action.item),
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);
//
// console.log(store);

// store.subscribe(() => {
//   const state = store.getState();
//   console.log(state);
// });
//
// store.dispatch(increase());
// store.dispatch(decrease());
// store.dispatch(changeText('안녕하세요'));
// store.dispatch(addToList({ id: 1, text: '와우' }));

// const store = createStore(rootReducer);
//
// store.subscribe(() => {
//   const state = store.getState();
//   console.log(state);
// });
//
// store.dispatch(increase());
// store.dispatch(decrease());
// store.dispatch(addTodo('와우'));
// store.dispatch(toggleTodo(1));

// development or production
console.log(process.env.NODE_ENV);

// undefined, null 는 항상 false
const undef = undefined;
const nullable = null;

if (undef) {
  console.log('undefined === true');
} else {
  console.log('undefined === false');
}
if (nullable) {
  console.log('nullable === true');
} else {
  console.log('nullable === false');
}
undef ? console.log('undefined === true') : console.log('undefined === false');
nullable ? console.log('nullable === true') : console.log('nullable === false');

// 문자열 길이 0 은 false 1 이상은 true
const zero = '';
if (zero) {
  console.log('zero === true');
} else {
  console.log('zero === false');
}

// 객체 key, value pair 를 동적으로 사용
const reactionEmoji = {
  thumbsUp: '👍',
  rocket: '🚀',
};

const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
  return (
    <button key={name}>
      {name} {emoji}
    </button>
  );
});

function increaseAndPrint(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .then((n) => {
    return increaseAndPrint(n);
  })
  .catch((e) => {
    console.error(e);
  });

function App(): ReactElement {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };

  return (
    <div>
      {reactionButtons}
      {/*<ul>*/}
      {/*  <li>*/}
      {/*    <NavLink activeStyle={activeStyle} to="/" exact>*/}
      {/*      홈*/}
      {/*    </NavLink>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <NavLink activeStyle={activeStyle} to="/todo">*/}
      {/*      할 일 목록*/}
      {/*    </NavLink>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <NavLink activeStyle={activeStyle} to="/immer">*/}
      {/*      immer 예제*/}
      {/*    </NavLink>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <NavLink activeStyle={activeStyle} to="/news">*/}
      {/*      News 예제*/}
      {/*    </NavLink>*/}
      {/*  </li>*/}
      {/*</ul>*/}
      <Switch>
        <Route path="/todos" component={CounterContainer} />
        <Route path="/todo" component={TodoApp} />
        <Route path="/immer" component={ImmerApp} />
        <Route path="/news/:category?" component={NewsList} />
        <Route
          // path 를 따로 정의하지 않으면 모든 상황에 렌더링 됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default hot(App);
