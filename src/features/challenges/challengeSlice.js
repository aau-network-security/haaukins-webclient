import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    loading: false,
    categories: [],
    allChallenges: [],
    error: ''
}
// TODO: change to async like other reducers
export const fetchChallenges = createAsyncThunk('challenge/fetchChallenges', async (obj, {rejectWithValue}) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.get('challenges')
        return response.data
    }
    catch (err) {
        if (!err.response) {
            throw err
        }
        let error = { axiosMessage: err.message, axiosCode: err.code, apiError: err.response.data, apiStatusCode: err.response.status}
        return rejectWithValue(error)
    }
})

const challengeSlice = createSlice({
    name: 'challenge',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchChallenges.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchChallenges.fulfilled, (state, action) => {
            state.loading = false
            state.categories = action.payload
            state.allChallenges = []
            state.error = ''
        })
        builder.addCase(fetchChallenges.rejected, (state, action) => {
            state.loading = false
            state.categories = []
            state.allChallenges = []
            state.error = action.payload.data.status
            state.statusCode = action.payload.status
        })
    }
})

export default challengeSlice.reducer