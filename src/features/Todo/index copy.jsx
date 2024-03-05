import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/" element={<DetailPage />} />
            </Routes>
        </div>
    );
}

export default TodoFeature;
