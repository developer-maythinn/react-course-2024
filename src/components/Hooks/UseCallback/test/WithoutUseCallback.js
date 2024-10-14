import React, { useState } from "react";

// TaskList component (child component)
const TaskList = ({ tasks, onAddTask }) => {
  console.log("TaskList rendered without useCallback");

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={onAddTask}>Add Task</button>
    </div>
  );
};

// Parent component
const WithoutUseCallback = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  // Without useCallback: function will be recreated on every render
  const addTask = () => {
    setTasks((prevTasks) => [...prevTasks, `Task ${prevTasks.length + 1}`]);
  };

  console.log("TodoApp rendered without useCallback");

  return (
    <div>
      <h1>Todo List App</h1>
      <TaskList tasks={tasks} onAddTask={addTask} />
    </div>
  );
};

export default WithoutUseCallback;
