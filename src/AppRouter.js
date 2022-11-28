import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/home';
import Events from './pages/events';
import Users from './pages/users';
import Login from './pages/login';

function AppRouter() {
    const isExpired = (token) => {
        if (token === null) {
            return true
        }
        const decoded = JSON.parse(atob(token.split('.')[1]));
        if (decoded.exp * 1000 < new Date().getTime()) {
            return true
        }
        return false 
    }
    const AuthWrapper = () => {
        return isExpired(localStorage.getItem('token'))
          ? <Navigate to="/login" replace />
          : <Outlet />;
      };
    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route element={<AuthWrapper />}>
                    <Route path="" element={<Home />} />
                    <Route path="users" element={<Users />} />
                    <Route path="events" element={<Events />} />
                </Route>  
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
