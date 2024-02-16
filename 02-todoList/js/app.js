import { ADD_TODO, DO_TODO, REMOVE_TODO, GET_ALL_TODOS } from "../Redux/actionsTypes.js";

////////////////////////////////////////////////
const todoInput = document.querySelector(".todo-input");
const addTodoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector(".filter-todo");

////////////////////////////////////////////////

// Create Todolist Reducer
function todolistReducer(state = [], action) {
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
}

// Create Store
const store = Redux.createStore(todolistReducer);

////////////////////////////////////////////////
// Add todo handler
addTodoBtn.addEventListener("click", (event) => {
   event.preventDefault();

   const newTodoTitle = todoInput.value.trim();
   store.dispatch({ type: ADD_TODO, title: newTodoTitle });

   const todos = store.getState();
   showTodoInDom(todos);
   todoInput.value = "";
});

// Remove to handler
const removeTodoHandler = (todoId) => {
   store.dispatch({ type: REMOVE_TODO, id: todoId });
   const todos = store.getState();
   showTodoInDom(todos);
};

// Do todo handler
const doTodoHandler = (todoId) => {
   store.dispatch({ type: DO_TODO, id: todoId });
   const todos = store.getState();
   showTodoInDom(todos);
};

// Todo filter change handler
filterTodo.addEventListener("change", (event) => {
   store.dispatch({ type: GET_ALL_TODOS });
   const todos = store.getState();

   if (event.target.value === "all") {
      showTodoInDom(todos);
   } else if (event.target.value === "completed") {
      const completedTodos = todos.filter((todo) => todo.isCompleted);
      showTodoInDom(completedTodos);
   } else if (event.target.value === "incomplete") {
      const inCompletedTodos = todos.filter((todo) => !todo.isCompleted);
      showTodoInDom(inCompletedTodos);
   }
});

// Bind functions for define to app
window.removeTodoHandler = removeTodoHandler;
window.doTodoHandler = doTodoHandler;

// Show todo in view handler
const showTodoInDom = (todos) => {
   todoList.innerHTML = "";
   todos.forEach((todo) => {
      todoList.insertAdjacentHTML(
         "beforeend",
         `
            <div class="todo ${todo.isCompleted && "completed"}">
                  <li class="todo-item">${todo.title}</li>
               <button class="complete-btn" onclick=doTodoHandler("${todo.id}")>
                  <i class="fas fa-check-circle"></i>
               </button>
               <button class="trash-btn" onclick=removeTodoHandler("${todo.id}")>
                  <i class="fas fa-trash"></i>
               </button>
            </div>
      `
      );
   });
};

