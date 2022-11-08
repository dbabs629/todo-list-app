import { useRef, useState, useEffect } from 'react'
import EditDelete from '../shared/EditDelete'
import Options from '../shared/Options'

function TaskItem({ task, index }) {
  const [isCompleted, setCompleted] = useState(false)
  const [sepia, setSepia] = useState(true)
  const taskRef = useRef(null)
  const crossBarRef = useRef(null)

  useEffect(() => {
    crossBarRef.current.classList.toggle('hidden')
    crossBarRef.current.classList.toggle('flex')
  }, [isCompleted])

  useEffect(() => {
    sepia === true
      ? taskRef.current.classList.add('hover:sepia')
      : taskRef.current.classList.remove('hover:sepia')
  }, [sepia])

  const handleClick = (e) => {
    if (e.target.id === 'task-item') {
      setSepia(false)
      e.target.children[4].classList.toggle('hidden')
      e.target.children[4].classList.toggle('flex')
    }
  }

  return (
    <div
      id='task-item'
      ref={taskRef}
      onClick={handleClick}
      className='relative container flex flex-row justify-between shadow-lg gap-2 p-5 border my-3 hover:sepia hover:cursor-pointer w-full mx-auto'>
      <div
        id='crossBar'
        ref={crossBarRef}
        className='hidden absolute z-10 bg-white border self-center top-7 border-white w-full left-0 mt-4'></div>
      <div className='z-20 absolute -top-3 -left-3 w-1/4'>
        <div className='text-center text-slate-900 font-semibold rounded-full text-sm bg-white w-9 h-9 p-2'>
          {index + 1}
        </div>
      </div>
      <div className='self-center text-white break-all md:text-base text-xs'>
        {task.task}
      </div>
      <EditDelete task={task} />
      <Options setCompleted={setCompleted} setSepia={setSepia} sepia={sepia} />
    </div>
  )
}

export default TaskItem
