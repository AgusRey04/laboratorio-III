import { useState } from "react";
import {  Form,InputGroup,Col,Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ChangeDolar = ({setDollarHandler,dollar}) => {
    const [showChnageDolar, setShowChnageDolar,] = useState(false)
    const HanderChangeDolar = (e) => {
      setDollarHandler(e.target.value)
    }
    const handleShowChnageDolar = () => {
      setShowChnageDolar(!showChnageDolar)
    }
  return (
    <>
    <Button onClick={handleShowChnageDolar} >
      {showChnageDolar? "Ocultar" : "Mostrar"}
    </Button>
    {showChnageDolar && (<Col md={6} lg={2}>
          <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text>Actualizar precio : $</InputGroup.Text>
            <Form.Control type="number" placeholder="Ingresa un número"  onChange={HanderChangeDolar} value={dollar} min="1" />
           
        </InputGroup>
        </Form>
      </Col>
      )
    }
    </>
      
  )
}

ChangeDolar.propTypes = {
  setDollarHandler: PropTypes.func,
  dollar: PropTypes.string
}


export default ChangeDolar