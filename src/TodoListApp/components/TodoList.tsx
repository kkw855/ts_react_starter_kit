import React, { ReactElement, useCallback } from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
import { TodoEventHandler, TodoListItemData } from '../TodoApp';
import { List } from 'react-virtualized';

function TodoList({
  todos,
  onRemove,
  onToggle,
}: {
  todos: TodoListItemData[];
  onRemove: TodoEventHandler;
  onToggle: TodoEventHandler;
}): ReactElement {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 항목 높이
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // List 에 기본 적용되는 outline 스타일 제거
    />
  );
}

export default React.memo(TodoList);
