import React from 'react';

const Header = (props) => {
  const allCompleted = props.todos.every(todo => todo.complete);
  return (
    <header id="header">
      <h2>Do it!</h2>
      <p>
        <label>
          <input
            checked={allCompleted}
            id={'toggle-all'}
            type={'checkbox'}
            onChange={props.onToggleAllTodos}
          />
          <span>Set all completed</span>
        </label>
      </p>
    </header>
  )
};

export default Header;
