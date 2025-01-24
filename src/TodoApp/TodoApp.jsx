import { useEffect, useRef, useState } from "react";
import TodoAppHeader from "./TodoAppHeader/TodoAppHeader";
import TodoList from "./TodoList/TodoList";
import TodoAppFooter from "./TodoAppFooter/TodoAppFooter";
import classes from "./TodoApp.module.css";

function TodoApp() {
  const loadFromLocalStorage = () => {
    const savedState = localStorage.getItem("TodoApp");
    if (savedState) {
      return JSON.parse(savedState);
    }
    return null;
  };

  const savedState = loadFromLocalStorage();

  const [newTodo, setNewTodo] = useState("");
  const [todoArray, setTodoArray] = useState(savedState?.todoArray || []);
  const [filter, setFilter] = useState(savedState?.filter || "all");
  const [currentPage, setCurrentPage] = useState(savedState?.currentPage || 1);
  const [tasksPerPage, setTasksPerPage] = useState(
    savedState?.tasksPerPage || 5
  );

  const saveToLocalStorage = () => {
    const stateToSave = {
      todoArray,
      filter,
      currentPage,
      tasksPerPage,
    };

    localStorage.setItem("TodoApp", JSON.stringify(stateToSave));
  };

  useEffect(() => {
    saveToLocalStorage();
  }, [todoArray, filter, currentPage, tasksPerPage]);

  const inputRef = useRef(null);

  const filteredCount = todoArray.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true;
  }).length;

  const taskCount = {
    allTasksCount: todoArray.length,
    activeTasksCount: todoArray.filter((todo) => !todo.isCompleted).length,
    completedTasksCount: todoArray.filter((todo) => todo.isCompleted).length,
  };

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
    setCurrentPage(1);
  };

  const updateTask = (id, editedTask) => {
    setTodoArray((currentTodoList) => {
      return currentTodoList.map((todo) =>
        todo.id === id ? { ...todo, task: editedTask } : todo
      );
    });
  };

  const pageChangeHandler = (page) => {
    if (filteredCount === 0) {
      setCurrentPage((page) => page - 1);
    } else {
      setCurrentPage(page);
    }
  };

  const deleteAllCompleted = () => {
    setTodoArray((currentTodoList) =>
      currentTodoList.filter((todo) => !todo.isCompleted)
    );
  };

  const toggleAllStatuses = () => {
    const checkCompletedTasks = todoArray.some((todo) => todo.isCompleted);

    setTodoArray((currentTodoList) =>
      currentTodoList.map((todo) => ({
        ...todo,
        isCompleted: !checkCompletedTasks,
      }))
    );
  };

  const tasksPerPageHandler = (value) => {
    setTasksPerPage(value);
  };

  return (
    <div className={classes.app}>
      <div className={classes.todoContent}>
        <TodoAppHeader
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="...what’s next?"
          onClick={addNewTask}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
              addNewTask();
            }
          }}
          ref={inputRef}
          deleteAllCompleted={deleteAllCompleted}
          toggleAllStatuses={toggleAllStatuses}
        />
        {todoArray.length !== 0 ? (
          <TodoList
            todoArray={todoArray}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
            filter={filter}
            updateTask={updateTask}
            currentPage={currentPage}
            tasksPerPage={tasksPerPage}
          />
        ) : (
          <div> No current tasks </div>
        )}
        {todoArray.length !== 0 && (
          <TodoAppFooter
            getFilter={getFilter}
            filter={filter}
            todoArray={todoArray}
            tasksPerPage={tasksPerPage}
            filteredCount={filteredCount}
            pageChangeHandler={pageChangeHandler}
            currentPage={currentPage}
            tasksPerPageHandler={tasksPerPageHandler}
            taskCount={taskCount}
          />
        )}
      </div>
    </div>
  );
}

export default TodoApp;
