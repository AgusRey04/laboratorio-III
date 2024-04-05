import React from 'react'
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
const BeerStyle = ({ id, beerStyle}) => {
  return (
    

    <Card style={{ width: '15rem', margin: '10px' }}>
      <div>Style: {beerStyle}</div>
    </Card>
  );
};

BeerStyle.propTypes = {
  id: PropTypes.number,
  beerStyle: PropTypes.string
};

export default BeerStyle
