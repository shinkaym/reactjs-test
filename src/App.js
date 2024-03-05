import { Link, NavLink, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import TodoFeature from './features/Todo';
import { useEffect } from 'react';
import productApi from './api/productApi';
import CounterFeature from './features/Counter';

const classNameFunc = ({ isActive }) => (isActive ? 'active-menu' : '');

function App() {
    useEffect(() => {
        const params = {
            _limit: 10,
        };

        const fetchProducts = async () => {
            const productList = await productApi.getAll(params);
            // console.log(productList)
        };

        fetchProducts();
    }, []);

    return (
        <div className="App">
            Header
            <p>
                <NavLink to="/" className={classNameFunc}>
                    /
                </NavLink>
            </p>
            <p>
                <NavLink to="/todos" className={classNameFunc}>
                    Todos
                </NavLink>
            </p>
            <Routes>
                {/* <Route path="/todos/:id" element={<Navigate replace to="/todos" />} /> */}
                <Route path="/todos/*" element={<TodoFeature />} />
                <Route path="/" element={<CounterFeature />} />
            </Routes>
            Footer
        </div>
    );
}

export default App;
