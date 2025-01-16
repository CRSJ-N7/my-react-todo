import { useState } from "react";
import classes from './MainInput.module.css'
import AddTasksButton from '../add-button/AddTasksButton.jsx'

const MainInput = () => {


const [task, setTask] = useState('');
const [todoArray, setTodoArray] = useState([]);

const addNewTask = () => {

    const newTask = {
        id: self.crypto.randomUUID(),
        task,
        isCompleted: false,
    }
    
    setTodoArray([...todoArray, newTask])
    setTask('');
    console.log(todoArray);
}

    return (
            <div>
        <input 
        className={classes.mainInput}
        value={task} 
        onChange={e => setTask(e.target.value)}>
        </input>
            <AddTasksButton onClick={addNewTask}></AddTasksButton>
            </div>
           
    )
}

export default MainInput;