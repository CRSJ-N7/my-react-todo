import classes from "./TodoAppHeader.module.css";
// Кто-то мне говорил, что это не обязаловка такое писать. Но получается обязаловка? Или как тогда использовать ref?
// Без React.forwardRef() тоже работает всё отлично, но моя консоль на меня ругается. ЧЗХ?
import React from "react";
import DeleteAllCompletedButton from "../../../assets/DeleteAllCompletedButton/DeleteAllCompleted.svg";
import AddTaskButton from "../../../assets/AddTaskButton/AddTaskButton.svg";
import ChangeAllButton from "../../../assets/ChangeAllButton/ChangeAllButton.svg";

const TodoAppHeader = React.forwardRef((props, ref) => {
  return (
    <>
      <h1 className={classes.todoHeader}>My ******* Todo</h1>

      <div className={classes.formWrapper}>
        <div className={classes.buttonWrapper}>
          <button className={classes.headerBtn}>
            <img src={AddTaskButton} onClick={props.onClick} />
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
          <button className={classes.headerBtn}>
            <img src={ChangeAllButton} onClick={props.toggleAllStatuses} />
          </button>

          <button className={classes.headerBtn}>
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
