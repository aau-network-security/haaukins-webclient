import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    loading: false,
    users: [],
    loggedIn: false,
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return apiClient.get('users')
    .then((response) => response.json())
})

export const loginUser = createAsyncThunk('user/loginUser', (reqData) => {
    console.log("trying to login user", reqData)
    return apiClient.post('users/login', reqData)
    .then(
        (response) => response.data
    )
})

// export const validateToken = createAsyncThunk('user/validateToken', () => {
//     return apiClient.get("users/token/validate")
//     .then(
//         (response) => response.data
//     )
// })

export const validateToken = createAsyncThunk('user/validateToken', 
    async (arg, { rejectWithValue }) => {
    try {
        const { data } = await apiClient.get('users/token/validate')
        return data
    }
    catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

const userSlice = createSlice({
    name: 'challenge',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.loggedIn = false
            state.token = ''
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
            localStorage.setItem('token', action.payload.token)
            state.error = ''
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.loggedIn = false
            state.error = action.error
        })

        // validateToken
        builder.addCase(validateToken.pending, (state) => {
            state.loading = true
        })
        builder.addCase(validateToken.fulfilled, (state, action) => {
            state.loading = false
            state.loggedIn = true
            state.error = ''
        })
        builder.addCase(validateToken.rejected, (state, action) => {
            state.loading = false
            state.loggedIn = false
            state.error = ''
        })

    }
})

export default userSlice.reducer
export const { logoutUser } = userSlice.actions

