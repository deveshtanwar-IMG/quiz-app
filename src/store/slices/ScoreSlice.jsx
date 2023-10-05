import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
    name:'score',
    initialState:{
        totalQue: 0,
        correctQue: 0,
        wrongQue: 0
    },
    reducers:{
        updateTotal(state, action){
            state.totalQue = action.payload;
        },
        updateCorrect(state, action){
            state.correctQue = action.payload;
        },
        updateWrong(state, action){
            state.wrongQue = action.payload;
        },
    }
})

export default scoreSlice.reducer;
export const {updateTotal, updateCorrect, updateWrong} = scoreSlice.actions;