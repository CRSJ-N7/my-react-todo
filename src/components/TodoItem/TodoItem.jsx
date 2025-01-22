import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  const changeStatus = () => {
    props.toggleStatus(props.id);
  };

  const deleteTargetTask = () => {
    props.deleteTask(props.id);
  };

  /* А вот здесь можно попытаться оборачивать текст с выполненной таской в тег <del>
  тег <del> - делает текст вычеркнутым
  либо добавлять отдельный класс для подобного элемента, если я хочу дополнительные
  стилевые штуки добавлять. 

  upd: <del> добавлен, теперь надо попытаться добавлять класс элементу
  */

  return (
    <div className={classes.todoItems}>

      {!props.isCompleted ? 
      <div className={classes.todoItemsText}>{props.task}</div>
    : <div className={classes.todoItemsText}><del>{props.task}</del></div>} 

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
