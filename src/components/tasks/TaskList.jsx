import { useContext } from 'react'
import TaskItem from './TaskItem'
import AddTaskForm from './AddTaskForm'
import TaskContext from '../context/TaskContext'

function TaskList() {
  const { tasks } = useContext(TaskContext)
  return (
    <>
      <AddTaskForm />
      <div className='container space-y-5'>
        {!tasks || tasks.length === 0 ? (
          <p className='text-center'>No Tasks Yet</p>
        ) : (
          tasks.map((task, index) => (
            <TaskItem key={task.id} task={task} index={index} />
          ))
        )}
      </div>
    </>
  )
}
export default TaskList
