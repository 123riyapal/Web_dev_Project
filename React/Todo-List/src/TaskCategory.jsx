import React from 'react';
import Task from './Task';
import './TaskCategory.css';

const TaskCategory = ({ category, tasks, deleteTask }) => {
        
  return (
    <div className="task-category ">
      <h2>{category}</h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskCategory;
