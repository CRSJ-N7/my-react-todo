import TodoItem from "../TodoItem/TodoItem";
import classes from "./TodoList.module.css";

const TodoList = ({ todoArray, toggleStatus, deleteTask }) => {
  return (
    <div className={classes.todoList}>
      {todoArray.map((todoArray) => (
        <TodoItem
          key={todoArray.id}
          {...todoArray}
          toggleStatus={toggleStatus}
          deleteTask={deleteTask}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoList;
