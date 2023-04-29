import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    status: "",
    teams: [],
    error: "",
    statusCode: "",
}
export const fetchEventTeams = createAsyncThunk('team/fetchEventTeams', async (req, {rejectWithValue}) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        var endpoint = 'teams/' + req.eventTag
        const response = await apiClient.get(endpoint)
        if (typeof response.data.teams === "undefined") {
            response.data.teams = []
        }
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

const teamSlice = createSlice({
    name: 'team',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchEventTeams.pending, (state) => {
            state.status = "fetching"
        })
        builder.addCase(fetchEventTeams.fulfilled, (state, action) => {
            state.status = "idle"
            state.teams = action.payload.teams
            state.error = ''
        })
        builder.addCase(fetchEventTeams.rejected, (state, action) => {
            state.status = "idle"
            state.teams = []
            state.error = action.payload.data.status
            state.statusCode = action.payload.status
        })
    }
})

export default teamSlice.reducer