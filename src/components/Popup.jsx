import { deleteTask } from "./helpers/deleteTask"

const Popup = ({ idTask, tasks, setTasks}) => {
  
  const handleDelete = (tasks, idTask, e) => {
    e.stopPropagation()
    
    setTasks(deleteTask(tasks, idTask))
  }
  
  return (
    <div className= "popup-delete bg-gray-700 p-2 rounded right-0 w-30 text-xs"> 
    <p onClick={e => handleDelete(tasks, idTask, e)}>Delete Task</p> 
    </div>
  )
}

export default Popup