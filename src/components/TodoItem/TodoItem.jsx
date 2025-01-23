import { useState } from "react";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(props.task.trim());

  const changeStatus = () => {
    props.toggleStatus(props.id);
  };

  const deleteTargetTask = () => {
    props.deleteTask(props.id);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const saveChanges = () => {
    const trimmedTask = editedTask.trim()

    if (trimmedTask !== "") {
      props.updateTask(props.id, trimmedTask);
      setIsEditing(false);
    } else {
      setIsEditing(false);
    }
  };

  return (
    <div className={classes.todoItems}>
      {isEditing ? (
        <input
          className={classes.todoItemsText}
          type="text"
          autoFocus
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onBlur={saveChanges}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
              saveChanges();
            }
          }}
        ></input>
      ) : (
        <div
          className={classes.todoItemsText}
          onDoubleClick={handleDoubleClick}
        >
          {props.isCompleted ? <del>{props.task}</del> : props.task}
        </div>
      )}

      <div className={classes.todoItemsButtons}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={changeStatus}
        ></input>

        <button id={props.id} onClick={deleteTargetTask}>
          X
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
