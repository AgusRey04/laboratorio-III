import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const TaskNew = ({ onTaskDataSave }) => {
  const navigate = useNavigate();
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(enteredTitle !== "" && enteredDescription !== "");
  }, [enteredTitle, enteredDescription]);

  const handleChangeTitle = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setEnteredDescription(event.target.value);
    console.log(event.target.value);
  };

  const submitTaskHandler = (event) => {
    event.preventDefault();

    const taskData = {
      title: enteredTitle,
      description: enteredDescription,
      status: true,
      delete: false,
    };

    console.log(taskData);
    onTaskDataSave(taskData);

    setEnteredDescription("");
    setEnteredTitle("");
    navigate("/");
  };
  return (
    <>
      {
        <Card bg="success">
          <Form className="text-white">
            <Form.Group className="mb-3" controlId="taskTitle">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titulo de la tare"
                onChange={handleChangeTitle}
                value={enteredTitle}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Descripcion de la tarea"
                onChange={handleChangeDescription}
                value={enteredDescription}
              />
            </Form.Group>

            <Button
              onClick={submitTaskHandler}
              variant="primary"
              type="submit"
              disabled={!formValid}
            >
              Agregar Tarea
            </Button>
            <Button onClick={() => navigate("/")}>
              Volver a la lista de Tareas
            </Button>
          </Form>
        </Card>
      }
    </>
  );
};

TaskNew.propTypes = {
  onTaskDataSave: PropTypes.func.isRequired,
};
export default TaskNew;
