import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    loading: false,
    categories: [],
    allChallenges: [],
    error: ''
}
// TODO: change to async like other reducers
export const fetchChallenges = createAsyncThunk('challenge/fetchChallenges', () => {
    return apiClient.get('challenges')
    .then((response) => response.json())
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