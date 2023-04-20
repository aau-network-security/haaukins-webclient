import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/client"

const initialState = {
    fetchingCategories: false,
    fetchingExercises: false,
    categories: [],
    selectedCategory: {},
    exercises: [],
    error: ''
}
export const fetchCategories = createAsyncThunk('exercise/fetchCategories', async (obj, {rejectWithValue}) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        const response = await apiClient.get('exercises/categories')
        if (typeof response.data.categories === "undefined") {
            response.data.categories = []
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

export const fetchExercises = createAsyncThunk('exercise/fetchExercises', async (obj, {rejectWithValue}) => {
    try {
        apiClient.defaults.headers.Authorization = localStorage.getItem('token')
        var endpoint = "exercises"
        if (typeof obj.category !== "undefined") {
            endpoint += "/" + obj.category
        }
        const response = await apiClient.get(endpoint)
        if (typeof response.data.exercises === "undefined") {
            response.data.exercises = []
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

const exerciseSlice = createSlice({
    name: 'exercise',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchExercises.pending, (state) => {
            state.fetchingExercises = true
        })
        builder.addCase(fetchExercises.fulfilled, (state, action) => {
            state.fetchingExercises = false
            state.exercises = action.payload.exercises
            state.error = ''
        })
        builder.addCase(fetchExercises.rejected, (state, action) => {
            state.fetchingExercises = false
            state.exercises = []
            state.error = action.payload.data.status
            state.statusCode = action.payload.status
        })
        builder.addCase(fetchCategories.pending, (state) => {
            state.fetchingCategories = true
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.fetchingCategories = false
            state.categories = action.payload.categories
            state.error = ''
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.fetchingCategories = false
            state.categories = []
            state.error = action.payload.data.status
            state.statusCode = action.payload.status
        })
    }
})

export default exerciseSlice.reducer
export const { selectCategory } = exerciseSlice.actions