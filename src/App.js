import './App.css';
import Title from './components/Title';
import InputForm from './components/inputForm';
import TodoList from './components/TodoList';
import React, { useState } from 'react';






 function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="body">
      <React.StrictMode>
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
      </React.StrictMode>
    </div>
    
  );
}

export default App;
