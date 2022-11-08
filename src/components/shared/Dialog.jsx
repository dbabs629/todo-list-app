function Dialog() {
  return (
    <div
      id='dialog'
      className='dialogue-animation z-10 absolute top-0 left-0 hidden p-2 bg-red-500 w-full text-center text-white mb-5 font-semibold shadow-md'>
      <p>Input field is empty, please enter a task.</p>
    </div>
  )
}
export default Dialog
