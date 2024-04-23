import React, { useState } from 'react';

const CreateTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
  };

  return (
    <div>
      <h2>Créer une nouvelle tâche</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Entrez le titre de la tâche" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
