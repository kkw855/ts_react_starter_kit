import { hot } from 'react-hot-loader/root';
import React, { ReactElement } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import TodoApp from './TodoListApp/TodoApp';
import ImmerApp from './Immer/ImmerApp';
import NewsList from './News/NewsList';

function App(): ReactElement {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/" exact>
            홈
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/todo">
            할 일 목록
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/immer">
            immer 예제
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/news">
            News 예제
          </NavLink>
        </li>
      </ul>
      <Switch>
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
