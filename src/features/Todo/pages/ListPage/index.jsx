import React, { useEffect, useMemo, useState } from 'react';
import TodoList from '../../components/TodoList';
import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'active',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'active',
        },
        {
            id: 3,
            title: 'Code',
            status: 'inactive',
        },
    ];

    const location = useLocation();
    const navigate = useNavigate();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setfilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);

        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setfilteredStatus(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status:
                newTodoList[idx].status === 'active' ? 'inactive' : 'active',
        };
        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        // setfilteredStatus('all')

        const queryParams = { status: 'all' };
        navigate({ search: queryString.stringify(queryParams) });
    };

    const handleShowActiveClick = () => {
        // setfilteredStatus('active')

        const queryParams = { status: 'active' };
        navigate({ search: queryString.stringify(queryParams) });
    };

    const handleShowInactiveClick = () => {
        // setfilteredStatus('inactive')

        const queryParams = { status: 'inactive' };
        navigate({ search: queryString.stringify(queryParams) });
    };

    const renderedTodoList = useMemo(() => {
        return todoList.filter(
            (todo) =>
                filteredStatus === 'all' || filteredStatus === todo.status,
        );
    }, [todoList, filteredStatus]);

    const handleTodoFormSubmit = (values) => {
        console.log(values);
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'active',
        };

        setTodoList([...todoList, newTodo]);
    };

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3>TodoList</h3>
            <TodoList
                todoList={renderedTodoList}
                onTodoClick={handleTodoClick}
            />

            <div>
                <button onClick={handleShowAllClick}>Show all</button>
                <button onClick={handleShowActiveClick}>Show Active</button>
                <button onClick={handleShowInactiveClick}>Show Inactive</button>
            </div>
        </div>
    );
}

export default ListPage;
