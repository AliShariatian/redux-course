import { ADD_PRODUCT, REMOVE_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, GET_PRODUCT_START } from "./actionTypes.js";

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

const getProductStartAction = (url) => {
   return {
      type: GET_PRODUCT_START,
      payload: url,
   };
};

const getProductSuccessAction = (data) => {
   return {
      type: GET_PRODUCT_SUCCESS,
      payload: data,
   };
};

const getProductErrorAction = (error) => {
   return {
      type: GET_PRODUCT_ERROR,
      payload: error,
   };
};

export { addProductAction, removeProductAction, getProductStartAction, getProductSuccessAction, getProductErrorAction };

