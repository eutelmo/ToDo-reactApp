import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './button';

import './TaskDetails.css';

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackToHome = () => {
    history.goBack();
  }
  return ( 
    <>
      <div className="back-button-container">
          <Button onClick={handleBackToHome}>Voltar</Button>
      </div>
        <div className="task-details-container">
          <h2>{params.taskTitle}</h2>
          <p>
            TEXT123
          </p>
        </div>
    </>
   );
}
 
export default TaskDetails;