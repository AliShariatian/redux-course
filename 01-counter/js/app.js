import { counterDecrement, counterIncrement, counterReset } from "../redux/actionsTypes.js";
import { incrementAction, decrementAction, resetAction } from "../redux/actionCreator.js";
///////////////////////////////////////////////////////

const numberElem = document.querySelector("#num");
const decBtn = document.querySelector(".dec");
const incBtn = document.querySelector(".inc");
const resetBtn = document.querySelector(".reset");
///////////////////////////////////////////////////////

const initialState = 0;

// Declare counter reducer
const counterReducer = (state = initialState, action) => {
   switch (action.type) {
      case counterIncrement: {
         return state + 1;
      }
      case counterDecrement: {
         return state - 1;
      }
      case counterReset: {
         return initialState;
      }

      default: {
         return state;
      }
   }
};

// Declare counter store
const store = Redux.createStore(counterReducer);

// Event handlers
incBtn.addEventListener("click", () => {
   store.dispatch(incrementAction());
   numberElem.innerHTML = store.getState();
});

decBtn.addEventListener("click", () => {
   store.dispatch(decrementAction());
   numberElem.innerHTML = store.getState();
});

resetBtn.addEventListener("click", () => {
   store.dispatch(resetAction());
   numberElem.innerHTML = store.getState();
});
