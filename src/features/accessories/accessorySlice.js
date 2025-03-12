import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAccessories = createAsyncThunk(
    'accessories/fetch',
    async() => {
        console.log('in slice....')
        const response = await axios.get('http://localhost:3000/products')
        console.log('resp...', response.data)
        if(response){
            return response.data
        }
    }
)

export const accessorySlice = createSlice({
    name: 'Accessories',
    initialState: {
        accessories: [],
        selectedAccessory: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(fetchAccessories.pending, (state) => {
                console.log('state...', state)
                state.status = 'loading'
            })
            .addCase(fetchAccessories.fulfilled, (state, action) => {
                state.status = 'success',
                state.accessories = action.payload
            })
            .addCase(fetchAccessories.rejected, (state, action) => {
                state.status = 'error',
                state.error = action.payload
            })
    }
})

export default accessorySlice.reducer