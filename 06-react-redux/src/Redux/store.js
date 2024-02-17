import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

// Import reducers
import articlesReducer from "./store/Article.js";
import commentsReducer from "./store/Comments.js";
import productsReducer from "./store/Products.js";
import TodosReducer from "./store/TodoList.js";

// Combine multi reducer
const combine = combineReducers({
   articles: articlesReducer,
   comments: commentsReducer,
   products: productsReducer,
   todos: TodosReducer,
});

// Set middleware
// Middleware are executed in order
const middleware = applyMiddleware();

const store = legacy_createStore(combine, middleware);

export default store;

