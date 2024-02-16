// import reducers
import articlesReducer from "./Articles/reducer.js";
import commentsReducer from "./Comments/reducer.js";
import productsReducer from "./Products/reducer.js";

// import middleware
import logger from "./middlewares/logger.js";
import apiCall from "./middlewares/apiCall.js";

// Combine multi reducer
const combine = Redux.combineReducers({
   articles: articlesReducer,
   comments: commentsReducer,
   products: productsReducer,
});

// Set middleware
// Middleware are executed in order
const middleware = Redux.applyMiddleware(logger("Test Params"), apiCall);

const store = Redux.createStore(combine, middleware);

export default store;
