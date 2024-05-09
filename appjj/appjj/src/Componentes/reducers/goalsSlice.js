import { createSlice } from '@reduxjs/toolkit'

export const goalsSlice = createSlice({
    name:'goals',
    initialState: {
        value: [
            {
            'name':'Graduarme del TDS',
            'description':'Ganar todos los curos',
            'dueDate':'01-12-24'
            }
        ]
    },
    reducers:{
        addGoal: (state, action) => {
            state.value.push(action.payload);
        }
    }
})

export const {addGoal} = goalsSlice.actions;

export default goalsSlice.reducer