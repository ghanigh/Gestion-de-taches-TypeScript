// TaskList.js
import React from 'react';

const TaskList = ({ tasks, handleTaskCompletion, handleTaskDeletion }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
          <button onClick={() => handleTaskCompletion(task.id)}>Compléter</button>
          <button onClick={() => handleTaskDeletion(task.id)}>Supprimer</button> {/* Ajoutez le bouton de suppression */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
