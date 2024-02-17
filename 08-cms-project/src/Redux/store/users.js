import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action
export const getUserFromServer = createAsyncThunk("users/getUserFromServer", async (url) => {
   return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
});

// Users slice
const slice = createSlice({
   name: "users",
   initialState: [],
   reducers: {},

   extraReducers: (builder) => {
      builder.addCase(getUserFromServer.fulfilled, (state, action) => {
         return action.payload;
      });
   },
});

export default slice.reducer;
