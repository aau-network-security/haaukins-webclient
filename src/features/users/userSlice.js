import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    loading: false,
    users: [],
    loggedInUser: {},
    loggedIn: false,
    statusCode: 200,
    error: ''
}

// Get users api request
export const fetchUsers = createAsyncThunk('user/fetchUsers', async(obj, {rejectWithValue}) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.get('users')
        return response.data
    }
    catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response)
    }
})

// Login api request
export const loginUser = createAsyncThunk('user/loginUser', async (reqData, { rejectWithValue }) => {
    try {
        const response = await apiClient.post('users/login', reqData)
        return response.data
    }
    catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response)
    }
})

// Token validation api request
// export const getLoggedInUser = createAsyncThunk('user/getLoggedInUser', () => {
//     let token = localStorage.getItem('token')
//     // Thunk will return error if it cannot pass the value as json
//     let tokenPayload = token.split('.')[1]
//     const decoded = JSON.parse(Buffer.from(tokenPayload, 'base64'));
//     let endpoint = "users/" + decoded.sub
    
//     apiClient.defaults.headers.Authorization = localStorage.getItem('token')
//     return apiClient.get(endpoint)
//     .then(
//         (response) => response.data
//     )
// })

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
    name: 'user',
    initialState,
    reducers: {
        // Logs out a user
        logoutUser: (state) => {
            state.loggedIn = false
            state.loggedInUser = null
            localStorage.removeItem('token');
        },
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload.user
            state.loggedIn = true
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
            state.error = action.payload.data.status
            state.statusCode = action.payload.status
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
            state.error = action.payload.data.status
            state.statusCode = action.payload.status
        })

        // validateToken
        // builder.addCase(getLoggedInUser.pending, (state) => {
        //     state.loading = true
        // })
        // builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
        //     state.loading = false
        //     state.loggedIn = true
        //     state.loggedInUser = action.payload.user
        //     state.error = ''
        // })
        // builder.addCase(getLoggedInUser.rejected, (state, action) => {
        //     state.loading = false
        //     state.loggedIn = false
        //     localStorage.removeItem('token')
        //     state.error = ''
        // })

    }
})

export default userSlice.reducer
export const { logoutUser, setLoggedInUser } = userSlice.actions

