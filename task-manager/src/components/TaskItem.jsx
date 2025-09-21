import React from 'react'

const TaskItem = (task) => {
  return (
    <li>
        {task.text}
        <div>
            <button className='button'>Done</button>
            <button className='button delete'>Delete</button>
        </div>
    </li>
  )
}

export default TaskItem