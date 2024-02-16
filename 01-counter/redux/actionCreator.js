import { counterDecrement, counterIncrement, counterReset } from "./actionsTypes.js";

const incrementAction = () => {
   return {
      type: counterIncrement,
   };
};

const decrementAction = () => {
   return {
      type: counterDecrement,
   };
};

const resetAction = () => {
   return {
      type: counterReset,
   };
};

export { incrementAction, decrementAction, resetAction };
