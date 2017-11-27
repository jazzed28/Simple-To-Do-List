import React from 'react';
import Todo from './todo';

const TodoList = ({todos, remove}) => {
  let allTodos = [];

  if(todos.length > 0) {
    allTodos = todos.map(todo => {
      return (<Todo todo={todo} key={todo.id} remove={remove} />);
    });
  } else {
    allTodos.push(<li className="list-group-item">All caught up!</li>);
  }

  const classes2 = `alert alert-secondary`;
  return (
    <div>
      <div className={classes2} role="alert">
        Your todos:
      </div>
      <ul className="list-group">
        {allTodos}
      </ul>
    </div>
  );
}

export default TodoList;
