// optionSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const optionSlice = createSlice({
    name: 'option',
    initialState: {
        value: 'goals'
    },
    reducers: {
        changeOption: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { changeOption } = optionSlice.actions;

export default optionSlice.reducer;
