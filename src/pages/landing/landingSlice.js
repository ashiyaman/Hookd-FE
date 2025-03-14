import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const HOOKD_URI = 'http://localhost:3000'

export const fetchCategories = createAsyncThunk(
    'categories/fetch',
    async() => {
        const response = await axios.get(`${HOOKD_URI}/categories`)
        console.log(response)
        if(response){
            return response.data
        }
    }
)

export const fetchCategoryById = createAsyncThunk(
    'categories/fetchCategoryById',
    async(categoryId) => {
        const response = await axios.get(`${HOOKD_URI}/categories/${categoryId}`)
        if(response){
            return response.data
        }
    }
)

export const landingSlice = createSlice({
    name: 'Categories',
    initialState: {
        categories: [],
        selectedCategory: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, state => {
                state.status = 'pending'
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'loading',
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'error',
                state.error = action.payload
            })
            .addCase(fetchCategoryById.pending, state => {
                state.status = 'pending'
            })
            .addCase(fetchCategoryById.fulfilled, (state, action) => {
                state.status = 'loading',
                state.selectedCategory = action.payload
            })
            .addCase(fetchCategoryById.rejected, (state, action) => {
                state.status = 'error',
                state.error = action.payload
            })
    }
})

export default landingSlice.reducer