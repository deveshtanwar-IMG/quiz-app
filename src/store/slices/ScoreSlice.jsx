import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
    name:'score',
    initialState:{
        ans:[],
        totalQue: 0,
        correctQue: 0,
        wrongQue: 0
    },
    reducers:{
        updateAns(state,action){
            if(action.payload > 0){
                console.log(action.payload)
                state.ans.splice(0,action.payload);
            }
            else{
                state.ans.push(action.payload);
            }
        },
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
export const {updateTotal, updateCorrect, updateWrong, updateAns} = scoreSlice.actions;