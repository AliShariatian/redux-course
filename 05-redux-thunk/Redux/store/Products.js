// Actions
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const GET_PRODUCT_START = "GET_PRODUCT_START";
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
const GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR";

// Reducer
export default function reducer(state = [], action) {
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
}

// Action creators
export const addProductAction = (data) => {
   return {
      type: ADD_PRODUCT,
      payload: data,
   };
};

export const removeProductAction = (id) => {
   return {
      type: REMOVE_PRODUCT,
      id,
   };
};

export const getProductFromServerAction = (url) => {
   return (dispatch, getState) => {
      // asynchronous action
      fetch(url)
         .then((res) => res.json())
         .then((data) => dispatch(getProductSuccessAction(data)))
         .catch((err) => {
            store.dispatch(getProductErrorAction(err));
         });
   };
};

export const getProductSuccessAction = (data) => {
   return {
      type: GET_PRODUCT_SUCCESS,
      payload: data,
   };
};

export const getProductErrorAction = (error) => {
   return {
      type: GET_PRODUCT_ERROR,
      payload: error,
   };
};
