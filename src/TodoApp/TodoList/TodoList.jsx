import TodoItem from "../TodoItem/TodoItem";
import classes from "./TodoList.module.css";

const TodoList = ({ todoArray, toggleStatus, deleteTask, filter, updateTask, currentPage, tasksPerPage }) => {


/* Вот как мне сделать так, чтобы из этой функции сразу доставать количество отфильтрованных тудушек?
Так получается я не соблюдаю DRY, т.к. в родительском компоненте у меня по факту повторение функции
filterByStatus только с приписочкой length.
*/

const filterByStatus = (todo) => {
  if (filter === "all") return true;
  if (filter === "active") return !todo.isCompleted;
  if (filter === "completed") return todo.isCompleted;
  return true;
}


const startIndex = (currentPage - 1) * tasksPerPage;
const endIndex = startIndex + tasksPerPage;

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
