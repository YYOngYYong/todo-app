import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdIndeterminateCheckBox,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할일</div>
      </div>
      <div className="remove">
        <MdIndeterminateCheckBox />
      </div>
    </div>
  );
};

export default TodoListItem;
