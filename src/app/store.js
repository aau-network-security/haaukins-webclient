import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/userSlice'
import exerciseReducer from '../features/exercises/exerciseSlice'
import orgReducer from '../features/organizations/organizationSlice'
import agentReducer from '../features/agents/agentSlice'
import eventReducer from '../features/events/eventSlice'
import teamReducer from '../features/teams/teamSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        exercise: exerciseReducer,
        org: orgReducer,
        agent: agentReducer,
        event: eventReducer,
        team: teamReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: {ignoredActionPaths: ['payload.config', 'payload.request']}}),
})

export default store