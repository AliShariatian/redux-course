import { configureStore } from "@reduxjs/toolkit";
// import todosReducer from "./store/TodoList_Way1";
import todosReducer from "./store/TodoList_Way2";

const store = configureStore({
   reducer: todosReducer,
});

export default store;

