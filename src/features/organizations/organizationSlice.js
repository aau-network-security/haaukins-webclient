import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    loading: 'idle',
    organizations: [],
    statusCode: 200,
    error: ''
}

export const fetchOrgs = createAsyncThunk('org/fetchOrgs', async (req, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.get('orgs')
        return response.data
    }
    catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response)
    }
})

const orgSlice = createSlice({
    name: 'org',
    initialState,
    reducers: {
        resetOrgState: (state) => {
            state.loading = 'idle'
            state.organizations = []
            state.statusCode = 200
            state.error = ''
        }
    },
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
            state.error = action.payload.data.status;
            state.statusCode = action.payload.status
        })
    }
})

export default orgSlice.reducer
export const { resetOrgState } = orgSlice.actions