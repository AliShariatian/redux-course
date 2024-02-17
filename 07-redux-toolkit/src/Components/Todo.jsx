import { useDispatch } from "react-redux";
import { removeTodoAction, doTodoAction } from "../Redux/store/TodoList_Way2";

const Todo = ({ title, id, isDone }) => {
   const dispatch = useDispatch();

   const removeTodoHandler = (ev) => {
      ev.preventDefault();
      dispatch(removeTodoAction({ id }));
   };

   const doTodoHandler = (ev) => {
      ev.preventDefault();
      dispatch(doTodoAction({ id }));
   };

   return (
      <div className={`todo ${isDone && "completed"}`}>
         <li className="todo-item">{title}</li>

         <button onClick={doTodoHandler} className="complete-btn">
            <i className="fas fa-check"></i>
         </button>

         <button onClick={removeTodoHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
         </button>
      </div>
   );
};

export default Todo;

