import TodoItems from "../todo-items/TodoItems";
import classes from "./TodoList.module.css";

const TodoList = ({ todoArray, toggleStatus, deleteTask }) => {
  return (
    <div className={classes.todoList}>
      {todoArray.map((todoArray) => (
        <TodoItems
          key={todoArray.id}
          {...todoArray}
          toggleStatus={toggleStatus}
          deleteTask={deleteTask}
        ></TodoItems>
      ))}
    </div>
  );
};

export default TodoList;
