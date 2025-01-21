import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const changeStatus = () => {
    props.toggleStatus(props.id);
  };

  const deleteTargetTask = () => {
    props.deleteTask(props.id);
  };

  return (
    <div className={classes.todoItems}>
      <div className={classes.todoItemsText}>{props.task}</div>
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
