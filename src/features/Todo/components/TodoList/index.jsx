import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'

TodoList.propTypes = {
  todoList: PropTypes.array
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList({todoList}) {
  return (
    <ul className='todo-list'>
      {todoList.map(todo => (
        <li key={todo.id} className={classNames({active: todo.status === 'active'})}>{todo.title}</li>
        ))}
    </ul>
  );
}

export default TodoList;