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
      status: 'inactive'
    }
  ]

  const [todoList, setTodoList] = useState(initTodoList)
  const [filteredStatus, setfilteredStatus] = useState('all')

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList]
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'active' ? 'inactive' : 'active'
    }
    setTodoList(newTodoList)
  }

  const handleShowAllClick = () => {
    setfilteredStatus('all')
  }

  const handleShowActiveClick = () => {
    setfilteredStatus('active')
  }

  const handleShowInactiveClick = () => {
    setfilteredStatus('inactive')
  }

  const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
  
  return (
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/>

      <div>
        <button onClick={handleShowAllClick}>Show all</button>
        <button onClick={handleShowActiveClick}>Show Active</button>
        <button onClick={handleShowInactiveClick}>Show Inactive</button>
      </div>
    </div>
  );
}

export default ToDoFeature;