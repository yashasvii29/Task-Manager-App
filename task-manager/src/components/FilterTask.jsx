import React from 'react'
import { useSelector } from 'react-redux'

const FilterTask = () => {

    const filter = useSelector(state => state.tasks.filter);
    console.log(filter);
  return (
    <div className='filter'>
        <button className=''>All</button>
        <button>Completed</button>
    </div>
  )
}

export default FilterTask