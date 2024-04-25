// Dashboard.js
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import CreateTaskForm from './CreateTaskForm';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    // Ici vous pouvez charger les tâches depuis une API ou localStorage
  }, []);

  const addTask = (title) => {
    const newTask = { id: Math.random(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleTaskDeletion = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const filtered = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredTasks(filtered);
  }, [tasks, searchTerm]);

  return (
    <div>
      <CreateTaskForm addTask={addTask} />
      <input type="text" placeholder="Rechercher des tâches..." onChange={handleSearch} />
      <TaskList tasks={filteredTasks} handleTaskCompletion={handleTaskCompletion} handleTaskDeletion={handleTaskDeletion} />
    </div>
  );
};

export default Dashboard;
