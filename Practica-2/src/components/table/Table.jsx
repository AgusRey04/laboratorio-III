import PropTypes from "prop-types";
import TableItem from "../tableItem/TableItem";
import { Table as TableBootstrap } from "react-bootstrap";
const Table = ({ netIncomes }) => {
  return (
    <>
    <TableBootstrap striped bordered hover>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Income</th>
        </tr>
      </thead>
      <tbody>

      {netIncomes.map((netIncome, index) => {
        return (
          <TableItem
            key={index}
            brand={netIncome.brand}
            income={netIncome.income}
          />
        );
      })}
      </tbody>
      </TableBootstrap>
    </>
  );
};

Table.propTypes = {
  netIncomes: PropTypes.object.isRequired,
};

export default Table;
