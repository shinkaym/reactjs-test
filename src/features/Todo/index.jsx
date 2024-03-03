import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

ToDoFeature.propTypes = {
  
};

function ToDoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'active'
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'active'
    },
    {
      id: 3,
      title: 'Code',
      status: 'not active'
    }
  ]
  return (
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default ToDoFeature;