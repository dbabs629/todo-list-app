import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar bg-slate-800 shadow-lg'>
      <div className='container justify-between mx-5'>
        <div className=''>
          <h1 className='text-2xl text-white font-semibold tracking-wider'>
            {title}
          </h1>
        </div>
        <div className=''>
          <div className=''>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Task List
            </Link>
            <Link to='/addtask' className='btn btn-ghost btn-sm rounded-btn'>
              Add
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Todo List',
}

Navbar.propTypes = {
  title: PropTypes.string,
}
export default Navbar
