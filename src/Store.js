import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./Reducers/goalsSlice";
import taskReducer from "./Reducers/taskSlice";
import optionReducer from "./Reducers/optionSlice";

export default configureStore({
    reducer: {
        goals: goalReducer,
        tasks: taskReducer,
        option: optionReducer 
    }
})