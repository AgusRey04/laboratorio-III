import React from 'react'

const Conteo = ({ beers }) => {
    const flitrado = beers.filter((beer)=> {
        if (beer.beerStyle=="Red"|| beer.beerStyle=="IPA"){
            return {beer}
        }
    });
    
  
    return (
      <div>
        <h5>Cantidad de cervezas de estilo Red e IPA</h5>
        <p>{flitrado.length}</p>
      </div>
    );
  };
  
export default Conteo
