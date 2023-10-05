import { configureStore } from "@reduxjs/toolkit";
import ScoreSlice from "./slices/ScoreSlice";

const Store = configureStore({
    reducer:{
        score: ScoreSlice
    }
})
export default Store;