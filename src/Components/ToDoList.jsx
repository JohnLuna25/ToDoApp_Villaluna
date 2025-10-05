import React, { useState } from "react";
import "./ToDoList.css";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({});

  const handleAddToDo = () => {
    const text = headingInput.trim();
    if (!text) return;
    setTodos(prev => [...prev, { heading: text, lists: [] }]);
    setHeadingInput("");
  };

  const handleDeleteTodo = (index) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
    setListInputs(prev => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };

  const handleListInputChange = (index, value) => {
    setListInputs(prev => ({ ...prev, [index]: value }));
  };

  const handleAddList = (index) => {
    const text = (listInputs[index] || "").trim();
    if (!text) return;
    setTodos(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], lists: [...copy[index].lists, text] };
      return copy;
    });
    setListInputs(prev => ({ ...prev, [index]: "" }));
  };

  return (
    <div className="app-wrapper">
      <div className="todo-container">
        <div className="center-block">
          <h1 className="title">My To Do List</h1>

          <div className="add-heading">
            <input
              type="text"
              value={headingInput}
              onChange={(e) => setHeadingInput(e.target.value)}
              placeholder="Enter heading"
            />
            <button className="add-todo-button" onClick={handleAddToDo}>
              Add ToDo
            </button>
          </div>
        </div>

        <div className="todo-grid">
          {todos.map((todo, index) => (
            <div className="todo-box" key={index}>
              <div className="todo-header">
                <strong>{todo.heading}</strong>
                <button
                  className="delete-button-heading"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </button>
              </div>

              <ul className="inner-list">
                {todo.lists.map((l, i) => (
                  <li key={i} className="todo_inside_list">{l}</li>
                ))}
              </ul>

              <div className="add-list">
                <input
                  className="list-input"
                  value={listInputs[index] || ""}
                  onChange={(e) => handleListInputChange(index, e.target.value)}
                  placeholder="Add list item"
                />
                <button
                  className="add-list-button"
                  onClick={() => handleAddList(index)}
                >
                  Add List
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
