import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
  faWindowClose,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

const Basic1 = styled.div`
  .dropdown {
    display: inline-block;
    position: relative;
  }

  .dropdown-btn {
    cursor: pointer;
    border: none;
    background-color: #556ee6;
    color: rgba(255, 255, 255, 0.6);
    padding: 16px;
    &:hover {
      color: #fff;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    min-width: 160px;
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown-content a {
    text-decoration: none;
    display: block;
    padding: 12px 16px;
    color: #000;
    &:hover {
      color: #556ee6;
      background-color: #f9f9f9;
    }
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .btn {
    border: none;
    color: RoyalBlue;
    background-color: #fff;
    cursor: pointer;
    padding: 12px 16px;
    font-size: 16px;
    &:hover {
      color: #fff;
      background-color: RoyalBlue;
    }
  }

  .btn-round {
    border-radius: 50%;
  }
`;

const BasicDropdown = () => {
  return (
    <Basic1>
      <div className="dropdown">
        <button className="dropdown-btn">Dropdown</button>
        <nav className="dropdown-content">
          <Link to="https://www.google.com.au">Link 1</Link>
          <Link to="https://www.daum.net">Link 2</Link>
          <Link to="https://www.naver.com">Link 3</Link>
        </nav>
      </div>
      <div>
        <span>Overlay it by dropdown content</span>
      </div>
      <button className="btn">
        <FontAwesomeIcon icon={faWindowClose} />
      </button>
      <button className="btn" style={{ marginLeft: 4 }}>
        <FontAwesomeIcon icon={faWindowClose} /> 닫기
      </button>
      <button className="btn btn-round" style={{ marginLeft: 4 }}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button className="btn" style={{ marginLeft: 4 }}>
        <FontAwesomeIcon icon={faExclamationCircle} />
      </button>
    </Basic1>
  );
};

export default BasicDropdown;
