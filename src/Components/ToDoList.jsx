import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [todos, setToDos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");

  const handleAddToDo = () => {
    if (headingInput.trim() !== '') {
      setToDos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setToDos(updatedTodos);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My To Do List</h1>

        <input
          type="text"
          value={headingInput}
          onChange={(e) => setHeadingInput(e.target.value)}
          placeholder="Enter heading"
        />
        <button onClick={handleAddToDo}>Add ToDo</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.heading}
              <button
                className="delete-button-heading"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete Heading
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
