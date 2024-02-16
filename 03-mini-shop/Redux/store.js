// Combine multi reducer

import articlesReducer from "./Articles/reducer.js";
import commentsReducer from "./Comments/reducer.js";
import productsReducer from "./Products/reducer.js";

const combine = Redux.combineReducers({
   articles: articlesReducer,
   comments: commentsReducer,
   products: productsReducer,
});

const store = Redux.createStore(combine);

export default store;
