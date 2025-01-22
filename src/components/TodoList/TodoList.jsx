import TodoItem from "../TodoItem/TodoItem";
import classes from "./TodoList.module.css";


/* Может стоит попробовать условный рендеринг? Т.е. передать пропсом текущее значение фильтра
и с помощью обычных if (filter === 'completed) { .//  } рендерить только те таски, которые нужны?
Тогда мне не нужен будет filteredArray и при этом я не буду мутировать основной массив?
think about it
*/
const TodoList = ({ filteredArray, toggleStatus, deleteTask }) => {
  return (
    <div className={classes.todoList}>

      {filteredArray.map((todoArray) => (
        <TodoItem
          key={todoArray.id}
          toggleStatus={toggleStatus}
          deleteTask={deleteTask}
          {...todoArray}
        />

      ))}
      
    </div>
  );
};

export default TodoList;
