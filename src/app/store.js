import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import challengeReducer from '../features/challenges/challengeSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        challenge: challengeReducer
    }
})

export default store