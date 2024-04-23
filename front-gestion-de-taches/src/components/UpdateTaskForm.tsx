import React, { useState } from 'react';

const UpdateTaskForm = ({ task, updateTask }) => {
  const [title, setTitle] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    updateTask({ ...task, title });
  };

  return (
    <div>
      <h2>Modifier la tâche</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default UpdateTaskForm;
