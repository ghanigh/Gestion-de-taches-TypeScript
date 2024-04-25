import React, { useState } from 'react';

const TaskList = ({ tasks, handleTaskCompletion, handleTaskDeletion }) => {
  const [selectedTask, setSelectedTask] = useState(null); // État local pour stocker la tâche sélectionnée

  // Fonction pour gérer le clic sur une tâche et stocker la tâche sélectionnée
  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return (
    <div>
      {/* Liste des tâches */}
      {tasks.map((task) => (
        <div key={task.id}>
          {/* Affichage du titre de la tâche et de sa catégorie */}
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => handleTaskClick(task)} // Gestion du clic sur la tâche
          >
            {task.title} - {task.category}
          </span>
          {/* Boutons pour compléter et supprimer la tâche */}
          <button onClick={() => handleTaskCompletion(task.id)}>Compléter</button>
          <button onClick={() => handleTaskDeletion(task.id)}>Supprimer</button>
        </div>
      ))}

      {/* Affichage des détails de la tâche sélectionnée */}
      {selectedTask && (
        <div>
          <h3>Détails de la tâche sélectionnée</h3>
          <p>Titre : {selectedTask.title}</p>
          <p>Catégorie : {selectedTask.category}</p>
          {/* Ajoutez d'autres informations de la tâche ici */}
        </div>
      )}
    </div>
  );
};

export default TaskList;
