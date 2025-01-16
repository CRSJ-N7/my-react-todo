import classes from './AddTasksButton.module.css'

const AddTasksButton = (props) => {


    return (
        <button className={classes.addButton} {...props}>Add</button>
    )

};

export default AddTasksButton;