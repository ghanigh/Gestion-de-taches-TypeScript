// Dashboard.js

import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import CreateTaskForm from './CreateTaskForm';
import UpdateTaskForm from './UpdateTaskForm'; // Importez le composant UpdateTaskForm
import '../style/Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // État pour stocker la tâche sélectionnée à modifier

  useEffect(() => {
    // Charger les tâches depuis une API ou localStorage ici
    // Par exemple :
    // fetchTasks();
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

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setSelectedTask(null); // Réinitialiser la tâche sélectionnée après la mise à jour
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task); // Définir la tâche sélectionnée pour la modification
  };

  useEffect(() => {
    const filtered = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredTasks(filtered);
  }, [tasks, searchTerm]);

  return (
    <div>
      <CreateTaskForm addTask={addTask} />
      <input type="text" placeholder="Rechercher des tâches..." onChange={handleSearch} />
      <TaskList
        tasks={filteredTasks}
        handleTaskCompletion={handleTaskCompletion}
        handleTaskDeletion={handleTaskDeletion}
        handleEditTask={handleEditTask} // Passer la fonction handleEditTask à TaskList
      />
      {selectedTask && <UpdateTaskForm task={selectedTask} updateTask={updateTask} />} {/* Afficher UpdateTaskForm si une tâche est sélectionnée */}
    </div>
  );
};

export default Dashboard;
