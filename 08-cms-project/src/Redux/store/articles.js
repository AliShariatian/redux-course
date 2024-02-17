import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async actions

export const getArticlesFromServer = createAsyncThunk("articles/getArticlesFromServer", async () => {
   return fetch("https://redux-cms.iran.liara.run/api/articles")
      .then((res) => res.json())
      .then((data) => data);
});

export const removeArticle = createAsyncThunk("articles/removeArticle", async (id) => {
   return fetch(`https://redux-cms.iran.liara.run/api/articles/${id}`, {
      method: "DELETE",
   })
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

      builder.addCase(removeArticle.fulfilled, (state, action) => {
         const newArticle = state.filter((article) => article._id !== action.payload.id);

         // New state
         return newArticle;
      });
   },
});

export default slice.reducer;
