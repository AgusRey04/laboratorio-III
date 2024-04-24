
import PropTypes from 'prop-types'


const TableItem = ({brand,income}) => {
  return (
    <>
      
     
        <tr>
          <td>{brand}</td>
          <td>{income}</td>
          
        </tr>
     
    </>

    
  )
}

TableItem.propTypes = {
    brand: PropTypes.string,
    income: PropTypes.number}

export default TableItem