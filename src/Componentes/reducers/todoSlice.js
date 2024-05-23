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
    deleteTodo: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload);
    },
    initAddTodo: (state, action) => {
      state.value = action.payload;
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const taskToEdit = state.value.find(task => task.id === id);
      if (taskToEdit) {
        taskToEdit.description = description;
      }
    }
  },
});

export const { addTodo, deleteTodo, initAddTodo, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
