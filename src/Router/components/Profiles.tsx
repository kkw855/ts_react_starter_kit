import React, { ReactElement } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

function Profiles(): ReactElement {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };

  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/router/profiles/velopert">
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/router/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>
      <Route
        path="/router/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/router/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
