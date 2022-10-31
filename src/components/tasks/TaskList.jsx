import { useState, useEffect } from 'react'

import TaskItem from './TaskItem'

function TaskList() {
  const newTasks = [
    { task: 'first task' },
    { task: 'second task' },
    { task: 'third task' },
  ]
  const [tasks, setTasks] = useState(newTasks)

  return (
    <>
      <div className='container'>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} id={index + 1} />
        ))}
      </div>
    </>
  )
}
export default TaskList
