import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "config",
    initialState:{
        langCodeSelected : "en"
    },
    reducers:{
        changeLangCode:(state,action)=>{
            state.langCodeSelected = action.payload;
        }
    }
});

export const {changeLangCode} = configSlice.actions;
export default configSlice.reducer;