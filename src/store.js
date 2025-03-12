import { configureStore } from "@reduxjs/toolkit";

import {accessorySlice} from './features/accessories/accessorySlice'

export default configureStore({
    reducer: {
        accessories: accessorySlice.reducer
    }
})