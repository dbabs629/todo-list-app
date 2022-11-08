import { useContext } from 'react'
import TaskContext from '../context/TaskContext'

function EditDelete({ task }) {
  const { editTask, deleteTask } = useContext(TaskContext)

  return (
    <div className='flex flex-row items-center gap-1 pl-1'>
      <button
        onClick={() => {
          editTask(task)
        }}
        className='btn btn-ghost'>
        Edit
      </button>
      <button
        onClick={() => {
          deleteTask(task.id)
        }}
        className='btn btn-ghost'>
        Delete
      </button>
    </div>
  )
}
export default EditDelete
