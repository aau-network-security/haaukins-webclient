import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/userSlice'
import challengeReducer from '../features/challenges/challengeSlice'
import orgReducer from '../features/organizations/organizationSlice'
import agentReducer from '../features/agents/agentSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        challenge: challengeReducer,
        org: orgReducer,
        agent: agentReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: {ignoredActionPaths: ['payload.config', 'payload.request']}}),
})

export default store