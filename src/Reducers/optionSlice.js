import { createSlice } from "@reduxjs/toolkit";

export const optionSlice = createSlice({
    name: 'option',
    initialState: { // Mapa del Estado Inicial
        value: 'goals'
    },
    reducers: { // Actions
        changeOption: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {changeOption} = optionSlice.actions;
export default optionSlice.reducer;