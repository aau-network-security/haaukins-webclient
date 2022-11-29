import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './pages/home'
import EventsPage from './pages/events'
import Users from './pages/users'
import Login from './pages/login'
import { useSelector, useDispatch } from "react-redux";
import { validateToken } from "./features/user/userSlice";

function AppRouter() {
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token') !== '') {
            dispatch(validateToken())
        }
    }, [dispatch]) 

    const AuthWrapper = () => {        
        return !loggedIn
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
                    <Route path="events" element={<EventsPage />} />
                </Route>  
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
