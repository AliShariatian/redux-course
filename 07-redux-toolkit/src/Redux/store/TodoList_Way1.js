// Way 1

import { createAction, createReducer } from "@reduxjs/toolkit";

// Action Creators
export const addTodoAction = createAction("ADD_TODO");
export const removeTodoAction = createAction("REMOVE_TODO");
export const doTodoAction = createAction("DO_TODO");

// Reducer
export default createReducer([], {
   [addTodoAction.type]: (state, action) => {
      state.push(action.payload);
   },

   [removeTodoAction.type]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
   },

   [doTodoAction.type]: (state, action) => {
      state.forEach((todo) => {
         if (todo.id === action.payload.id) {
            todo.isDone = !todo.isDone;
         }
      });
   },
});

