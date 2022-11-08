import { useState, useContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TaskContext from '../context/TaskContext'
import Dialog from '../shared/Dialog'

function AddTaskForm() {
  const [text, setText] = useState('')
  const [isDisabled, setDisabled] = useState(true)
  const { addTask, edit, updateTask } = useContext(TaskContext)

  const handleTextChange = (e) => {
    if (e.target.value === ' ' || e.target.value === '') {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    setText(e.target.value)
  }

  useEffect(() => {
    if (edit.edit) {
      setText(edit.task.task)
    }
  }, [edit])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === ' ' || text === '') {
      document.getElementById('dialog').classList.toggle('hidden')
      setDisabled(true)
      setTimeout(() => {
        document.getElementById('dialog').classList.toggle('hidden')
      }, 5000)
    } else if (edit.edit === true) {
      let task = { task: text, isCompleted: false, id: uuidv4() }
      updateTask(edit.task.id, task)
      /* setDisabled(true) ***** allows the user to submit an empty input after edit/updating a task, a change to display the alert erorr & animation */
    } else {
      let task = { task: text, isCompleted: false, id: uuidv4() }
      addTask(task)
      console.log(task)
      setDisabled(true)
    }
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative bg-white mx-auto rounded-md shadow-lg p-10'>
        <Dialog />
        <div className='flex flex-col items-center space-y-5'>
          <div>
            <h2 className='text-xl text-slate-500 font-semibold'>Add Task</h2>
          </div>
          <div>
            <input
              type='text'
              onInput={handleTextChange}
              value={text}
              placeholder='Please enter a task'
              className='p-3 border shadow-sm outline-slate-400 w-96'
            />
          </div>
          <div>
            <button
              type='submit'
              disabled={isDisabled}
              className='btn bg-slate-700 text-white disabled:text-slate-400'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
export default AddTaskForm
