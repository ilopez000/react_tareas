import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Aprender React' },
    { id: 2, text: 'Hacer la tarea' },
  ]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
