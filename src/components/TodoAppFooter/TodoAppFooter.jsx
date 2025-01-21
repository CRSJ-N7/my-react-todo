import classes from "./TodoAppFooter.module.css";

const TodoAppFooter = (props) => {
  const filter = (event) => {
    props.getFilter(event.target.value);
  };

  return (
    <div className={classes.filterWrapper}>
      <button onClick={filter} value="all">
        All tasks
      </button>
      <button onClick={filter} value="active">
        Active tasks
      </button>
      <button onClick={filter} value="completed">
        Completed tasks
      </button>
    </div>
  );
};

export default TodoAppFooter;
