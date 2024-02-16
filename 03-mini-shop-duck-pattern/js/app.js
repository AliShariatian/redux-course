import store from "../Redux/store.js";
import { addProductAction, getProductStartAction } from "../Redux/Products/actionCreators.js";
import { addArticleAction } from "../Redux/Articles/actionCreators.js";

let count = 0;
store.subscribe(() => console.log(`Store Updated (${count++}):`, store.getState()));

store.dispatch(addProductAction({ id: 1, title: "Laptop", price: 90_000_000 }));
store.dispatch(addArticleAction({ id: 1, title: "New Post", body: "Post body" }));
store.dispatch(getProductStartAction("https://fakestoreapi.com/products"));

console.log(store.getState().products);
