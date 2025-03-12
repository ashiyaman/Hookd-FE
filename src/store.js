import { configureStore } from "@reduxjs/toolkit";

import {accessorySlice} from './features/accessories/accessorySlice'
import { landingSlice } from "./pages/landing/landingSlice";

export default configureStore({
    reducer: {
        categories: landingSlice.reducer,
        accessories: accessorySlice.reducer
    }
})