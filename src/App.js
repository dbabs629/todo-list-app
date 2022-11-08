import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import TaskList from './components/tasks/TaskList'
import { TaskProvider } from './components/context/TaskContext'

function App() {
  return (
    <TaskProvider>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-10 h-full my-5 space-y-5 xl:px-10 overflow-y-scroll md:w-3/4 xl:w-1/2'>
          <TaskList />
        </main>
        <Footer />
      </div>
    </TaskProvider>
  )
}

export default App
