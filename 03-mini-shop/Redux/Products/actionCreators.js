import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes.js";

const addProductAction = (data) => {
   return {
      type: ADD_PRODUCT,
      payload: data,
   };
};

const removeProductAction = (id) => {
   return {
      type: REMOVE_PRODUCT,
      id,
   };
};

export { addProductAction, removeProductAction };

