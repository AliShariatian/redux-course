import store from "../Redux/store.js";
import { addProductAction } from "../Redux/Products/actionCreators.js";
import { addArticleAction } from "../Redux/Articles/actionCreators.js";

store.subscribe(() => console.log("Store Updated:", store.getState()));

store.dispatch(addProductAction({ id: 1, title: "Laptop", price: 90_000_000 }));
store.dispatch(addArticleAction({ id: 1, title: "New Post", body: "Post body" }));

console.log(store.getState().products);
