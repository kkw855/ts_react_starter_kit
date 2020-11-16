import React from 'react';
import { Todo } from '../../../modules/todos';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
};

const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  return (
    <li
      key={todo.id}
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
};

const TodoList = ({}) => {};
