import React from 'react';

function Task({ task, onDelete }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
}

export default Task;
