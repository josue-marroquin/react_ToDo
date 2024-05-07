import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./Reducers/goalsSlice";

export default configureStore({
    reducer: {
        goals:goalReducer
    }
})