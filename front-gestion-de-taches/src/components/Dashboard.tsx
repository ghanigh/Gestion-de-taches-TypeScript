import React, { useState } from 'react';
import TaskList from './TaskList';
import CreateTaskForm from './CreateTaskForm';
import UpdateTaskForm from './UpdateTaskForm';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

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
  };

  return (
    <div>
      <CreateTaskForm addTask={addTask} />
      <TaskList tasks={tasks} handleTaskCompletion={handleTaskCompletion} handleTaskDeletion={handleTaskDeletion} />
      {/* <UpdateTaskForm task={selectedTask} updateTask={updateTask} /> */}
    </div>
  );
};

export default Dashboard;
