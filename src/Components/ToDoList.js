import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
function ToDoList({ toDoList, deleteTodo, setTodo, completeTask }) {

console.log(toDoList)
  return (<div className='eachTask'>
      <ul>
          {toDoList.map( item => (
              <div >
                  <li key={item.index} > 
                    <input type='checkbox' value={item.isComplete} onChange={() => completeTask(item.index, !item.isComplete)} />
                    {/* <input type='checkbox' onClick={() => completeTask()} /> */}
                    <span>
                        {item.task}
                    </span>  
                    <span className='icons'>
                        <button onClick={() => deleteTodo(item.index)}> <FaTrash /> </button>  
                        <button onClick={() => setTodo(item)}> <FaEdit /> </button>   
                    </span>    
                  </li>
              </div>
          ) )}
      </ul>  
  </div>)
}

export default ToDoList;
