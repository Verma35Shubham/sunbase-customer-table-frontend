import PropTypes from "prop-types";
import "./table.css";

const Table = ({ tableHeaders, tableData }) => {
  const handleEditClick = () => { };
  const handleDeleteClick = () => { };
  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (<th className="tableHeader" key={index}>{header}</th>))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            const { id, uuid, firstName, lastName, street, address, city, state, email, phone } = data;
            return (<tr key={id}>
              <td>{id}</td>
              <td>{uuid}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{street}</td>
              <td>{address}</td>
              <td>{city}</td>
              <td>{state}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>
                <button className="edit btn" onClick={() => handleEditClick()}>Edit</button>
                <button className="delete btn" onClick={() => handleDeleteClick()}>Delete</button>
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </>
  )
}

Table.propTypes = {
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  tableData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
}
export default Table