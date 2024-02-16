import { ADD_PRODUCT, REMOVE_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_START, GET_PRODUCT_SUCCESS } from "./actionTypes.js";

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

      case GET_PRODUCT_SUCCESS: {
         return [...state, ...action.payload];
      }

      case GET_PRODUCT_ERROR: {
         return [...state, { error: action.payload }];
      }

      default: {
         return state;
      }
   }
};

