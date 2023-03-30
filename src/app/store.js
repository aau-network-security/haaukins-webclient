import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/userSlice'
import challengeReducer from '../features/challenges/challengeSlice'
import orgReducer from '../features/organizations/organizationSlice'
import agentReducer from '../features/agents/agentSlice'
import eventReducer from '../features/events/eventSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        challenge: challengeReducer,
        org: orgReducer,
        agent: agentReducer,
        event: eventReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: {ignoredActionPaths: ['payload.config', 'payload.request']}}),
})

export default store