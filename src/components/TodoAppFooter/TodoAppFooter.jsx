import classes from "./TodoAppFooter.module.css";

const TodoAppFooter = (props) => {
  const filter = (event) => {
    props.getFilter(event.target.value);
  };

  const pages = Math.ceil(props.todoArray.length / props.tasksPerPage);

  return (
    <>
      <div className={classes.pages}>{console.log(pages)}</div>

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
    </>
  );
};

export default TodoAppFooter;
