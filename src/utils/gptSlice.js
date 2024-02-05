import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGpt:false
    },
    reducers:{
        toggleGPTSearch : (state, action)=>{
            state.showGpt = !state.showGpt;
        }
    }
})

export const{toggleGPTSearch} = gptSlice.actions;
export default gptSlice.reducer;