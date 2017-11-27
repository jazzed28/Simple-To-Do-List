import React from 'react';

const Todo = ({todo, remove}) => {

  return (
    <li className="list-group-item">
      {todo.value}
      <span
        className="removeBtn"
        onClick={() => {
          remove(todo.id)
        }}> x </span>
    </li>
  );
}

export default Todo;
