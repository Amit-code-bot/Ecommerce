import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialState =  {
    data:[]
}

const userSlice = createSlice({
    initialState,
     name: "user",
    reducers: {
        loaduser: (state, action) => {
            state.users = action.payload
        }
    }
})

export default userSlice.reducer
export const { loaduser } = userSlice.actions