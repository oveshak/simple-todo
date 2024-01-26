import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Todoappname from './component/todoappname/Todoappname';
import TodoInput from './component/todoinput/TodoInput';
import TodoItem from './component/todoitem/TodoItem';

function App() {
  const todoItemList=[
    {
      name:"bus",
      date:"1/2/2023",
    },
    {
      name:"bus",
      date:"1/2/2023",
    },
    {
      name:"bus",
      date:"1/2/2023",
    },
  ]
  const [todoList,settodolist]=useState(todoItemList);
  const onclinkhandelchange=(itemName, itemDate)=>{
    const newTodo= {name:itemName, date:itemDate}
     const addtodoItem=[...todoList,newTodo];
    
     settodolist(addtodoItem);
   }
  return (
    <div className='App'>
     <div>
     <Todoappname/>
     <TodoInput nclinkhandelchanges={onclinkhandelchange}/>
     <TodoItem todoList={todoList}/>
     </div>
    </div>
  );
}

export default App;
