// import React from 'react'

import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
const TaskDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description, status } = location.state.task;

  const clickHandler = () => {
    navigate("/");
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>La tarea {status ? " está pendiente" : " ya fue realizada"}</p>
      <Button onClick={clickHandler}>Lista de Tareas</Button>
    </>
  );
};

export default TaskDetails;
