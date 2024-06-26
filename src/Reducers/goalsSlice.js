import { createSlice } from "@reduxjs/toolkit";

const aKey = "12345";

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: { // Mapa del Estado Inicial / vaciado para visualizar con prioridad el del Backend
        value: []
    },
    reducers: { // Actions
        addGoal: (state, action) => {
            state.value.push(action.payload)
            fetch("http://localhost:3001/goals/addGoal", {
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
        initAddGoal: (state, action) => {
            state.value.push(action.payload)
        },
        removeGoal: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload)
            fetch("http://localhost:3001/goals/removeGoal" + action.payload, {
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

// Exportar las acciones para poderlas utilizar
export const {addGoal, initAddGoal, removeGoal} = goalsSlice.actions;
export default goalsSlice.reducer;