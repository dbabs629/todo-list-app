function TaskItem({ task, id }) {
  return (
    <div className='container flex flex-row items-center justify-between shadow-lg gap-2 p-5 border my-3 hover:sepia hover:cursor-pointer w-96 mx-auto'>
      <div className='flex flex-row items-center gap-2 w-3/4'>
        <div className='text-center rounded-full text-md shadow-sm bg-white w-8 h-8 p-1'>
          {id}
        </div>
        <div className='text-white'>{task.task}</div>
      </div>
      <div className='flex flex-row items-center gap-2 w-1/4'>
        <div className=''>Date</div>
        <div className=''>Time</div>
      </div>
    </div>
  )
}
export default TaskItem
