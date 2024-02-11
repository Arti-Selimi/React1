import './App.css';
import {useState} from "react";
import {TaskList} from './Task';



function App() {

  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState('')

  
  const modifyToDo = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    if(newTask !== '') {
      const task = {
        id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id +1,
        name: newTask,
        status: false
      }
      setToDoList([...toDoList, task])
    }
  }
  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id))
  }

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if(task.id === id) {
          return {...task, status: true}
        } else {
          return task
        }
      })
    )
  }

  return (
    <div className="App">
      <div className="taskEntry">
        <input onChange={modifyToDo}  className='taskInput' placeholder='Add a task'/>
        <button onClick={addTask} className='taskButton'>Add Task</button>
      </div>
      <div className="tasks">
        <div className="list">
          <h1>Tasks</h1>
          {toDoList.map((task) => {
            return <TaskList 
            name={task.name} 
            id={task.id}
            deleteTask={deleteTask}
            completeTask={completeTask}
            status={task.status}
            />
          })}
        </div>
        <div className='completedTaskList'>
          <h1>Completed tasks</h1>
          {toDoList.map((task) => {
            return <h1>{task.status === true ? task.name : ''}</h1>
          })}
        </div>
        </div>
    </div>
  );
}

export default App;
