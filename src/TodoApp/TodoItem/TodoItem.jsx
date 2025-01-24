import { useState } from "react";
import classes from "./TodoItem.module.css";
import UncheckedIcon from "../../../assets/checkbox/checkbox_blank.svg";
import CheckedIcon from "../../../assets/checkbox/checkbox_completed.svg";
import DeleteButton from "../../../assets/delete-button/delete_task.svg";

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
    const trimmedTask = editedTask.trim();

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
        {props.isCompleted ? (
          <img src={CheckedIcon} alt="Completed" onClick={changeStatus} />
        ) : (
          <img src={UncheckedIcon} alt="Not completed" onClick={changeStatus} />
        )}

        <img
          className={classes.deleteBtn}
          src={DeleteButton}
          id={props.id}
          alt="Delete"
          onClick={deleteTargetTask}
        />
      </div>
    </div>
  );
};

export default TodoItem;
