import React,{useState} from "react";
import "./todoinput.css"
const TodoInput = ({nclinkhandelchanges}) => {
  const [addtodoName, setAddTodoName]=useState("")
  const [addtodoDate, setAddTodoDate]=useState("")
  const onchangetodoname=(e)=>{
      setAddTodoName(e.target.value)
  }
  const onchangetododate=(e)=>{
    setAddTodoDate(e.target.value)
  }
  const handalClick=()=>{
    nclinkhandelchanges(addtodoName , addtodoDate)
    setAddTodoDate("")
    setAddTodoName("")
  }
  return (
    <>
      <div className="container">
          <div className="row kg-row ">
            <div className="col-6 mai">
              <input type="text" placeholder="Todo Here" value={addtodoName} onChange={onchangetodoname}/>
            </div>
            <div className="col-4 mai">
              <input type="date" value={addtodoDate} onChange={onchangetododate}/>
            </div>
            <div className="col-2 colam">
            <button type="button" className="btn btn-success kg-button" onClick={handalClick}>Add</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default TodoInput;
