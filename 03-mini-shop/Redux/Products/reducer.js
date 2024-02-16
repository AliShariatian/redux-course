import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes.js";

export default (state = [], action) => {
   switch (action.type) {
      case ADD_PRODUCT: {
         const newProduct = action.payload;
         return [...state, newProduct];
      }

      case REMOVE_PRODUCT: {
         const newState = [...state].filter((product) => product.id !== action.id);
         return newState;
      }
      
      default: {
         return state;
      }
   }
};

