import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    loading: 'idle',
    agents: {},
    statusCode: 200,
    error: {}
}

export const fetchAgents = createAsyncThunk('agent/fetchAgents', async (obj, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.get('agents')
        for (const agent in response.data.agents) {
            response.data.agents[agent].loading = false
        }
        if (typeof response.data.agents === "undefined") {
            response.data.agents = {}
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

export const deleteAgent = createAsyncThunk('agent/deleteAgent', async (agent, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.delete('agents', agent)
        
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

export const reconnectAgent = createAsyncThunk('agent/reconnectAgent', async (agentObj, { rejectWithValue, getState }) => {
    try {
        const { agent: {agents} } = getState()
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.get('agents/reconnect/'+agentObj.name)
        
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

const agentSlice = createSlice({
    name: 'agent',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAgents.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchAgents.fulfilled, (state, action) => {
            state.loading = false
            state.agents = action.payload.agents
            state.error = ''
        })
        builder.addCase(fetchAgents.rejected, (state, action) => {
            state.loading = false
            state.agents = {}
            state.error = action.payload
        })

        // Reconnect
        builder.addCase(reconnectAgent.pending, (state, action) => {
            state.agents[action.meta.arg.id].loading = true
            console.log(action)
        })
        builder.addCase(reconnectAgent.fulfilled, (state, action) => {
            console.log("agent to update", action.payload.agent)
            state.agents[action.meta.arg.id].loading = false
            state.agents[action.meta.arg.id].connected = true
            state.error = ''
        })
        builder.addCase(reconnectAgent.rejected, (state, action) => {
            state.agents[action.meta.arg.id].loading = false
            state.agents[action.meta.arg.id].connected = false
            state.error = action.payload
        })

        // Delete

    }
})

export default agentSlice.reducer