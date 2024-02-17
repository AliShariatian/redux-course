// import reducers
import articlesReducer from "./store/Article.js";
import commentsReducer from "./store/Comments.js";
import productsReducer from "./store/Products.js";

// import middleware
import thunk from "../node_modules/redux-thunk/es/index.js";

// Combine multi reducer
const combine = Redux.combineReducers({
   articles: articlesReducer,
   comments: commentsReducer,
   products: productsReducer,
});

// Set middleware
// Middleware are executed in order
const middleware = Redux.applyMiddleware(thunk);

const store = Redux.createStore(combine, middleware);

export default store;
