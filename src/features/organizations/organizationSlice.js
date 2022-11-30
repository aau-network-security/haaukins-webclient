import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    loading: 'idle',
    organizations: [],
    error: ''
}

export const fetchOrgs = createAsyncThunk('org/fetchOrgs', () => {
    apiClient.defaults.headers.Authorization = localStorage.getItem('token')
    return apiClient.get('orgs')
    .then((response) => response.data)
})

const orgSlice = createSlice({
    name: 'org',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchOrgs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchOrgs.fulfilled, (state, action) => {
            state.loading = false
            state.organizations = action.payload.orgs
            state.error = ''
        })
        builder.addCase(fetchOrgs.rejected, (state, action) => {
            state.loading = false
            state.organizations = []
            state.error = action.error.message;
        })
    }
})

export default orgSlice.reducer