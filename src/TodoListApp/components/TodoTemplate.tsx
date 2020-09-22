import React from 'react';
import './index.css';
import './TodoTemplate.scss';

const TodoTemplate: React.FC = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;