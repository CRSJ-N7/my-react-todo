import classes from "./TodoAppHeader.module.css";

const TodoAppHeader = (props) => {
  return (
    <>
      <h1 className={classes.todoHeader}>My React Todo</h1>

      <div className={classes.formWrapper}>
        <input
          className={classes.todoInput}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          onKeyDown={props.onKeyDown}
          placeholder={props.placeholder}
        />
        <button className={classes.addTaskBtn} onClick={props.onClick}>
          Add
        </button>
      </div>
    </>
  );
};

export default TodoAppHeader;
