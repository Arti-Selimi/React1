import './App.css'

export const TaskList = (props) => {
    if (props.status === false) {
        return (
            <div className="taskHolder">
                <h1>{props.name}</h1>
                <i className="fa-solid fa-x" onClick={() => props.deleteTask(props.id)}></i>
                <i className="fa-solid fa-check" onClick={() => props.completeTask(props.id)}></i>
            </div>
        )
    } else {
        return ''
    }
}
