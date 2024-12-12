import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]); // Lista de tarefas
  const [taskInput, setTaskInput] = useState(""); // Input de nova tarefa

  // Função para adicionar uma tarefa
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput(""); // Limpa o campo de entrada
    }
  };

  // Função para remover uma tarefa
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Função para marcar ou desmarcar uma tarefa como concluída
  const toggleCompleteTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="task-input">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <button onClick={() => toggleCompleteTask(task.id)}>
              {task.completed ? "Desmarcar" : "Concluir"}
            </button>
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
