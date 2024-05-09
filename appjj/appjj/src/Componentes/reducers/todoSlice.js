// En ./Componentes/reducers/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    initAddTodo: (state, action) => {
      // Suponiendo que recibes un array de tareas para inicializar
      state.value = action.payload;
    }
  }
});

export const { addTodo, initAddTodo } = todoSlice.actions;
export default todoSlice.reducer;
