import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import AddTask from './pages/AddTask'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addtask' element={<AddTask />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
