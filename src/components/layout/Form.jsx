

function Form() {
  const date = new Date()
  //gets current date in year-month-date format
  const currentDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`

  return (
    <form>
      <div className='bg-white mx-auto rounded-md shadow-lg w-full p-10'>
        <div className='flex flex-col items-center space-y-5 w-full'>
          <div>
            <h2 className='text-xl text-slate-500 font-semibold'>Add Task</h2>
          </div>
          <div>
            <input
              type='text'
              placeholder='Enter task'
              className='p-3 border shadow-sm outline-slate-400 w-96'
            />
          </div>
          <div className='flex flex-row items-center justify-center gap-8 w-full'>
            <div>
              <select
                type='dropdown'
                className='p-2 border shadow-sm outline-slate-400 w-48 text-md'>
                <option default>---Choose tutorial---</option>
                <option> 12:00AM </option>
                <option> 1:00AM </option>
                <option> 2:00AM </option>
                <option> 3:00AM </option>
              </select>
            </div>
            <div>
              <input
                type='date'
                id='start'
                name='trip-start'
                value={currentDate}
                min='2022-10-01'
                max='2023-12-31'
                className='text-md p-2 border shadow-sm outline-slate-400 w-40'
              />
            </div>
          </div>
          <div>
            <button type='submit' className='btn bg-slate-700 text-white'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
export default Form
