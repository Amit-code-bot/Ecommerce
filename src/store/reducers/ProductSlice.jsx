import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialState =  {
    data:[]
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadproduct: (state, action) => {
            state.product = action.payload
        }
    }
})

export default productSlice.reducer
export const { loadproduct } = productSlice.actions