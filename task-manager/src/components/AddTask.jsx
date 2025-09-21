import { useState } from "react";
import './task.css'
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";
const AddTask = () => {

    const [text,setText] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTask(text))
        setText("");
    }

  return (
  <form action="" onSubmit={handleSubmit} className="form">
    <input 
    type="text"
    placeholder="Add a task"
    value={text}
    onChange={(e)=>setText(e.target.value)}
    className="input" />
    <button type="submit" className="button">Add</button>
    </form>
  )
}

export default AddTask