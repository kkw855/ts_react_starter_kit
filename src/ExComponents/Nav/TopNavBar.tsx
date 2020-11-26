import React from 'react';
import styled from 'styled-components';
import Smile from '../../../assets/images/smiley.gif';

const NavBarBlock = styled.div``;

const TopNavBar: React.FC = () => {
  return (
    <NavBarBlock>
      <img
        src={Smile}
        style={{ float: 'left' }}
        width="200px"
        height="200px"
        alt="smile"
      />
      <img
        src={Smile}
        style={{ float: 'left' }}
        width="200px"
        height="200px"
        alt="smile"
      />

      <nav role="full-horizontal">
        <ul>
          <li>
            <a href="#">Stream</a>
          </li>
          <li>
            <a href="#">Lab</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </NavBarBlock>
  );
};

export default TopNavBar;
