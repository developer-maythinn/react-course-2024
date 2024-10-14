import React, { useState, useCallback } from "react";

// TaskList component (child component)
const TaskList = ({ tasks, onAddTask }) => {
  console.log("TaskList rendered with useCallback");

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
const Todo = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

  // With useCallback: function will only be recreated if dependencies change
  const addTask = useCallback(() => {
    setTasks((prevTasks) => [...prevTasks, `Task ${prevTasks.length + 1}`]);
  }, [setTasks]);

  console.log("TodoApp rendered with useCallback");

  return (
    <div>
      <h1>Todo List App</h1>
      <TaskList tasks={tasks} onAddTask={addTask} />
    </div>
  );
};

export default Todo;
