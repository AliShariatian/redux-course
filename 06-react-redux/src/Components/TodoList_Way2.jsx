// Way 2 => Recommended

import { useState } from "react";
import Todo from "./Todo";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../Redux/store/TodoList";

const TodoList = () => {
   const [title, setTitle] = useState("");

   // Redux
   const dispatch = useDispatch();
   const todos = useSelector((state) => state.todos);
   
   const addTodoHandler = (ev) => {
      ev.preventDefault();
      
      // Redux
      dispatch(addTodoAction(title));

      setTitle("");
   };

   return (
      <>
         <header>
            <h1>Todo List</h1>
         </header>

         <form>
            <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" className="todo-input" placeholder="Add Your Todo" />
            <button onClick={addTodoHandler} className="todo-button" type="submit">
               <i>+</i>
            </button>

            <div className="select">
               <select name="todos" className="filter-todo">
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="incomplete">Incomplete</option>
               </select>
            </div>
         </form>

         <div className="todo-container">
            <ul className="todo-list">
               {todos.map((todo) => (
                  <Todo key={todo.id} {...todo} />
               ))}
            </ul>
         </div>
      </>
   );
};

export default TodoList;
