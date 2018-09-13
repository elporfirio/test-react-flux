import React from 'react';

const Footer = (props) => {
  if(props.todos.size === 0){
    return null;
  }
  const remaining = props.todos.filter(todo => !todo.complete).size;
  const phrase = remaining === 1 ? ' item left' : ' items left';
  const completed = props.todos.size - remaining;

  let clearCompletedButton = null;
  if (completed > 0) {
    clearCompletedButton =
      <button
        id="clear-completed"
        onClick={props.onDeleteCompletedTodos}>
        Clear completed ({completed})
      </button>
  }

  return (
    <footer id="footer">
      <span id={'todo-count'}>
        <strong>{ remaining }</strong> {phrase}
      </span>
      {clearCompletedButton}
    </footer>
  );
};

export default Footer;
