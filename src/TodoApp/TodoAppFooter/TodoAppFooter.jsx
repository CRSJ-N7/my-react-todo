import classes from "./TodoAppFooter.module.css";
import { useState } from "react";
import AddTaskButton from "../../../assets/AddTaskButton/AddTaskButton.svg";

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
    const numericValue = Number(value);

    if (
      !isNaN(numericValue) &&
      value !== "" &&
      numericValue > 0 &&
      numericValue <= 100
    ) {
      setTasksPerPageInput(numericValue);
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  };

  return (
    <>
      <div className={classes.todoFooterWrapper}>
        <div className={classes.pagesWrapper}>
          {Array(pagesCount)
            .fill()
            .map((emptyElement, i) => (
              <button
                key={i}
                className={
                  props.currentPage === i + 1
                    ? `${classes.page} ${classes.activePage}`
                    : classes.page
                }
                onClick={() => props.pageChangeHandler(i + 1)}
              >
                {i + 1}
              </button>
            ))}
        </div>

        <div className={classes.filterWrapper}>
          <button
            onClick={filter}
            className={
              props.filter === "all"
                ? `${classes.activeFilter}`
                : classes.filter
            }
            value="all"
          >
            All tasks <br />({props.taskCount.allTasksCount})
          </button>
          <button
            onClick={filter}
            className={
              props.filter === "active"
                ? `${classes.activeFilter}`
                : classes.filter
            }
            value="active"
          >
            Active tasks <br />({props.taskCount.activeTasksCount})
          </button>
          <button
            onClick={filter}
            className={
              props.filter === "completed"
                ? `${classes.activeFilter}`
                : classes.filter
            }
            value="completed"
          >
            Completed tasks <br />({props.taskCount.completedTasksCount})
          </button>
        </div>

        <div className={classes.tasksCountWrapper}>
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
          <button
            className={classes.taskCountButton}
            onClick={() => {
              props.tasksPerPageHandler(tasksPerPageInput);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoAppFooter;
