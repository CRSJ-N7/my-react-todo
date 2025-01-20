import classes from "./TodoItems.module.css";

const TodoItems = (props) => {
  const changeStatus = () => {
    props.toggleStatus(props.id);
  };

  const deleteTargetTask = () => {
    props.deleteTask(props.id);
  };

  return (
    <>
      <div className={classes.todoItems}>
        <div id={props.id} className={classes.todoItemsText}>
          {props.task}
        </div>
        <div className={classes.todoItemsButtons}>
          <input
            type="checkbox"
            id={props.id}
            checked={props.isCompleted}
            onChange={changeStatus}
          ></input>

          <button id={props.id} onClick={deleteTargetTask}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItems;
