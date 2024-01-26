import React from "react";
import "./todoinput.css"
const TodoInput = () => {
  return (
    <>
      <div className="container">
          <div className="row kg-row ">
            <div className="col-6 mai">
              <input type="text" placeholder="Todo Here" />
            </div>
            <div className="col-4 mai">
              <input type="date" />
            </div>
            <div className="col-2 colam">
            <button type="button" className="btn btn-success kg-button" >Add</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default TodoInput;
