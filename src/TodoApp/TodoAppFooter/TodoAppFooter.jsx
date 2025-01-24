import classes from "./TodoAppFooter.module.css";
import { useState } from "react";

const TodoAppFooter = (props) => {
  const [tasksPerPageInput, setTasksPerPageInput] = useState(
    props.tasksPerPage
  );

  const filter = (event) => {
    props.getFilter(event.target.value);
  };

  const pagesCount = Math.ceil(props.filteredCount / props.tasksPerPage);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setTasksPerPageInput(value);
    } else {
      alert("Only numeric values are allowed.");
    }
  };

  return (
    <>
      <div className={classes.pages}>
        {Array(pagesCount)
          .fill()
          .map((emptyElement, i) => (
            <button key={i} onClick={() => props.pageChangeHandler(i + 1)}>
              {i + 1}
            </button>
          ))}
      </div>

      <div className={classes.filterWrapper}>
        <button onClick={filter} value="all">
          All tasks <br />({props.taskCount.allTasksCount})
        </button>
        <button onClick={filter} value="active">
          Active tasks <br />({props.taskCount.activeTasksCount})
        </button>
        <button onClick={filter} value="completed">
          Completed tasks <br />({props.taskCount.completedTasksCount})
        </button>
      </div>

      <div>
        Tasks per page:
        <input
          className={classes.tasksCountInput}
          value={tasksPerPageInput}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.stopPropagation();
              props.tasksPerPageHandler(tasksPerPageInput);
            }
          }}
        ></input>
        <button onClick={() => props.tasksPerPageHandler(tasksPerPageInput)}>
          add
        </button>
      </div>
    </>
  );
};

export default TodoAppFooter;
