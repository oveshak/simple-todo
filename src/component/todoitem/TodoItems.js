import React from 'react'

const TodoItems = ({todoname,tododate}) => {
  return (
    <>
    <div className="container">
      <div className="row kg-row ">
        <div className="col-6 mai">
         {todoname}
        </div>
        <div className="col-4 mai">
         {tododate}
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger kg-button" >Delete</button>
        </div>
      </div>
    </div>
</>
  )
}

export default TodoItems