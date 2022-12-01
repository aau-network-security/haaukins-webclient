import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/userSlice'
import challengeReducer from '../features/challenges/challengeSlice'
import orgReducer from '../features/organizations/organizationSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        challenge: challengeReducer,
        org: orgReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: {ignoredActionPaths: ['payload.config', 'payload.request']}}),
})

export default store