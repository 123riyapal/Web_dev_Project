import  { useState } from 'react';
import TaskCategory from './TaskCategory';
import TaskForm from './TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (category, title, priority) => {
    const newTask = { id: Date.now(), category, title, priority };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const categories = ["Assignments", "Study Schedule", "Personal Goals", "Entertainment Program","others"];

  return (
    <div className="app-container">
      <h1 className="app-title">To-do List✅</h1>
      <TaskForm categories={categories} addTask={addTask} />
      <div className="task-categories">
        {categories.map(category => (
          <TaskCategory
            key={category}
            category={category}
            tasks={tasks.filter(task => task.category === category)}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
