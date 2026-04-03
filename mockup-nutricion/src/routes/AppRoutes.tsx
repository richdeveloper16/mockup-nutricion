import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../modules/auth/page/Login';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default AppRoutes;