// Way 1 => Not Recommended

import { useState } from "react";
import Todo from "./Todo";

// For connect to store
import { connect } from "react-redux";
import { addTodoAction } from "../Redux/store/TodoList";

const TodoList = ({ todos, addTodo }) => {
   const [title, setTitle] = useState("");

   const addTodoHandler = (ev) => {
      ev.preventDefault();
      addTodo(title);
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

// ----------------------------------------------
// For only get data from store
const mapStateToProps = (state) => {
   // state is store
   console.log("Store:", state);

   // Send data to TodoList component props
   return {
      todos: state.todos,
   };
};

// ----------------------------------------------
// For only change (change, delete) data in store
const mapDispatchToProps = (dispatch) => {
   // Send function to TodoList component props
   return {
      addTodo: (title) => dispatch(addTodoAction(title)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
