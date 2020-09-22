import React, { ReactElement } from 'react';
import './TodoListItem.scss';
import cn from 'classnames';

import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/all';
import { TodoEventHandler, TodoListItemData } from '../TodoApp';

function TodoListItem({
  todo,
  onRemove,
  onToggle,
  style,
}: {
  todo: TodoListItemData;
  onRemove: TodoEventHandler;
  onToggle: TodoEventHandler;
  style: React.CSSProperties;
}): ReactElement {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
}

export default React.memo(TodoListItem);
