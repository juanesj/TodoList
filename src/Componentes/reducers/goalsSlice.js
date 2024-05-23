import { createSlice } from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    value: [
      {
        id: 1,
        name: 'Graduarme del TDS',
        description: 'Ganar todos los cursos',
        dueDate: '2024-12-01'
      }
    ]
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload);
    },
    deleteGoal: (state, action) => {
      state.value = state.value.filter(goal => goal.id !== action.payload);
    },
    editGoal: (state, action) => {
      const index = state.value.findIndex(goal => goal.id === action.payload.id);
      if (index !== -1) {
        state.value[index] = action.payload;
      }
    }
  }
});

export const { addGoal, deleteGoal, editGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
