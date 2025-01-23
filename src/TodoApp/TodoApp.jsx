import { useRef, useState } from "react";
import TodoAppHeader from "../components/TodoAppHeader/TodoAppHeader";
import TodoList from "../components/TodoList/TodoList";
import TodoAppFooter from "../components/TodoAppFooter/TodoAppFooter";
import classes from "./TodoApp.module.css";

function TodoApp() {
  const [newTodo, setNewTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);
  const tasksPerPage = 5;

  const addNewTask = () => {
    if (!newTodo) {
      console.warn("You can't create an empty task");
      return;
    }

    const todoTrimmed = newTodo.trim();

    const newTask = {
      task: todoTrimmed,
      id: crypto.randomUUID(),
      isCompleted: false,
    };

    setTodoArray((currentTodoList) => [...currentTodoList, newTask]);
    setNewTodo("");

    inputRef.current.focus();
  };

  const toggleStatus = (id) => {
    setTodoArray((currentTodoList) =>
      currentTodoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodoArray((currentTodoList) =>
      currentTodoList.filter((todo) => todo.id !== id)
    );
  };

  const getFilter = (value) => {
    setFilter(value);
  };

  const updateTask = (id, editedTask) => {
    setTodoArray((currentTodoList) => {
      return currentTodoList.map((todo) =>
        todo.id === id ? { ...todo, task: editedTask } : todo
      );
    });
  };

  return (
    <div className={classes.app}>
      <div className={classes.todoContent}>
        <TodoAppHeader
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="...whats on your mind?"
          onClick={addNewTask}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
              addNewTask();
            }
          }}
          ref={inputRef}
        />
        {todoArray.length !== 0 ? (
          <TodoList
            todoArray={todoArray}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
            filter={filter}
            updateTask={updateTask}
          />
        ) : (
          <div> No current tasks </div>
        )}
        {todoArray.length !== 0 && (
          <TodoAppFooter
            getFilter={getFilter}
            todoArray={todoArray}
            tasksPerPage={tasksPerPage}
          />
        )}
      </div>
    </div>
  );
}

export default TodoApp;
