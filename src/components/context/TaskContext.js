import { useState, createContext } from 'react'

const TaskContext = createContext()
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState('')
  const [edit, setEdit] = useState({
    task: {},
    edit: false,
  })

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const editTask = (task) => {
    setEdit({
      task,
      edit: true,
    })
  }

  const updateTask = (id, newTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...newTask } : task))
    )
    setEdit(false)
  }

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setTasks(tasks.filter((task) => task.id !== id))
    }
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, edit, editTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}
export default TaskContext
