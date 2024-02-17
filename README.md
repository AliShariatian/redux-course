# Redux Course

## Notes:

-  Every `reducer` must be pure function.
-  Derived data in redux. (lesson 29), [link](https://redux.js.org/usage/deriving-data-selectors).
-  `subscribe` method run when state update.
-  For cancel subscribe (`unSubscribe`), can use returned value of subscribe method and call this.
-  Combine reducer in `03-mini-shop` folder.
-  `Currying` role: in lesson 46, [link](https://javascript.info/currying-partials).
-  `Ducks` redux folder structure (lesson 51) [link1](https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c), [link2](https://github.com/erikras/ducks-modular-redux).
-  Middlewares are executed in order.
-  `Redux-Thunk` is a middleware.
-  For work with a asynchronous _action_ we use `redux-thunk` package.
-  For use redux in react project, we use `React-Redux` package.
