import React from 'react';
import './Task.css';

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <div className={`task-priority ${task.priority.toLowerCase()}`}>
        {task.priority}
      </div>
      <div className="task-title">
        {task.title}
      </div>
      <button className="delete-task" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
