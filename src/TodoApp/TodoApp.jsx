import TodoAppHeader from "../components/TodoAppHeader/TodoAppHeader";
import { useState } from "react";
import TodoList from "../components/TodoList/TodoList";
import classes from "./TodoApp.module.css";

function TodoApp() {
  const [newTodo, setNewTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);

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

        {/* <div className={classes.inputWrapper}></div> Тут потом заново шото придумать с враппером */}

        <TodoList
          todoArray={todoArray}
          toggleStatus={toggleStatus}
          deleteTask={deleteTask}
        ></TodoList>
      </div>
    </div>
  );
}

export default TodoApp;
