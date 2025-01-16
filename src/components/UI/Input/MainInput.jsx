import classes from './MainInput.module.css'

const MainInput = () => {

const [task, setTask] = useState();

    return (
            <div>
        <input className={classes.mainInput}>
        </input>
            <button>Add task</button>
            </div>
    )
}

export default MainInput;