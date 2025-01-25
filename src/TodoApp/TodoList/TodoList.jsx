import TodoItem from "../TodoItem/TodoItem";
import classes from "./TodoList.module.css";
import { useEffect } from "react";

const TodoList = ({
  todoArray,
  toggleStatus,
  deleteTask,
  filter,
  updateTask,
  currentPage,
  tasksPerPage,
  onUpdateCount,
}) => {
  
  const filterByStatus = (todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true;
  };

  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;

  const filteredArray = todoArray
    .filter(filterByStatus)
    .slice(startIndex, endIndex);

  useEffect(() => {
    onUpdateCount(filteredArray.length);
  }, [filteredArray.length, onUpdateCount]);

  return (
    <div className={classes.todoList}>
      {todoArray
        .filter(filterByStatus)
        .slice(startIndex, endIndex)
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
