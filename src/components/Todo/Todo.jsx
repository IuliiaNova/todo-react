import { useState } from "react";
import "./style.css";

const Todo = ({ id, topic, details}) => {

  const [isChecked, setIsChecked] = useState(false)
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='todo_container'>
      <input 
      type='checkbox'
      checked={isChecked}
      onChange={handleCheckBoxChange}
      />
      <div className='todo_info'>
        <p className='todo_topic'>{topic}</p>
        <p className='todo_details'>{details}</p>
      </div>
    </div>
  )
}

export default Todo;