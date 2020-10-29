import React, { ReactElement } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profiles from './components/Profiles';

function RouterApp(): ReactElement {
  return (
    <div>
      <ul>
        <li>
          <Link to="/router">홈</Link>
        </li>
        <li>
          <Link to="/router/about">소개</Link>
        </li>
        <li>
          <Link to="/router/info?detail=true">소개</Link>
        </li>
        <li>
          <Link to="/router/profiles">프로필</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/router" component={Home} exact={true} />
        <Route path={['/router/about', '/router/info']} component={About} />
        <Route path="/router/profiles" component={Profiles} />
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

export default RouterApp;
