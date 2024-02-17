// Actions
const DO_TODO = "DO_TODO";
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

// Reducer
export default function reducer(state = [], action) {
   switch (action.type) {
      case ADD_TODO: {
         return [...state, action.payload];
      }

      case REMOVE_TODO: {
         return [...state].filter((todo) => todo.id !== action.id);
      }

      default: {
         return state;
      }
   }
}

// Action creators
export const addTodoAction = (title) => {
   return {
      type: ADD_TODO,
      payload: {
         id: crypto.randomUUID(),
         isDone: false,
         title,
      },
   };
};

export const removeTodoAction = (id) => {
   return {
      type: REMOVE_TODO,
      id,
   };
};
