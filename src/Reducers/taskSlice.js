import { createSlice } from "@reduxjs/toolkit";

const aKey = "12345";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { // Mapa del Estado Inicial
        value: []
    },
    reducers: { // Actions
        addTask: (state, action) => {
            state.value.push(action.payload)
            fetch("http://localhost:3001/tasks/addTask", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": aKey
                },
                body: JSON.stringify(action.payload)
            }).catch((err)=> {
                console.log(aKey);
                console.log(err);
            })
        },
        initAddTask: (state, action) => {
            state.value.push(action.payload)
        },
        removeTask: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload)
            fetch("http://localhost:3001/tasks/removeTask" + action.payload, {
                method: "DELETE",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": aKey
                }
            }).catch((err)=> {
                console.log(err);
            })
        }
    }
})

export const { addTask, initAddTask, removeTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasksSlice
export default tasksSlice.reducer;