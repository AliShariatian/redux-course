import { GET_PRODUCT_START } from "../Products/actionTypes.js";
import { getProductSuccessAction, getProductErrorAction } from "../Products/actionCreators.js";

const apiCall = (store) => (next) => (action) => {
   if (action.type !== GET_PRODUCT_START) {
      // Go to next middleware
      return next(action);
   }

   fetch(action.payload)
      .then((res) => res.json())
      .then((data) => {
         store.dispatch(getProductSuccessAction(data));
      })
      .catch((err) => {
         store.dispatch(getProductErrorAction(err));
      });

   next(action);
};

export default apiCall;
