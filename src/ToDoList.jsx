import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([
    "Wake up at 6 a.m",
    "Take a shower",
    "Have some breakfast",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleDeleteTask(index) {
    const updateTask = task.filter((_, i) => i !== index);
    setTask(updateTask);
  }

  function handleMoveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  function handleMoveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          onChange={handleInputChange}
          value={newTask}
          placeholder="Enter a task ..."
          className="input-text"
        />
        <button className="add-btn" onClick={handleAddTask}>
          Add
        </button>
      </div>

      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
            <button
              className="move-btn"
              onClick={() => handleMoveTaskUp(index)}
            >
              👆
            </button>
            <button
              className="move-btn"
              onClick={() => handleMoveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
