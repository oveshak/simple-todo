import React from 'react'
import TodoItems from './TodoItems'

const TodoItem = ({todoList}) => {
    console.log(todoList)
    return (
      <div className="list-container">
      {
         todoList.map((items)=>(
              <TodoItems  todoname={items.name} tododate={items.date} />
         
  ))}
  </div>
      
  )
}

export default TodoItem