import { configureStore } from "@reduxjs/toolkit";

// REDUCERS IMPORT
import usersReducer from "./store/users";
import coursesReducer from "./store/courses";
import articlesReducer from "./store/articles";

// Store
export default configureStore({
   reducer: {
      users: usersReducer,
      courses: coursesReducer,
      articles: articlesReducer,
   },
});
