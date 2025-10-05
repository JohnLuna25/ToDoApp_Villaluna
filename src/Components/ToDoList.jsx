import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({});

  const handleAddToDo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  };

  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].lists.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: "" });
    }
  };

  return (
    <div className="todo-container">
      <h1 className="title">My To Do List</h1>

      <div className="add-heading">
        <input
          type="text"
          value={headingInput}
          onChange={(e) => setHeadingInput(e.target.value)}
          placeholder="Enter heading"
        />
        <button onClick={handleAddToDo}>Add ToDo</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div>
              <strong>{todo.heading}</strong>
              <ul>
                {todo.lists.map((listItem, i) => (
                  <li key={i}>{listItem}</li>
                ))}
              </ul>

              <ul>
                {todo.lists.map((list, listIndex) => (
                  <li key={listIndex} className="todo_inside_list">
                    <p>{list}</p>
                  </li>
                ))}
              </ul>

              <div className="add-list">
                <input
                  type="text"
                  className="list-input"
                  placeholder="Add List"
                  value={listInputs[index] || ""}
                  onChange={(e) => handleListInputChange(index, e.target.value)}
                />
                <button
                  className="add-list-button"
                  onClick={() => handleAddList(index)}
                >
                  Add List
                </button>
              </div>
            </div>

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
  );
};

export default ToDoList;
