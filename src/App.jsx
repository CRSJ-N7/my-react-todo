import TodoLogo from "./components/UI/logo/TodoLogo.jsx";
import MainInput from "./components/UI/main-input/input/MainInput.jsx";
import { useState } from "react";
import AddTaskButton from "./components/UI/main-input/add-task-button/AddTaskButton.jsx";
import TodoList from "./components/UI/todo-list/TodoList.jsx";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  let [todoArray, setTodoArray] = useState([]);

  const addNewTask = () => {
    if (!task) {
      console.warn("You can't create an empty task");
      return;
    }
    const newTask = {
      task,
      id: self.crypto.randomUUID(),
      isCompleted: false,
    };

    setTodoArray((currentTodoList) => [...currentTodoList, newTask]);
    setTask("");
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
    <>
      <div className="app">
        <TodoLogo></TodoLogo>
        <div className="todosContent">
          <div className="inputWrapper">
            <MainInput
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              placeholder="...whats on your mind?"
              onKeyDown={(e) => {
                e.key === "Enter" ? addNewTask() : null;
              }}
            ></MainInput>
            <AddTaskButton onClick={addNewTask}></AddTaskButton>
          </div>
          <TodoList
            todoArray={todoArray}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
          ></TodoList>
        </div>
      </div>
    </>
  );
}

export default App;
