import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdIndeterminateCheckBox,
  MdCheckBox,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdIndeterminateCheckBox />
      </div>
    </div>
  );
};

export default TodoListItem;
