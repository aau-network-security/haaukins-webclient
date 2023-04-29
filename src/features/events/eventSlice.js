import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    status: 'idle',
    events: [],
    selectedEvent: null,
    eventsStopping: {},
    statusCode: 200,
    error: {}
}

export const createEvent = createAsyncThunk('event/createEvent', async (reqData, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        console.log("creating event: ", reqData)
        const response = await apiClient.post('events', reqData)
        
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


export const fetchEvents = createAsyncThunk('event/fetchEvents', async (obj, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        var endpoint = "events"
        if (typeof obj !== "undefined") {
            endpoint = "events/bystatus/" + obj.status
        }
        const response = await apiClient.get(endpoint)
        // Populate some extra variables into the agents array
        if (typeof response.data.events === "undefined") {
            response.data.events = []
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


export const stopEvent = createAsyncThunk('event/stopEvent', async (event, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        console.log("stopping event: ", event)
        const response = await apiClient.put('events/close/' + event.tag)
        
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
export const deleteEvent = createAsyncThunk('event/deleteEvent', async (agentObj, { rejectWithValue, getState }) => {
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

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        selectEvent: (state, action) => {
            state.selectedEvent = action.payload
        }
    },
    extraReducers: (builder) => {
        // Fetch events
        builder.addCase(fetchEvents.pending, (state) => {
            state.status = 'fetchingEvents'
        })
        builder.addCase(fetchEvents.fulfilled, (state, action) => {
            state.status = ''
            state.events = action.payload.events
            state.error = ''
        })
        builder.addCase(fetchEvents.rejected, (state, action) => {
            state.status = ''
            state.events = []
            state.error = action.payload
        })

        // Add event
        builder.addCase(createEvent.pending, (state, action) => {
            state.status = 'creatingEvent'
        })
        builder.addCase(createEvent.fulfilled, (state, action) => {
            state.status = ''
            state.error = ''
        })
        builder.addCase(createEvent.rejected, (state, action) => {
            state.status = ''
            state.error = action.payload
        })

        // Stop event
        builder.addCase(stopEvent.pending, (state, action) => {
            state.status = 'stoppingEvent'
            state.eventsStopping[action.meta.arg.tag] = 'stopping'
        })
        builder.addCase(stopEvent.fulfilled, (state, action) => {
            state.status = ''
            state.error = ''
            delete state.eventsStopping[action.meta.arg.tag]
        })
        builder.addCase(stopEvent.rejected, (state, action) => {
            state.error = action.payload
            state.status = ''
            delete state.eventsStopping[action.meta.arg.tag]
        })

        // Delete event
        builder.addCase(deleteEvent.pending, (state) => {
            state.status = 'deletingEvent'
        })
        builder.addCase(deleteEvent.fulfilled, (state, action) => {
            state.status = ''
            state.error = ''
        })
        builder.addCase(deleteEvent.rejected, (state, action) => {
            state.error = action.payload
            state.status = ''
        })
    }
})

export default eventSlice.reducer
export const { selectEvent } = eventSlice.actions