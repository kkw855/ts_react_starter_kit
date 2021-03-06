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
import Links from './Components/Dropdown/Links';
import Tables from './Components/Dropdown/Tables';
import TopNavBar from './ExComponents/Nav/TopNavBar';
import Tweet from './Pages/Layout/Tweet';
import BarChart from './d3/BarChart';
import Treemap from './d3/Treemap';
import ModalPage1 from './Pages/Modal/ModalPage1';
import TransitionPage1 from './Pages/Transition/TransitionPage1';
import React_Table1_Page from './Pages/Table/React_Table1_Page';
import Flex1 from './Pages/Layout/Flex1';
import SlatePlainText from './RichTextEditor/SlatePlainText';

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
    <Switch>
      <Route path="/flex1" component={Flex1} />
      <Route path="/table1" component={React_Table1_Page} />
      <Route path="/transition1" component={TransitionPage1} />
      <Route path="/modal1" component={ModalPage1} />
      <Route path="/barChart" component={BarChart} />
      <Route path="/treemap" component={Treemap} />
      <Route path="/tweet" component={Tweet} />

      <Route path="/topNav" component={TopNavBar} />
      <Route path="/links" component={Links} />
      <Route path="/tables" component={Tables} />
      <Route path="/plain2" component={SlatePlainText} />
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
  );
}

export default hot(App);
