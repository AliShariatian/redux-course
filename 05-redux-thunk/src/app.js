import store from "../Redux/store.js";
import { addProductAction, getProductFromServerAction } from "../Redux/store/Products.js";

// ---------------------------------------
let count = 0;
store.subscribe(() => console.log(`Store Updated (${count++}):`, store.getState()));

// ---------------------------------------
store.dispatch(addProductAction({ id: 1, title: "Laptop", price: 90_000_000 }));

// Asynchronous action with Redux-Thunk
store.dispatch(getProductFromServerAction("https://fakestoreapi.com/products"));

