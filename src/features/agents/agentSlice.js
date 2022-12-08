import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    loading: 'idle',
    agents: {},
    selectedAgent: null,
    statusCode: 200,
    error: {}
}

// Fetches all agents from the database and receives their general status (Connected, statelock etc...)
export const fetchAgents = createAsyncThunk('agent/fetchAgents', async (obj, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.get('agents')
        // Populate some extra variables into the agents array
        for (const agent in response.data.agents) {
            response.data.agents[agent].loading = false
            response.data.agents[agent].cpu = 0
            response.data.agents[agent].memory = 0
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

// Deletes an agent by name
export const deleteAgent = createAsyncThunk('agent/deleteAgent', async (agent, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        console.log("deleting agent: ", agent)
        const response = await apiClient.delete('agents/' + agent.name)
        
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

// Tells the demon to reconnect, object holds agent array index to update the connected state of a specific agent
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
    reducers: {
        selectAgent: (state, action) => {
            state.selectedAgent = action.payload
        }
    },
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
            state.selectedAgent = null
            console.log(action)
        })
        builder.addCase(reconnectAgent.fulfilled, (state, action) => {
            state.agents[action.meta.arg.id].loading = false
            state.agents[action.meta.arg.id].connected = true
            //state.selectedAgent = null
            state.error = ''
        })
        builder.addCase(reconnectAgent.rejected, (state, action) => {
            state.agents[action.meta.arg.id].loading = false
            state.agents[action.meta.arg.id].connected = false
            state.error = action.payload
        })

        //Delete
        builder.addCase(deleteAgent.pending, (state, action) => {
            state.agents[action.meta.arg.id].loading = true
            console.log(action)
        })
        builder.addCase(deleteAgent.fulfilled, (state, action) => {
            state.agents.splice(action.meta.arg.id, 1)
            state.selectedAgent = null
            state.error = ''
        })
        builder.addCase(deleteAgent.rejected, (state, action) => {
            state.error = action.payload
            state.agents[action.meta.arg.id].loading = false
        })
    }
})

export default agentSlice.reducer
export const { selectAgent } = agentSlice.actions