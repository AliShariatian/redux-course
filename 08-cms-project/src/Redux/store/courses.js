import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action
export const getCoursesFromServer = createAsyncThunk("courses/getCoursesFromServer", async (url) => {
   return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
});

// Courses slice
const slice = createSlice({
   name: "courses",
   initialState: [],
   reducers: {},

   extraReducers: (builder) => {
      builder.addCase(getCoursesFromServer.fulfilled, (state, action) => {
         return action.payload;
      });
   },
});

export default slice.reducer;
