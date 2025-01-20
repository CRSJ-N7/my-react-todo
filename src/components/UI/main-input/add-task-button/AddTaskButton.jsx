import classes from "./AddTaskButton.module.css";

const AddTaskButton = (props) => {
  return (
    <button className={classes.addTaskBtn} {...props}>
      Add
    </button>
  );
};

export default AddTaskButton;
