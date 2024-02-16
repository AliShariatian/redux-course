import { ADD_TODO, DO_TODO, REMOVE_TODO, GET_ALL_TODOS } from "../Redux/actionsTypes.js";

// Create Todolist Reducer
const todolistReducer = (state = [], action) => {
   switch (action.type) {
      case ADD_TODO: {
         const copyState = [...state]; // Copy of state
         // Create new todo item
         const newTodo = {
            id: crypto.randomUUID(),
            title: action.title,
            isCompleted: false,
         };
         copyState.push(newTodo);
         return copyState; // New state
      }

      case REMOVE_TODO: {
         let copyState = [...state];
         copyState = copyState.filter((todo) => todo.id !== action.id);
         return copyState; // New state
      }

      case DO_TODO: {
         const copyState = [...state];

         copyState.forEach((todo) => {
            if (todo.id === action.id) {
               todo.isCompleted = !todo.isCompleted;
            }
         });
         return copyState; // New state
      }

      case GET_ALL_TODOS: {
         return state;
      }

      default: {
         return state;
      }
   }
};

export default todolistReducer;
