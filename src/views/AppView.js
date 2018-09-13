import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const AppView = (props) => {
  return (
    <div>
      <Header {...props} />
      <AddTaskForm {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
};

const AddTaskForm = (props) => {
  const addTodo = (event) => {
    event.preventDefault();
    props.onSubmitNewDraft(props.draft);
  };
  const onChange = (event) => props.onChangeNewDraft(event.target.value);
  return (

      <form onSubmit={addTodo}>
          <input
            onChange={onChange}
            value={props.draft}
          />
          <button> + </button>
      </form>
  );
};

const Main = (props) => {
  if (props.todos.size === 0) {
    return null;
  }
  return (
    <section id={'main'}>
      <ul id={'todo-list'}>
        {[...props.todos.values()].reverse().map(todo => {
          return <li key={todo.id}>
            <div className={'view'}>
              <label>
              <input
                className={'toggle'}
                type={'checkbox'}
                checked={todo.complete}
                onChange={() => props.onToggleTodo(todo.id)}
              />
                <span>{todo.text}</span>
              </label>
              <button
                className={'destroy'}
                onClick={() => props.onDeleteTodo(todo.id)}>R</button>
            </div>
          </li>;
        })}
      </ul>
    </section>
  );
};

export default AppView;
