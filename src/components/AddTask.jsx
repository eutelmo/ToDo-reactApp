import React, { useState } from 'react';
import Button from './button';

import './AddTask.css';


const AddTask = ({handleTaskAdd}) => {
  const [inputData, setInputData] = useState("");
  
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  const handleTaskClick =() => {
    handleTaskAdd(inputData);
    setInputData("");
  }

  return (
  <div className="add-task-container">
    <input 
        onChange={handleInputChange} 
        value={inputData}
        className="add-task-input" 
        type="text" 
    />;
      <div className="add-task-button-container">
      <Button onClick={handleTaskClick}>Adicionar</Button>

      </div>
  </div>
  );
 }
 
export default AddTask;

