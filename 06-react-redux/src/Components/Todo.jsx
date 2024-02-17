const Todo = ({ title }) => {
   return (
      <div className="todo">
         <li className="todo-item">{title}</li>

         <button className="complete-btn">
            <i>Check</i>
         </button>

         <button className="trash-btn">
            <i>Trash</i>
         </button>
      </div>
   );
};

export default Todo;
