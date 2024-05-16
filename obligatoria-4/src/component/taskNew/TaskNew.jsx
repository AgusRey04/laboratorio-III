import { useState } from "react";
import {  Button } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Card} from "react-bootstrap";
import PropTypes from "prop-types";

const TaskNew = ({onTaskDataSave}) => {
  const [showForm, setShowForm] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  
  const handleChangeTitle = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setEnteredDescription(event.target.value);
    console.log(event.target.value);
  };
  const handleClick = () => {
    setShowForm(!showForm);
  };

  const submitTaskHandler = (event) => {
    event.preventDefault();
    
    const taskData ={
        title: enteredTitle,
        description: enteredDescription,
        status : true
    }; 
    
    console.log(taskData);
    onTaskDataSave(taskData);
 
    setEnteredDescription("");
    setEnteredTitle("");
    
  };
  return (
    <>
      <Button onClick={handleClick}> {!showForm?"Agregar Tarea":"Esconder"}</Button>
      {showForm && (
        <Card bg="success">
        <Form className="text-white" onSubmit={submitTaskHandler}>
        <Form.Group className="mb-3" controlId="taskTitle">
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" placeholder="Titulo de la tare"  onChange={handleChangeTitle}
                      value={enteredTitle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control as="textarea"placeholder="Descripcion de la tarea" onChange={handleChangeDescription} value={enteredDescription}/>
        </Form.Group>
      
        <Button variant="primary" type="submit"  >
                    Agregar Tarea
                </Button>
                </Form>
        </Card>

      )}
    </>
  );
};

TaskNew.propTypes = {
  onTaskDataSave: PropTypes.func.isRequired,
};
export default TaskNew;
