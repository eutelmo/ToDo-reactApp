import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import {HashRouter as Router, Route} from 'react-router-dom';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/header';
import TaskDetails from './components/TaskDetails';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programacao',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ]);

  useEffect(() => {
    const FatchTasks = async() => {
      
      const { data } = await axios.get(
          "https://jsonplaceholder.cypress.io/todos?_limit=10"
        );
        setTasks(data);
    };
    FatchTasks();
  }, []);

  const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed : !task.completed}

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAdd = (taskTitle) =>{
    const newTask = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]
    setTasks(newTask);
  };

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    
    setTasks(newTasks);
  }

  return (
    <Router>
            <div className="container">
              <Header />
              <Route 
              path="/"
              exact
              render={() => (
                <>
                  <AddTask handleTaskAdd={handleTaskAdd} />

                  <Tasks tasks={tasks} 
                     handleTaskClick={handleTaskClick}
                    handleTaskDelete={handleTaskDelete}
                  />
              </>

              )}/>
             <Route path="/:taskTitle" component={TaskDetails}/>
            </div>
    </Router>
  );
};

export default App;