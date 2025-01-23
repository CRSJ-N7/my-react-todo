import classes from "./TodoAppHeader.module.css";
import React from "react"; // Кто-то мне говорил, что это не обязаловка такое писать. Но получается обязаловка? Или как тогда использовать ref?
// Без React.forwardRef() тоже работает всё отлично, но моя консоль на меня ругается. ЧЗХ?

const TodoAppHeader = React.forwardRef((props, ref) => {
  return (
    <>
      <h1 className={classes.todoHeader}>My React Todo</h1>

      <div className={classes.formWrapper}>
        <input
          ref={ref}
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
});

export default TodoAppHeader;
