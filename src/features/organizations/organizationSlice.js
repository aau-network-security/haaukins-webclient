import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    status: 'idle',
    organizations: [],
    selectedOrg: null,
    statusCode: 200,
    error: {}
}

export const addOrg = createAsyncThunk('org/addOrg', async (org, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.post('orgs', org)
        let newOrg = {
            Name: org.orgName,
            OwnerUser: org.orgOwner.username,
            OwnerEmail: org.orgOwner.email
        }
        return newOrg
    }
    catch (err) {
        if (!err.response) {
            throw err
        }
        let error = { axiosMessage: err.message, axiosCode: err.code, apiError: err.response.data, apiStatusCode: err.response.status}
        return rejectWithValue(error)
    }
})

export const deleteOrg = createAsyncThunk('org/deleteOrg', async (org, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.delete('orgs/' + org.name)
        console.log(response.data)
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

export const fetchOrgs = createAsyncThunk('org/fetchOrgs', async (obj, { rejectWithValue }) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.get('orgs')
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

const orgSlice = createSlice({
    name: 'org',
    initialState,
    reducers: {
        resetOrgState: (state) => {
            state.status = 'idle'
            state.organizations = []
            state.statusCode = 200
            state.error = ''
        },
        selectOrg: (state, action) => {
            state.selectedOrg = action.payload
        }
    },
    extraReducers: (builder) => {
        // Add org
        builder.addCase(addOrg.pending, (state) => {
            state.status = 'adding'
        })
        builder.addCase(addOrg.fulfilled, (state, action) => {
            state.status = ''
            state.organizations.push(action.payload)
            state.error = ''
        })
        builder.addCase(addOrg.rejected, (state, action) => {
            state.status = ''
            state.error = action.payload
        })

        // Delete org
        builder.addCase(deleteOrg.pending, (state) => {
            state.status = 'deleting'
        })
        builder.addCase(deleteOrg.fulfilled, (state, action) => {
            state.status = ''
            state.organizations.splice(action.meta.arg.id, 1)
            state.selectedOrg = null
            state.error = ''
        })
        builder.addCase(deleteOrg.rejected, (state, action) => {
            state.status = ''
            state.error = action.payload
        })



        // Fetch
        builder.addCase(fetchOrgs.pending, (state) => {
            state.status = 'fetchin'
        })
        builder.addCase(fetchOrgs.fulfilled, (state, action) => {
            state.status = ''
            state.organizations = action.payload.orgs
            state.error = ''
        })
        builder.addCase(fetchOrgs.rejected, (state, action) => {
            state.status = ''
            state.organizations = []
            state.error = action.payload
        })
    }
})

export default orgSlice.reducer
export const { resetOrgState, selectOrg } = orgSlice.actions