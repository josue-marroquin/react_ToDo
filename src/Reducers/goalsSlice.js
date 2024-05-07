import { createSlice } from "@reduxjs/toolkit";

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: { // Mapa del Estado Inicial
        value: [
                {                    
                    'name': 'Ganar el TDS',
                    'description': 'Ganar todos los cursos',
                    'dueDate':'01-12-2024'
                }
        ]
    },
    reducers: { // Actions
        addGoal: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const {addGoal} = goalsSlice.actions;
export default goalsSlice.reducer;