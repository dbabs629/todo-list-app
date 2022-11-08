import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar bg-slate-800 shadow-lg'>
      <h1 className='text-3xl text-white mx-auto font-bold tracking-wide'>
        {title}
      </h1>
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
