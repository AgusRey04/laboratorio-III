import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./Login.css";

const Login = () => {

  
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(undefined);
  
  
  const handleValidateForm = (event) => {
    event.preventDefault();
    if (event.target.value.toLowerCase().includes("o") || event.target.value===""){
      console.log(false);
      setValidated(false);
    } else {
      setValidated(true);
      console.log(true);
    }

  };

  const handleKeyPress = (event) => {
    console.log(event.key);
    if (event.key.toLowerCase() === "o") {
      alert("Por favor, ¡Nombres de usuario sin la letra 'o'!");
    }
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    if (validated) {
      setShow(true);
      setUsername("");
    } 
    else if (validated === undefined) {
      setShow(undefined);
    }
    
    else {
      setShow(false);
      setTimeout(() => {
        setShow(undefined);
    
      }, 3000);
    }
  };
  return (
    <>
      <Card className="card-log">
        
        {show === undefined && (
        <Form  onChange={handleValidateForm}> {/*noValidate validated={validated}*/}
         <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ingrese el usuario..."
                onKeyDown={handleKeyPress}
                value={username}
                onChange={handleChange}
                className="input-lg"
              />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
          </Row>
          
          <Button type="submit" onClick={handleSubmit}>
            Registrarse
          </Button>
          <Row className="mb-3">
            <p>{username}</p>
          </Row>
          </Form>)}
        {show === false && (
            <Alert variant="danger">
              <Alert.Heading>Error!</Alert.Heading>
              <p> ¡Por favor verificar que el Usuario no este vacio y nombre de usuario sin la letra o/O!</p>
            </Alert>
          )}
          
          
        {show === true && (
            <Alert variant="success">
              <Alert.Heading>¡Usuario registrado correctamente!</Alert.Heading>
              <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => {setValidated(false);setShow(undefined)}} variant="outline-success">
            Close me
            </Button>
          </div>
            </Alert>
          )}


          
      </Card>
    </>
  );
};

export default Login;
