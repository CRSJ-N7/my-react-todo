import { useState } from "react";
import classes from "./TodoItem.module.css";
import UncheckedIcon from "../../../assets/Checkbox/CheckboxBlank.svg";
import CheckedIcon from "../../../assets/Checkbox/CheckBoxCompleted.svg";
import DeleteButton from "../../../assets/DeleteButton/DeleteButton.svg";
import EditTask from "../../../assets/EditTask/EditTask.svg";

const TodoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(props.task.trim());

  const changeStatus = () => {
    props.toggleStatus(props.id);
  };

  const deleteTargetTask = () => {
    props.deleteTask(props.id);
  };

  const handleEditFunc = () => {
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
      <img
        src={EditTask}
        className={classes.editButton}
        onClick={handleEditFunc}
      />
      {isEditing ? (
        <input
          className={classes.todoItemsEditedText}
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
          className={`${classes.todoItemsText} ${
            props.isCompleted ? classes.completedTask : ""
          }`}
          onDoubleClick={handleEditFunc}
        >
          {props.task}
        </div>
      )}
      {props.isCompleted ? (
        <img
          src={CheckedIcon}
          className={classes.toggleButton}
          alt="Completed"
          onClick={changeStatus}
        />
      ) : (
        <img
          src={UncheckedIcon}
          className={classes.toggleButton}
          alt="Not completed"
          onClick={changeStatus}
        />
      )}
      <img
        className={classes.deleteBtn}
        src={DeleteButton}
        id={props.id}
        alt="Delete"
        onClick={deleteTargetTask}
      />
    </div>
  );
};

export default TodoItem;
