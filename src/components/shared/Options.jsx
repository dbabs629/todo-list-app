import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'

function Options({ setCompleted, sepia, setSepia }) {
  const optionsRef = useRef(null)
  const completedRef = useRef(null)
  const incompleteRef = useRef(null)

  const handleClick = (e) => {
    if (e.target.id === 'options') {
      e.target.classList.toggle('hidden')
      e.target.classList.toggle('flex')
      if (!sepia) {
        setSepia(true)
      }
    }
  }
  const complete = (e) => {
    setCompleted(true)
    optionsRef.current.classList.toggle('hidden')
    optionsRef.current.classList.toggle('flex')
    if (!sepia) {
      setSepia(true)
    }
  }

  const inComplete = (e) => {
    setCompleted(false)
    optionsRef.current.classList.toggle('hidden')
    optionsRef.current.classList.toggle('flex')
    if (!sepia) {
      setSepia(true)
    }
  }

  return (
    <>
      <div
        id='options'
        ref={optionsRef}
        onClick={handleClick}
        className='options hidden absolute m-0 py-5 top-0 left-0 w-full flex-row justify-center gap-20 z-10 bg-slate-800 opacity-95 cursor-pointer'>
        <button onClick={complete} ref={completedRef} className='btn btn-ghost'>
          <FontAwesomeIcon
            icon={faCheck}
            id='complete'
            ref={completedRef}
            className='icon'
            size='xl'
            width='25px'
            height='25px'
          />
        </button>

        <button
          onClick={inComplete}
          ref={incompleteRef}
          className='btn btn-ghost z-10'>
          <FontAwesomeIcon
            icon={faX}
            id='incomplete'
            className='icon'
            ref={incompleteRef}
            size='lg'
            width='25px'
            height='25px'
          />
        </button>
      </div>
    </>
  )
}
export default Options
