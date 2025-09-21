import './App.css'
import AddTask from './components/AddTask'
import FilterTask from './components/FilterTask'
import TaskList from './components/TaskList'
import './components/task.css'

const App = () => {

  return (
  <div className='container'>
    <h1 className='title'>Task Manager</h1>
    <AddTask/>
    <FilterTask/>
    <TaskList/>
  </div>
  )
}

export default App
