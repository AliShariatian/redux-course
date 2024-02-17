import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action
export const getArticlesFromServer = createAsyncThunk("articles/getArticlesFromServer", async (url) => {
   return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
});

// Articles slice
const slice = createSlice({
   name: "articles",
   initialState: [],
   reducers: {},

   extraReducers: (builder) => {
      builder.addCase(getArticlesFromServer.fulfilled, (state, action) => {
         return action.payload;
      });
   },
});

export default slice.reducer;
