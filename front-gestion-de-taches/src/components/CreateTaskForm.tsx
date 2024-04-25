import React, { useState } from 'react';

const CreateTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !category) return;
    addTask(title, category); // Passer la catégorie à la fonction addTask
    setTitle('');
    setCategory('');
  };

  return (
    <div>
      <h2>Créer une nouvelle tâche</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Entrez le titre de la tâche" />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Sélectionnez une catégorie</option>
          <option value="Courses">Courses</option>
          <option value="Ménage">Ménage</option>
          <option value="Cuisine">Cuisine</option>
          {/* Autres catégories... */}
        </select>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
