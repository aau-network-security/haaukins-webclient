import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    loading: false,
    users: [],
    loggedInUser: null,
    loggedIn: true,
    error: ''
}

// Get users api request
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return apiClient.get('users')
    .then((response) => response.json())
})

// Login api request
export const loginUser = createAsyncThunk('user/loginUser', (reqData) => {
    return apiClient.post('users/login', reqData)
    .then(
        (response) => response.data
    )
})

// Token validation api request
export const getLoggedInUser = createAsyncThunk('user/validateToken', () => {
    let token = localStorage.getItem('token')
    const decoded = JSON.parse(atob(token.split('.')[1]));
    let endpoint = "users/" + decoded.sub
    
    return apiClient.get(endpoint)
    .then(
        (response) => response.data
    )
})

// export const validateToken = createAsyncThunk('user/validateToken', 
//     async (arg, { rejectWithValue }) => {
//     try {
//         const { data } = await apiClient.get('users/token/validate')
//         return data
//     }
//     catch (error) {
//         if (error.response && error.response.data.message) {
//             return rejectWithValue(error.response.data.message)
//         } else {
//             return rejectWithValue(error.message)
//         }
//     }
// })

const userSlice = createSlice({
    name: 'challenge',
    initialState,
    reducers: {
        // Logs out a user
        logoutUser: (state) => {
            state.loggedIn = false
            state.loggedInUser = null
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        // fetchUsers
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error
        })
        // Login
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false
            state.loggedIn = true
            state.loggedInUser = action.payload.user
            localStorage.setItem('token', action.payload.token)
            state.error = ''
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.loggedIn = false
            state.error = action.error
        })

        // validateToken
        builder.addCase(getLoggedInUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
            state.loading = false
            state.loggedIn = true
            state.loggedInUser = action.payload.user
            state.error = ''
        })
        builder.addCase(getLoggedInUser.rejected, (state, action) => {
            state.loading = false
            state.loggedIn = false
            state.error = ''
        })

    }
})

export default userSlice.reducer
export const { logoutUser } = userSlice.actions

