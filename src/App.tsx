import { hot } from 'react-hot-loader/root';
import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import TodoApp from './TodoListApp/TodoApp';
import ImmerApp from './Immer/ImmerApp';
import NewsList from './News/NewsList';
import CounterContainer from './Counter/CounterContainer';
import DraftPlainText from './RichTextEditor/DraftPlainText';
import DraftRich from './RichTextEditor/DraftRich';

// Reset Default HTML CSS
import 'normalize.css/normalize.css';
import Links from './Pages/Links';
import Tables from './Pages/Tables';
import TopNavBar from './ExComponents/Nav/TopNavBar';
import BasicDropdownPage from './Pages/Dropdown/BasicDropdownPage';

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

// 날짜
const date = parseISO('2020-11-20T00:57:15.103');
const str = format(date, 'yyyy-MM-dd');
console.log(date);
console.log(str);

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
      {/*{reactionButtons}*/}
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
        <Route path="/dropdown" component={BasicDropdownPage} />
        <Route path="/links" component={Links} />
        <Route path="/tables" component={Tables} />
        <Route path="/plain" component={DraftPlainText} />
        <Route path="/rich" component={DraftRich} />
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
