import TodoItem from "../TodoItem/TodoItem";
import classes from "./TodoList.module.css";

const TodoList = ({ todoArray, toggleStatus, deleteTask, filter, updateTask }) => {

const filterByStatus = (todo) => {
  if (filter === "all") return true;
  if (filter === "active") return !todo.isCompleted;
  if (filter === "completed") return todo.isCompleted;
  return true;
}

  return (
    <div className={classes.todoList}>
      {todoArray
        .filter(filterByStatus)
        .map((filteredTodo) => (
          <TodoItem
            key={filteredTodo.id}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
            updateTask={updateTask}
            {...filteredTodo}
          />
        ))}
    </div>
  );
};

export default TodoList;
