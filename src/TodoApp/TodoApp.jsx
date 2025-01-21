import TodoAppHeader from "../components/TodoAppHeader/TodoAppHeader";
import { useEffect, useState } from "react";
import TodoList from "../components/TodoList/TodoList";
import classes from "./TodoApp.module.css";
import TodoAppFooter from "../components/TodoAppFooter/TodoAppFooter";

function TodoApp() {
  const [newTodo, setNewTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    if (filter == "all") {
      setFilteredArray(todoArray.slice());
    } else if (filter === "active") {
      setFilteredArray(todoArray.filter((todo) => !todo.isCompleted));
    } else if (filter === "completed") {
      setFilteredArray(todoArray.filter((todo) => todo.isCompleted));
    }
  }, [todoArray, filter]);

  const addNewTask = () => {
    if (!newTodo) {
      console.warn("You can't create an empty task");
      return;
    }
    const newTask = {
      task: newTodo,
      id: crypto.randomUUID(),
      isCompleted: false,
    };

    setTodoArray((currentTodoList) => [...currentTodoList, newTask]);
    setNewTodo("");
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
              addNewTask();
            }
          }}
        />
        {filteredArray.length !== 0 ? (
          <TodoList
            todoArray={filteredArray}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
          />
        ) : (
          <div> No current tasks </div>
        )}
        {todoArray.length !== 0 ? (
          <TodoAppFooter getFilter={getFilter} />
        ) : null}
      </div>
    </div>
  );
}

export default TodoApp;
