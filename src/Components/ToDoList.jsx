import React, { useState } from 'react';
import './Components/ToDoList.css';

const ToDoList = () => {

    return (
        <>
        
        <div className = "todo-conainter">
            <h1 className = "title">My To do List</h1>
            <div className = "input-container">
                <input 
                  type = "Text"
                  className = "heading-input"
                  placeholder = "Enter Heading"
                  value = {headingInput}
                  onChange={(e) => {setHeadingInput(e.target.value);}}

                />

                <button className = "add-list-button" onClick = {handleAddToDo}> Add Heading</button>

            </div>
        </div>

        <div className = "todo_main">

        </div>

        </>
    )
};

export default ToDoList;
