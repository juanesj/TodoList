// En ./store.js
import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./Componentes/reducers/goalsSlice";
import optionReducer from "./Componentes/reducers/optionSlice";
import todoReducer from "./Componentes/reducers/todoSlice"; // Asegúrate de importar correctamente

export default configureStore({
    reducer: {
        goals: goalReducer,
        option: optionReducer,
        todos: todoReducer // Agregando el reducer de todos
    }
});
