import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async actions

// Get all users
export const getUsersFromServer = createAsyncThunk("users/getUsersFromServer", async () => {
   return fetch("https://redux-cms.iran.liara.run/api/users")
      .then((res) => res.json())
      .then((data) => data);
});

// Remove one user
export const removeUser = createAsyncThunk("users/removeUser", async (id) => {
   return fetch(`https://redux-cms.iran.liara.run/api/users/${id}`, {
      method: "DELETE",
   })
      .then((res) => res.json())
      .then((data) => data);
});

// Users slice
const slice = createSlice({
   name: "users",
   initialState: [],
   reducers: {},

   extraReducers: (builder) => {
      builder.addCase(getUsersFromServer.fulfilled, (state, action) => {
         return action.payload;
      });

      builder.addCase(removeUser.fulfilled, (state, action) => {
         const newUsers = state.filter((user) => user._id !== action.payload.id);

         // New state
         return newUsers;
      });
   },
});

export default slice.reducer;
