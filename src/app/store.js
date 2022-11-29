import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import challengeReducer from '../features/challenges/challengeSlice'
import orgReducer from '../features/organizations/organizationSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        challenge: challengeReducer,
        org: orgReducer
    }
})

export default store