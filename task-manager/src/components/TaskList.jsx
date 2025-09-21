import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem';

const TaskList = () => {

    const [items, filters] = useSelector(state => state.tasks);
    console.log(items, 'items')
  return (
    <ul>
        {items.map(task =>(
            <TaskItem key={task.id} task={task}/>
        ))}
    </ul>
  )
}

export default TaskList