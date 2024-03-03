import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

ToDoFeature.propTypes = {
  
};

function ToDoFeature(props) {
  const initTodoList = [
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

  const [todoList, setTodoList] = useState(initTodoList)

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList]
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'active' ? 'not active' : 'active'
    }
    setTodoList(newTodoList)
  }
  
  return (
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default ToDoFeature;