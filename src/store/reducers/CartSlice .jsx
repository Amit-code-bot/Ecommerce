import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialState =  {
    data:[]
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadcart: (state, action) => {
            state.cart = action.payload
        }
    }
})

export default cartSlice.reducer
export const { loadcart } = cartSlice.actions