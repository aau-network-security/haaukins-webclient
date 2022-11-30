import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import Users from './pages/UsersPage'
import LoginPage from './pages/LoginPage'
import OrganizationsPage from './pages/OrganizationsPage'
import { useSelector, useDispatch } from "react-redux";
import { getLoggedInUser } from "./features/user/userSlice";
import PlatformSettingsPage from './pages/PlatformSettingsPage'
import ProfilePage from './pages/ProfilePage'
import AgentsPage from './pages/AgentsPage'
import ChallengesPage from './pages/ChallengesPage'
import Sidebar from './components/sidebar/Sidebar'
import { Flex } from '@chakra-ui/react'

function AppRouter() {
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch()

    // Whenever a route is reaquested, the users JWT is validated in the api.
    // If validation fails, loggedIn will be set to false and the user will be redirected to the login page
    useEffect(() => {
        dispatch(getLoggedInUser())
    }, [dispatch]) 

    const AuthWrapper = () => {        
        return !loggedIn
          ? <Navigate to="/login" replace />
          : <Outlet />;
      };
    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route element= {
                    <>
                        <Flex w="100%">
                            <Sidebar/>
                            <Flex w="100%">
                                <Outlet/>
                            </Flex>
                        </Flex>
                    </>
                }>
                    <Route element={<AuthWrapper />}>
                        
                            <Route path="" element={<HomePage />} />
                            <Route path="users" element={<Users />} />
                            <Route path="events" element={<EventsPage />} />
                            <Route path="organizations" element={<OrganizationsPage />} />
                            <Route path="settings" element={<PlatformSettingsPage />} />
                            <Route path="profile" element={<ProfilePage />} />
                            <Route path="agents" element={<AgentsPage />} />
                            <Route path="challenges" element={<ChallengesPage />} />
                        </Route>                        
                    </Route>  
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
