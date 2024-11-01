import {useState} from 'react'
import './ToDoList.css'

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function handleAddTask() {
        if(newTask.trim() !== "") {
            setTasks(prevTaskState => [...prevTaskState, newTask])
            setNewTask("")
        }
    }

    function handleRemoveTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function handleMoveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks]
            const prevTask = updatedTasks[index - 1]
            updatedTasks[index - 1] = updatedTasks[index]
            updatedTasks[index]  =  prevTask
            setTasks(updatedTasks)
        }
    }

    function handleMoveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks]
            const nextTask = updatedTasks[index + 1]
            updatedTasks[index + 1] = updatedTasks[index]
            updatedTasks[index]  =  nextTask
            setTasks(updatedTasks)
        }
    }

    return (
        <>
            <div className="to-do-list">
                <h1>To Do List</h1>

                <div>
                    <input type="text" value={newTask} onChange={() => handleInputChange(event)}/>
                    &nbsp;&nbsp;
                    <input className="add-button" type="submit" value="Add task" onClick={handleAddTask}/>
                </div>

                <ol>
                    {tasks.map((task, index) => (
                        <>
                            <li key={index}>
                                <span>{task}</span>
                                <div>
                                    <input type="button" className="delete-button mod-btn" value="done" onClick={() => handleRemoveTask(index)}/>
                                    &nbsp;&nbsp;
                                    <input className="move-up-button mod-btn" type="button" value="↑" onClick={() => handleMoveTaskUp(index)}/>
                                    &nbsp;&nbsp;
                                    <input className="move-down-button mod-btn" type="button" value="↓" onClick={() => handleMoveTaskDown(index)}/>
                                </div>
                            </li>
                        </>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default ToDoList