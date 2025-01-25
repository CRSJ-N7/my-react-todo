// Кто-то мне говорил, что это не обязаловка такое писать. Но получается обязаловка? Или как тогда использовать ref?
// Без React.forwardRef() тоже работает всё отлично, но моя консоль на меня ругается. ЧЗХ?
import React from "react";
import classes from "./TodoAppHeader.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import DeleteAllCompletedButton from "../../../assets/DeleteAllCompletedButton/DeleteAllCompleted.svg";
import AddTaskButton from "../../../assets/AddTaskButton/AddTaskButton.svg";
import ChangeAllButton from "../../../assets/ChangeAllButton/ChangeAllButton.svg";

const TodoAppHeader = React.forwardRef((props, ref) => {
  return (
    <>
      <h1 className={classes.todoHeader}>My ******* Todo</h1>

      <div className={classes.formWrapper}>
        <div className={classes.buttonWrapper}>
          <button
            className={classes.headerBtn}
            data-tooltip-id="add-task"
            data-tooltip-content="Click to add task"
            data-tooltip-class="addTaskTooltip"
          >
            <img src={AddTaskButton} onClick={props.onClick} />
            <ReactTooltip
              id="add-task"
              className="addTaskTooltip"
              place="left"
            ></ReactTooltip>
          </button>
        </div>
        <input
          ref={ref}
          className={classes.todoInput}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          onKeyDown={props.onKeyDown}
          placeholder={props.placeholder}
        />

        <div className={classes.buttonWrapper}>
          <button
            className={classes.headerBtn}
            data-tooltip-id="toggle-statuses"
            data-tooltip-content="Toggle all statuses"
            data-tooltip-class="toggleAllStatuses"
          >
            <img src={ChangeAllButton} onClick={props.toggleAllStatuses} />
            <ReactTooltip
              id="toggle-statuses"
              className="toggleAllStatuses"
            ></ReactTooltip>
          </button>

          <button
            className={classes.headerBtn}
            data-tooltip-id="delete-completed"
            data-tooltip-content="Delete all completed"
            data-tooltip-class="deleteAllCompleted"
          >
            <ReactTooltip
              id="delete-completed"
              className="deleteAllCompleted"
              place="right"
            ></ReactTooltip>
            <img
              src={DeleteAllCompletedButton}
              onClick={props.deleteAllCompleted}
            />
          </button>
        </div>
      </div>
    </>
  );
});

export default TodoAppHeader;
