import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Liste des tâches</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => handleTaskCompletion(task.id)} />
            <span>{task.title}</span>
            <button onClick={() => handleTaskDeletion(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
