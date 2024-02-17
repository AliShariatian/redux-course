// Way 2 => Recommended

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// work with asynchronous action (reducer)
export const getTodoFromServer = createAsyncThunk("Todo/getTodoFromServer", async (url) => {
   return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
});

// Todo Slice
const slice = createSlice({
   name: "Todo",
   initialState: [],
   reducers: {
      addTodoAction: (state, action) => {
         state.push(action.payload);
      },

      removeTodoAction: (state, action) => {
         return state.filter((todo) => todo.id !== action.payload.id);
      },

      doTodoAction: (state, action) => {
         state.forEach((todo) => {
            if (todo.id === action.payload.id) {
               todo.isDone = !todo.isDone;
            }
         });
      },
   },

   // for asynchronous reducers
   extraReducers: {
      // when is fulfilled
      [getTodoFromServer.fulfilled]: (state, action) => {
         // action is result of getTodoFromServer function (data)
         state.push(...action.payload.slice(0, 10));
      },

      // when is pending
      [getTodoFromServer.pending]: (state, action) => {},

      // when is rejected
      [getTodoFromServer.rejected]: (state, action) => {},
   },
});

export const { addTodoAction, removeTodoAction, doTodoAction } = slice.actions;
export default slice.reducer;

