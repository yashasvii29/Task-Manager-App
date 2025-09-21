import './App.css'
import AddTask from './components/AddTask'
import FilterTask from './components/FilterTask'
import TaskList from './components/TaskList'

const App = () => {

  return (
  <div>
    <h1>Task Manager</h1>
    <AddTask/>
    <FilterTask/>
    <TaskList/>
  </div>
  )
}

export default App
