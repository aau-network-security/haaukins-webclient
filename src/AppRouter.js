import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import Users from './pages/UsersPage'
import LoginPage from './pages/LoginPage'
import OrganizationsPage from './pages/OrganizationsPage'
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "./features/users/userSlice";
import PlatformSettingsPage from './pages/PlatformSettingsPage'
import ProfilePage from './pages/ProfilePage'
import AgentsPage from './pages/AgentsPage'
import ChallengesPage from './pages/ChallengesPage'
import Sidebar from './components/sidebar/Sidebar'
import { Flex } from '@chakra-ui/react'
import { BASE_URL } from './api/client'
import { useFetch } from 'react-async'
import { Buffer } from 'buffer'
import NewEventPage from './pages/NewEventPage'
function AppRouter() {
    const dispatch = useDispatch()

    const getUsernameFromToken = (token) => {
        try {            
            let tokenPayload = token.split('.')[1]         
            
            const decoded = JSON.parse(Buffer.from(tokenPayload, 'base64'))
            return decoded.sub
        }
        catch (error) {
            return
        }
    }

    const AuthWrapper = () => {    
        let token = localStorage.getItem('token')
        // Thunk will return error if it cannot pass the value as json
        let user = getUsernameFromToken(token)
        let endpoint = "users/" + user

        const { data, error } = useFetch(BASE_URL + endpoint, {
            headers: {
                Authorization: token
            }
        })
        if (error) {
            return <Navigate to="/login" replace />
        }
        if (data) {
            data.json().then(data => {
                dispatch(setLoggedInUser(data))
            })
            return <Outlet />
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route element= {
                    <>
                        <Flex w="100vw" height='100%'>
                            <Sidebar/>
                            <Flex 
                                w="100%" 
                                height="100vh" 
                                overflowX={"auto"}
                                id="page-container"
                                padding="100px 50px 100px 50px"
                            >
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
                            <Route path="events/new" element={<NewEventPage />} />
                        </Route>                        
                    </Route>  
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;
